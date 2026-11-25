/**
 * JOB DONE ? — LocalStorage Persistence Manager
 */
(function (global) {
  "use strict";

  const KEYS = {
    LANG: "jobdone_lang",
    SOUND: "jobdone_sound",
    GAME_STATE: "jobdone_game_state",
    LAST_CONFIG: "jobdone_last_config",
    EXPLANATIONS: "jobdone_explanations"
  };

  function safeGet(key, fallback) {
    try {
      const raw = global.localStorage.getItem(key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function safeSet(key, value) {
    try {
      global.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  function safeRemove(key) {
    try {
      global.localStorage.removeItem(key);
    } catch (e) {
      // ignore
    }
  }

  const Storage = {
    getLang() {
      const lang = safeGet(KEYS.LANG, "fr");
      return lang === "en" ? "en" : "fr";
    },
    setLang(lang) {
      safeSet(KEYS.LANG, lang === "en" ? "en" : "fr");
    },

    getSoundEnabled() {
      return Boolean(safeGet(KEYS.SOUND, true));
    },
    setSoundEnabled(enabled) {
      safeSet(KEYS.SOUND, Boolean(enabled));
    },

    saveGameState(state) {
      return safeSet(KEYS.GAME_STATE, state);
    },
    loadGameState() {
      return safeGet(KEYS.GAME_STATE, null);
    },
    clearGameState() {
      safeRemove(KEYS.GAME_STATE);
    },
    hasSavedGame() {
      const state = this.loadGameState();
      return Boolean(state && state.status === "playing" && Array.isArray(state.players) && state.players.length >= 2);
    },

    saveLastConfig(config) {
      return safeSet(KEYS.LAST_CONFIG, config);
    },
    loadLastConfig() {
      return safeGet(KEYS.LAST_CONFIG, null);
    },

    getAllExplanations() {
      return safeGet(KEYS.EXPLANATIONS, {});
    },
    getCardExplanation(cardId, lang) {
      const all = this.getAllExplanations();
      const entry = all[String(cardId)];
      if (!entry) return "";
      return entry[lang] || "";
    },
    setCardExplanation(cardId, lang, text) {
      const all = this.getAllExplanations();
      const key = String(cardId);
      if (!all[key]) all[key] = { fr: "", en: "" };
      all[key][lang] = String(text || "").trim();
      return safeSet(KEYS.EXPLANATIONS, all);
    }
  };

  global.JobDone = global.JobDone || {};
  global.JobDone.Storage = Storage;
})(window);
