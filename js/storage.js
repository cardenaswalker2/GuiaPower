/**
 * Storage and State Management for Power Platform Learning Master
 * Uses localStorage with robust fallback and auto-sync
 */

const STORAGE_KEYS = {
  COMPLETED_MODULES: 'pp_completed_modules',
  QUIZ_SCORES: 'pp_quiz_scores',
  FLASHCARD_STATUS: 'pp_flashcard_status',
  USER_NOTES: 'pp_user_notes',
  BOOKMARKS: 'pp_bookmarks',
  CHECKLIST: 'pp_checklist_state',
  STUDY_TIME: 'pp_study_time_seconds',
  LAST_MODULE: 'pp_last_active_module'
};

class StorageManager {
  static get(key, defaultValue = null) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.warn('Storage read error:', e);
      return defaultValue;
    }
  }

  static set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage write error:', e);
    }
  }

  // Completed Modules
  static getCompletedModules() {
    return this.get(STORAGE_KEYS.COMPLETED_MODULES, []);
  }

  static toggleModuleCompleted(moduleId) {
    const completed = this.getCompletedModules();
    const index = completed.indexOf(moduleId);
    if (index > -1) {
      completed.splice(index, 1);
    } else {
      completed.push(moduleId);
    }
    this.set(STORAGE_KEYS.COMPLETED_MODULES, completed);
    return completed.includes(moduleId);
  }

  // Quiz Results
  static getQuizScores() {
    return this.get(STORAGE_KEYS.QUIZ_SCORES, {});
  }

  static saveQuizScore(quizId, score, total) {
    const scores = this.getQuizScores();
    scores[quizId] = { score, total, date: new Date().toISOString() };
    this.set(STORAGE_KEYS.QUIZ_SCORES, scores);
  }

  // Flashcards state: { [cardId]: 'learned' | 'learning' | 'to_learn' }
  static getFlashcardStates() {
    return this.get(STORAGE_KEYS.FLASHCARD_STATUS, {});
  }

  static setFlashcardState(cardId, state) {
    const states = this.getFlashcardStates();
    states[cardId] = state;
    this.set(STORAGE_KEYS.FLASHCARD_STATUS, states);
  }

  // Personal Notes: { [moduleId]: "note content" }
  static getNotes() {
    return this.get(STORAGE_KEYS.USER_NOTES, {});
  }

  static saveNote(moduleId, noteText) {
    const notes = this.getNotes();
    notes[moduleId] = noteText;
    this.set(STORAGE_KEYS.USER_NOTES, notes);
  }

  // Bookmarks: array of bookmark items { id, title, section, url }
  static getBookmarks() {
    return this.get(STORAGE_KEYS.BOOKMARKS, []);
  }

  static toggleBookmark(item) {
    let bookmarks = this.getBookmarks();
    const exists = bookmarks.some(b => b.id === item.id);
    if (exists) {
      bookmarks = bookmarks.filter(b => b.id !== item.id);
    } else {
      bookmarks.push(item);
    }
    this.set(STORAGE_KEYS.BOOKMARKS, bookmarks);
    return !exists;
  }

  // Action checklist
  static getChecklistState() {
    return this.get(STORAGE_KEYS.CHECKLIST, {});
  }

  static toggleChecklistItem(index) {
    const state = this.getChecklistState();
    state[index] = !state[index];
    this.set(STORAGE_KEYS.CHECKLIST, state);
    return state[index];
  }

  // Study timer (in seconds)
  static getStudyTime() {
    return this.get(STORAGE_KEYS.STUDY_TIME, 0);
  }

  static incrementStudyTime(seconds = 1) {
    const current = this.getStudyTime();
    this.set(STORAGE_KEYS.STUDY_TIME, current + seconds);
    return current + seconds;
  }
}
