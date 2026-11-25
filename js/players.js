/**
 * JOB DONE ? — Players, Teams, Tokens & Ranking
 * Strictly uses the official 5-color palette:
 * #FFFFFF, #F3B61F, #A29F15, #510D0A, #191102
 */
(function (global) {
  "use strict";

  const TOKENS = [
    {
      id: 0,
      symbol: "★",
      bg: "#F3B61F",
      text: "#191102",
      border: "#191102",
      labelFr: "Étoile Or",
      labelEn: "Gold Star"
    },
    {
      id: 1,
      symbol: "◆",
      bg: "#A29F15",
      text: "#FFFFFF",
      border: "#191102",
      labelFr: "Losange Olive",
      labelEn: "Olive Diamond"
    },
    {
      id: 2,
      symbol: "▲",
      bg: "#510D0A",
      text: "#FFFFFF",
      border: "#F3B61F",
      labelFr: "Triangle Rouge",
      labelEn: "Red Triangle"
    },
    {
      id: 3,
      symbol: "●",
      bg: "#191102",
      text: "#F3B61F",
      border: "#F3B61F",
      labelFr: "Cercle Noir",
      labelEn: "Black Circle"
    },
    {
      id: 4,
      symbol: "■",
      bg: "#FFFFFF",
      text: "#191102",
      border: "#F3B61F",
      labelFr: "Carré Blanc/Or",
      labelEn: "White/Gold Square"
    },
    {
      id: 5,
      symbol: "✦",
      bg: "#FFFFFF",
      text: "#510D0A",
      border: "#510D0A",
      labelFr: "Éclat Blanc/Rouge",
      labelEn: "White/Red Spark"
    }
  ];

  const Players = {
    TOKENS,

    /**
     * Create initial player/team objects, all starting at 0 points.
     * @param {Array<{name: string, members?: string}>} entries
     * @param {"individual"|"teams"} mode
     */
    createPlayers(entries, mode) {
      return entries.map((entry, idx) => {
        const token = TOKENS[idx % TOKENS.length];
        const fallbackName = mode === "teams" ? `Équipe ${idx + 1}` : `Joueur ${idx + 1}`;
        return {
          id: idx + 1,
          name: (entry.name || "").trim() || fallbackName,
          members: (entry.members || "").trim(),
          score: 0,
          correctCount: 0,
          wrongCount: 0,
          turnsPlayed: 0,
          token
        };
      });
    },

    /**
     * Compute ranked list with proper tie handling (e.g., 1, 1, 3).
     * @param {Array} players
     * @returns {Array} sorted players with `rank` property
     */
    getRankings(players) {
      const sorted = [...players].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (b.correctCount !== a.correctCount) return b.correctCount - a.correctCount;
        return a.id - b.id;
      });

      let currentRank = 1;
      return sorted.map((player, index) => {
        if (index > 0 && player.score < sorted[index - 1].score) {
          currentRank = index + 1;
        }
        return Object.assign({}, player, { rank: currentRank });
      });
    },

    /**
     * Return the neighbor who draws & reads the card (official rule: neighbor of active player).
     */
    getReaderPlayer(players, activeIndex) {
      if (!players || players.length < 2) return null;
      const readerIndex = (activeIndex + 1) % players.length;
      return players[readerIndex];
    }
  };

  global.JobDone = global.JobDone || {};
  global.JobDone.Players = Players;
})(window);
