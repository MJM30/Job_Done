/**
 * JOB DONE ? — Shared Application Utilities, i18n (FR/EN) & Sound Engine
 */
(function (global) {
  "use strict";

  const TRANSLATIONS = {
    fr: {
      // Navigation & Common
      navHome: "Accueil",
      navRules: "Règles",
      navPlay: "Jouer",
      navResume: "Reprendre",
      soundOn: "Son activé",
      soundOff: "Son désactivé",
      langLabel: "FR / EN",
      footerTagline: "JOB DONE ? — Les soft skills au travail, ça se joue !",
      footerNote: "Jeu de société numérique · 60 cartes officielles · 2 à 6 joueurs",

      // Home / Accueil
      heroBadge: "JEU DE SOCIÉTÉ · SOFT SKILLS AU TRAVAIL",
      heroCatchphrase: "Les soft skills au travail, ça se joue !",
      heroDesc:
        "Une carte, une affirmation sur la vie au travail. Réponds VRAI ou FAUX, avance ton pion sur le plateau de 10 cases et deviens le premier à atteindre 10 points !",
      btnPlayNow: "JOUER MAINTENANT",
      btnDiscoverRules: "DÉCOUVRIR LES RÈGLES",
      btnResumeGame: "REPRENDRE LA PARTIE EN COURS",
      savedBannerText: "Une partie est actuellement sauvegardée.",
      featuresTitle: "Les caractéristiques du jeu",
      featPlayersTitle: "2 à 6 joueurs",
      featPlayersDesc: "En solo chacun pour soi ou en équipes avec un pion par équipe.",
      featTimeTitle: "15 minutes",
      featTimeDesc: "Des parties rapides, dynamiques et idéales en atelier ou entre collègues.",
      featCardsTitle: "60 cartes officielles",
      featCardsDesc: "30 cartes Niveau 1 (Simple) et 30 cartes Niveau 2 (Difficile), en français et anglais.",
      featFormatTitle: "Vrai ou Faux",
      featFormatDesc: "Des affirmations concrètes sur la vie au travail pour débattre et progresser.",
      levelsTitle: "Deux niveaux de difficulté",
      level1Badge: "NIVEAU 1 · SIMPLE",
      level1Title: "Idéal pour démarrer",
      level1Cards: "30 cartes officielles",
      level1Good: "Bonne réponse : +1 point",
      level1Bad: "Mauvaise réponse : 0 point",
      level1Desc: "Des situations du quotidien professionnel pour poser les bases des soft skills sans pénalité.",
      level2Badge: "NIVEAU 2 · DIFFICILE",
      level2Title: "Pour aller plus loin",
      level2Cards: "30 cartes officielles",
      level2Good: "Bonne réponse : +1 point",
      level2Bad: "Mauvaise réponse : −1 point",
      level2Desc: "Des situations plus nuancées où chaque erreur fait reculer votre pion d'une case (sans jamais descendre sous 0).",

      // Configuration
      configTitle: "Configurer la partie",
      configSubtitle: "Choisissez vos joueurs, votre mode et le niveau de difficulté avant de lancer la partie.",
      stepMode: "1. Mode de jeu",
      modeIndividual: "Partie individuelle",
      modeIndividualDesc: "Chacun joue pour soi avec son propre pion.",
      modeTeams: "Partie en équipes",
      modeTeamsDesc: "Jouez en équipes, avec un pion par équipe.",
      stepCount: "2. Nombre de joueurs",
      stepCountTeams: "2. Nombre d'équipes",
      stepNames: "3. Noms des joueurs",
      stepNamesTeams: "3. Noms des équipes",
      playerPlaceholder: "Nom du joueur",
      teamPlaceholder: "Nom de l'équipe",
      membersPlaceholder: "Membres (facultatif, ex: Alice, Bob)",
      stepDifficulty: "4. Niveau de difficulté",
      diffSimple: "Niveau 1 · SIMPLE",
      diffSimpleSub: "+1 pt bonne réponse · 0 pt mauvaise réponse",
      diffHard: "Niveau 2 · DIFFICILE",
      diffHardSub: "+1 pt bonne réponse · −1 pt mauvaise réponse",
      diffMixed: "Mode MIXTE",
      diffMixedSub: "Alternance des cartes Niveau 1 et Niveau 2",
      summaryTitle: "Récapitulatif de la partie",
      summaryMode: "Mode",
      summaryDifficulty: "Difficulté",
      summaryPlayers: "Participants",
      summaryGoal: "Objectif",
      summaryGoalValue: "Premier à 10 points (départ à 0)",
      btnStartGame: "COMMENCER LA PARTIE",

      // Rules / Règles
      rulesTitle: "Règles officielles du jeu",
      rulesSubtitle: "Tout ce qu'il faut savoir pour jouer à JOB DONE ?",
      rulesGoalTitle: "Le but du jeu",
      rulesGoalText:
        "Une carte, une affirmation sur la vie au travail. Tu réponds vrai ou faux. Chaque bonne réponse fait avancer ton pion d'une case. Le premier à 10 points gagne !",
      rulesMaterialTitle: "Le matériel",
      rulesMat1: "30 cartes niveau 1 (simple)",
      rulesMat2: "30 cartes niveau 2 (difficile)",
      rulesMat3: "1 petit plateau de 10 cases (Départ à Arrivée)",
      rulesMat4: "1 pion par joueur (ou par équipe)",
      rulesTeamTitle: "Seul ou en équipe ?",
      rulesTeamText:
        "Pas besoin d'équipe : chacun joue pour soi. Si vous préférez, vous pouvez aussi jouer en équipes, avec un pion par équipe.",
      rulesHowTitle: "Comment jouer",
      rulesStep1: "Chaque joueur pose son pion sur la case Départ (0 point).",
      rulesStep2: "Choisissez le niveau : simple, difficile ou mixte.",
      rulesStep3: "À ton tour, ton voisin pioche une carte et te lit l'affirmation à voix haute.",
      rulesStep4: "Tu réponds : VRAI ou FAUX.",
      rulesStep5: "On vérifie la réponse, on bouge le pion, puis c'est au joueur suivant.",
      rulesPointsTitle: "Système de points",
      rulesPointsRule: "1 point = 1 case : on avance (ou on recule) son pion. On ne recule jamais avant la case Départ (0 point).",
      rulesQrTitle: "Le QR code & les explications",
      rulesQrText:
        "Derrière chaque carte physique se trouve un QR code pour découvrir l'explication de la réponse. Dans cette version numérique, une fenêtre d'explication s'affiche après chaque réponse et vous permet même d'ajouter ou d'éditer vos propres notes pédagogiques.",
      rulesWinBanner: "LE PREMIER JOUEUR À 10 POINTS GAGNE LA PARTIE !",

      // Game / Jeu
      turnLabel: "Tour",
      scoreLabel: "Score",
      pointsShort: "pts",
      boardStart: "DÉPART",
      boardFinish: "ARRIVÉE",
      activeTurnLabel: "C'est au tour de",
      readerHint: "lit la carte à voix haute",
      cardPrefix: "CARTE",
      levelSimpleBadge: "NIVEAU 1 · SIMPLE",
      levelHardBadge: "NIVEAU 2 · DIFFICILE",
      levelMixedBadge: "MODE MIXTE",
      btnTrue: "VRAI",
      btnFalse: "FAUX",
      remainingCards: "cartes restantes",
      leaderboardTitle: "Classement en direct",
      historyTitle: "Historique des tours",
      historyEmpty: "Aucun tour joué pour le moment.",
      btnPause: "Pause",
      btnRestart: "Recommencer",
      btnAbandon: "Abandonner",
      btnHistory: "Historique",

      // Explanation Modal
      correctTitle: "BONNE RÉPONSE !",
      wrongTitle: "MAUVAISE RÉPONSE !",
      yourAnswerLabel: "Réponse donnée",
      officialAnswerLabel: "Réponse officielle",
      pointsImpactLabel: "Impact sur le score",
      floorNotice: "(Case Départ atteinte : le score ne peut pas être inférieur à 0)",
      explanationHeading: "Explication pédagogique (QR Code verso)",
      explanationEmptyPlaceholder:
        "Aucune explication officielle n'est incluse dans le PDF pour cette carte. Vous pouvez ajouter votre propre note pédagogique ci-dessous :",
      explanationEditBtn: "Ajouter / Modifier l'explication",
      explanationSaveBtn: "Enregistrer",
      explanationSavedToast: "Explication enregistrée pour cette carte.",
      btnNextPlayer: "JOUEUR SUIVANT →",
      btnSeeVictory: "VOIR LE RÉSULTAT FINAL →",

      // Modals (Pause / Abandon / Restart / Reshuffle)
      pauseTitle: "Partie en pause",
      pauseDesc: "Votre progression est automatiquement sauvegardée. Vous pouvez reprendre à tout moment.",
      btnResume: "REPRENDRE LA PARTIE",
      abandonTitle: "Abandonner la partie ?",
      abandonDesc: "Si vous abandonnez maintenant, la partie en cours sera effacée.",
      btnConfirmAbandon: "OUI, ABANDONNER",
      btnCancel: "ANNULER",
      restartTitle: "Recommencer la partie ?",
      restartDesc: "Tous les scores seront remis à 0 et un nouveau paquet sera mélangé.",
      btnConfirmRestart: "OUI, RECOMMENCER",
      reshuffleToast: "Toutes les cartes ont été jouées ! Le paquet a été remélangé.",
      transitionPrefix: "Au tour de",

      // Victory / Victoire
      victoryTitle: "BRAVO, TU AS GAGNÉ !",
      victorySubtitle: "a atteint 10 points et remporté la partie !",
      victoryFinalScore: "Score final",
      victoryLeaderboard: "Classement final",
      victoryStatsTurns: "Tours joués",
      victoryStatsAccuracy: "Bonnes réponses",
      btnReplay: "REJOUER",
      btnBackHome: "RETOUR À L'ACCUEIL",
      rankTieLabel: "ex æquo",
      noGameAlert: "Aucune partie en cours. Redirection vers la configuration..."
    },
    en: {
      // Navigation & Common
      navHome: "Home",
      navRules: "Rules",
      navPlay: "Play",
      navResume: "Resume",
      soundOn: "Sound on",
      soundOff: "Sound off",
      langLabel: "FR / EN",
      footerTagline: "JOB DONE ? — Soft skills in the workplace, made playable!",
      footerNote: "Digital board game · 60 official cards · 2 to 6 players",

      // Home / Accueil
      heroBadge: "BOARD GAME · SOFT SKILLS IN THE WORKPLACE",
      heroCatchphrase: "Soft skills in the workplace, made playable!",
      heroDesc:
        "One card, one statement about life at work. Answer TRUE or FALSE, move your pawn forward on the 10-space board, and be the first to reach 10 points!",
      btnPlayNow: "PLAY NOW",
      btnDiscoverRules: "DISCOVER THE RULES",
      btnResumeGame: "RESUME SAVED GAME",
      savedBannerText: "A game in progress is currently saved.",
      featuresTitle: "Game Highlights",
      featPlayersTitle: "2 to 6 players",
      featPlayersDesc: "Play individually or in teams with one pawn per team.",
      featTimeTitle: "15 minutes",
      featTimeDesc: "Fast-paced, engaging rounds ideal for workshops or colleagues.",
      featCardsTitle: "60 official cards",
      featCardsDesc: "30 Level 1 (Easy) cards and 30 Level 2 (Hard) cards, in French and English.",
      featFormatTitle: "True or False",
      featFormatDesc: "Real workplace statements to spark discussion and build soft skills.",
      levelsTitle: "Two Difficulty Levels",
      level1Badge: "LEVEL 1 · EASY",
      level1Title: "Great to get started",
      level1Cards: "30 official cards",
      level1Good: "Right answer: +1 point",
      level1Bad: "Wrong answer: 0 points",
      level1Desc: "Everyday workplace situations to practice core soft skills with no penalty.",
      level2Badge: "LEVEL 2 · HARD",
      level2Title: "Take it to the next level",
      level2Cards: "30 official cards",
      level2Good: "Right answer: +1 point",
      level2Bad: "Wrong answer: −1 point",
      level2Desc: "More nuanced situations where every mistake moves your pawn back one space (never below 0).",

      // Configuration
      configTitle: "Game Setup",
      configSubtitle: "Choose your players, mode, and difficulty level before starting.",
      stepMode: "1. Game Mode",
      modeIndividual: "Individual",
      modeIndividualDesc: "Everyone plays for themselves with their own pawn.",
      modeTeams: "Teams",
      modeTeamsDesc: "Play in teams, with one pawn per team.",
      stepCount: "2. Number of players",
      stepCountTeams: "2. Number of teams",
      stepNames: "3. Player names",
      stepNamesTeams: "3. Team names",
      playerPlaceholder: "Player name",
      teamPlaceholder: "Team name",
      membersPlaceholder: "Members (optional, e.g. Alice, Bob)",
      stepDifficulty: "4. Difficulty Level",
      diffSimple: "Level 1 · EASY",
      diffSimpleSub: "+1 pt right answer · 0 pt wrong answer",
      diffHard: "Level 2 · HARD",
      diffHardSub: "+1 pt right answer · −1 pt wrong answer",
      diffMixed: "MIXED Mode",
      diffMixedSub: "Alternates between Level 1 and Level 2 cards",
      summaryTitle: "Game Summary",
      summaryMode: "Mode",
      summaryDifficulty: "Difficulty",
      summaryPlayers: "Participants",
      summaryGoal: "Goal",
      summaryGoalValue: "First to 10 points (starting at 0)",
      btnStartGame: "START GAME",

      // Rules / Règles
      rulesTitle: "Official Game Rules",
      rulesSubtitle: "Everything you need to know to play JOB DONE?",
      rulesGoalTitle: "The Goal",
      rulesGoalText:
        "Each card has a sentence about life at work. You answer true or false. Each right answer moves your pawn forward one space. The first to 10 points wins!",
      rulesMaterialTitle: "What's in the box",
      rulesMat1: "30 level 1 cards (easy)",
      rulesMat2: "30 level 2 cards (hard)",
      rulesMat3: "1 small board with 10 spaces (Start to Finish)",
      rulesMat4: "1 pawn per player (or per team)",
      rulesTeamTitle: "Alone or in teams?",
      rulesTeamText:
        "No teams needed: everyone plays for themselves. If you like, you can also play in teams, with one pawn per team.",
      rulesHowTitle: "How to play",
      rulesStep1: "Each player puts their pawn on the Start space (0 points).",
      rulesStep2: "Choose the level: easy, hard, or mixed.",
      rulesStep3: "On your turn, the player next to you draws a card and reads it out loud.",
      rulesStep4: "You answer: TRUE or FALSE.",
      rulesStep5: "Check the answer, move the pawn, then it's the next player's turn.",
      rulesPointsTitle: "Points System",
      rulesPointsRule: "1 point = 1 space: move your pawn forward (or back). You never go back past the Start space (0 points).",
      rulesQrTitle: "The QR Code & Explanations",
      rulesQrText:
        "On the back of every physical card is a QR code to discover the explanation of the answer. In this digital version, an explanation panel appears after each answer and lets you add or edit your own pedagogical notes.",
      rulesWinBanner: "THE FIRST PLAYER TO REACH 10 POINTS WINS THE GAME!",

      // Game / Jeu
      turnLabel: "Turn",
      scoreLabel: "Score",
      pointsShort: "pts",
      boardStart: "START",
      boardFinish: "FINISH",
      activeTurnLabel: "Active player",
      readerHint: "reads the card out loud",
      cardPrefix: "CARD",
      levelSimpleBadge: "LEVEL 1 · EASY",
      levelHardBadge: "LEVEL 2 · HARD",
      levelMixedBadge: "MIXED MODE",
      btnTrue: "TRUE",
      btnFalse: "FALSE",
      remainingCards: "cards left",
      leaderboardTitle: "Live Standings",
      historyTitle: "Turn History",
      historyEmpty: "No turns played yet.",
      btnPause: "Pause",
      btnRestart: "Restart",
      btnAbandon: "Quit",
      btnHistory: "History",

      // Explanation Modal
      correctTitle: "RIGHT ANSWER!",
      wrongTitle: "WRONG ANSWER!",
      yourAnswerLabel: "Your answer",
      officialAnswerLabel: "Official answer",
      pointsImpactLabel: "Score impact",
      floorNotice: "(Start space reached: score can never go below 0)",
      explanationHeading: "Pedagogical explanation (Back QR Code)",
      explanationEmptyPlaceholder:
        "No official explanation is included in the PDF for this card. You can add your own pedagogical note below:",
      explanationEditBtn: "Add / Edit explanation",
      explanationSaveBtn: "Save",
      explanationSavedToast: "Explanation saved for this card.",
      btnNextPlayer: "NEXT PLAYER →",
      btnSeeVictory: "VIEW FINAL RESULT →",

      // Modals
      pauseTitle: "Game Paused",
      pauseDesc: "Your progress is automatically saved. You can resume at any time.",
      btnResume: "RESUME GAME",
      abandonTitle: "Quit the game?",
      abandonDesc: "If you quit now, the current saved game will be cleared.",
      btnConfirmAbandon: "YES, QUIT",
      btnCancel: "CANCEL",
      restartTitle: "Restart the game?",
      restartDesc: "All scores will reset to 0 and a fresh deck will be shuffled.",
      btnConfirmRestart: "YES, RESTART",
      reshuffleToast: "All cards have been played! The deck has been reshuffled.",
      transitionPrefix: "Up next:",

      // Victory / Victoire
      victoryTitle: "CONGRATULATIONS, YOU WON!",
      victorySubtitle: "reached 10 points and won the game!",
      victoryFinalScore: "Final Score",
      victoryLeaderboard: "Final Standings",
      victoryStatsTurns: "Turns played",
      victoryStatsAccuracy: "Correct answers",
      btnReplay: "PLAY AGAIN",
      btnBackHome: "BACK TO HOME",
      rankTieLabel: "tied",
      noGameAlert: "No active game found. Redirecting to setup..."
    }
  };

  // Subtle Web Audio API synthesizer (no external audio files required)
  const Sound = {
    _ctx: null,
    _getCtx() {
      if (!this._ctx) {
        const AudioCtx = global.AudioContext || global.webkitAudioContext;
        if (AudioCtx) this._ctx = new AudioCtx();
      }
      return this._ctx;
    },
    play(type) {
      if (!global.JobDone.Storage.getSoundEnabled()) return;
      const ctx = this._getCtx();
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume().catch(() => {});

      const now = ctx.currentTime;
      if (type === "correct") {
        this._tone(ctx, 523.25, now, 0.12, "sine", 0.12);
        this._tone(ctx, 659.25, now + 0.1, 0.16, "sine", 0.14);
      } else if (type === "wrong") {
        this._tone(ctx, 240, now, 0.16, "triangle", 0.12);
        this._tone(ctx, 190, now + 0.14, 0.2, "triangle", 0.12);
      } else if (type === "victory") {
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          this._tone(ctx, freq, now + i * 0.11, 0.25, "sine", 0.14);
        });
      } else if (type === "click") {
        this._tone(ctx, 440, now, 0.05, "sine", 0.06);
      }
    },
    _tone(ctx, freq, start, duration, type, gainVal) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(gainVal, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + duration);
    }
  };

  const App = {
    Sound,

    getLang() {
      return global.JobDone.Storage.getLang();
    },

    t(key) {
      const lang = this.getLang();
      return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.fr[key] || key;
    },

    /**
     * Apply translations to all elements with [data-i18n] and [data-i18n-placeholder].
     */
    applyTranslations() {
      const lang = this.getLang();
      document.documentElement.lang = lang;

      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = this.t(key);
      });

      document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        el.setAttribute("placeholder", this.t(key));
      });

      document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
        btn.textContent = lang === "fr" ? "FR ▾ EN" : "EN ▾ FR";
        btn.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
      });

      document.querySelectorAll("[data-sound-toggle]").forEach((btn) => {
        const enabled = global.JobDone.Storage.getSoundEnabled();
        btn.textContent = enabled ? "🔊" : "🔇";
        btn.title = enabled ? this.t("soundOn") : this.t("soundOff");
      });
    },

    /**
     * Bind shared navbar controls (language toggle, sound toggle, resume link).
     */
    initSharedUI(onLangChange) {
      this.applyTranslations();

      document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const next = this.getLang() === "fr" ? "en" : "fr";
          global.JobDone.Storage.setLang(next);
          this.applyTranslations();
          Sound.play("click");
          if (typeof onLangChange === "function") onLangChange(next);
        });
      });

      document.querySelectorAll("[data-sound-toggle]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const next = !global.JobDone.Storage.getSoundEnabled();
          global.JobDone.Storage.setSoundEnabled(next);
          this.applyTranslations();
          if (next) Sound.play("click");
        });
      });

      // Show/hide resume buttons if a saved game exists
      const hasSaved = global.JobDone.Storage.hasSavedGame();
      document.querySelectorAll("[data-requires-saved-game]").forEach((el) => {
        el.hidden = !hasSaved;
      });
    },

    /**
     * Show a brief non-blocking toast notification.
     */
    showToast(message, durationMs) {
      let container = document.getElementById("jd-toast-container");
      if (!container) {
        container = document.createElement("div");
        container.id = "jd-toast-container";
        container.className = "toast-container";
        document.body.appendChild(container);
      }
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = message;
      container.appendChild(toast);

      requestAnimationFrame(() => toast.classList.add("toast--visible"));
      setTimeout(() => {
        toast.classList.remove("toast--visible");
        setTimeout(() => toast.remove(), 300);
      }, durationMs || 3200);
    },

    /**
     * Escape HTML to prevent XSS when rendering player names or custom explanations.
     */
    escapeHtml(str) {
      return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }
  };

  global.JobDone = global.JobDone || {};
  global.JobDone.App = App;
})(window);
