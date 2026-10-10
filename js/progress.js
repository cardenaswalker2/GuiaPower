/**
 * Progress tracking, statistics calculations and action checklist synchronization
 */

class ProgressTracker {
  static getOverallProgress() {
    const totalModules = COURSE_DATA.modules.length;
    const completedModules = StorageManager.getCompletedModules().length;
    const modulePercent = (completedModules / totalModules) * 100;

    const checklistState = StorageManager.getChecklistState();
    const checkedCount = Object.values(checklistState).filter(Boolean).length;
    const checklistPercent = (checkedCount / COURSE_DATA.checklistItems.length) * 100;

    const combinedScore = Math.round((modulePercent * 0.7) + (checklistPercent * 0.3));

    return {
      completedModules,
      totalModules,
      modulePercent: Math.round(modulePercent),
      checkedCount,
      totalChecklist: COURSE_DATA.checklistItems.length,
      checklistPercent: Math.round(checklistPercent),
      overallPercent: combinedScore
    };
  }

  static formatStudyTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}h ${mins}m`;
    }
    return `${mins}m ${secs}s`;
  }
}
