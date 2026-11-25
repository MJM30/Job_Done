/**
 * JOB DONE ? — Official Scoring Engine
 * Rules:
 * - Level 1 (simple): Correct = +1, Wrong = 0
 * - Level 2 (difficile): Correct = +1, Wrong = -1
 * - 1 point = 1 space on the 10-space board (0 = Start, 10 = Finish)
 * - Score never goes below 0 (cannot move back past Start)
 * - First player to reach 10 points wins immediately
 */
(function (global) {
  "use strict";

  const MIN_SCORE = 0;
  const TARGET_SCORE = 10;

  const Scoring = {
    MIN_SCORE,
    TARGET_SCORE,

    /**
     * Evaluate a player's answer against a card.
     * @param {Object} card
     * @param {boolean} givenAnswer
     * @param {number} currentScore
     */
    evaluate(card, givenAnswer, currentScore) {
      const isCorrect = Boolean(givenAnswer) === Boolean(card.answer);
      let rawDelta = 0;

      if (isCorrect) {
        rawDelta = 1;
      } else if (card.level === "difficile") {
        rawDelta = -1;
      } else {
        rawDelta = 0;
      }

      const newScore = Math.max(MIN_SCORE, Math.min(TARGET_SCORE, currentScore + rawDelta));
      const actualDelta = newScore - currentScore;
      const hasWon = newScore >= TARGET_SCORE;

      return {
        isCorrect,
        rawDelta,
        actualDelta,
        previousScore: currentScore,
        newScore,
        hasWon
      };
    }
  };

  global.JobDone = global.JobDone || {};
  global.JobDone.Scoring = Scoring;
})(window);
