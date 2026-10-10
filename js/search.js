/**
 * Global Search and Instant Terminology Modal Lookup Engine
 */

class SearchEngine {
  constructor(modulesData, flashcardsData) {
    this.modules = modulesData;
    this.flashcards = flashcardsData;
    this.searchIndex = [];
    this.buildIndex();
  }

  buildIndex() {
    this.searchIndex = [];

    // Index modules
    this.modules.forEach(mod => {
      this.searchIndex.push({
        type: 'Módulo',
        id: mod.id,
        title: `${mod.number}. ${mod.title}`,
        category: mod.category,
        content: `${mod.description} ${mod.contentHtml.replace(/<[^>]*>?/gm, ' ')}`,
        targetUrl: `#/${mod.id}`
      });
    });

    // Index flashcards / key terms
    this.flashcards.forEach((fc, idx) => {
      this.searchIndex.push({
        type: 'Concepto / Flashcard',
        id: `fc-${idx}`,
        title: fc.front,
        category: fc.topic,
        content: fc.back,
        targetUrl: `#/flashcards`
      });
    });
  }

  search(query) {
    if (!query || query.trim().length < 2) return [];

    const cleanQuery = query.toLowerCase().trim();
    const results = [];

    this.searchIndex.forEach(item => {
      const titleMatch = item.title.toLowerCase().includes(cleanQuery);
      const contentMatch = item.content.toLowerCase().includes(cleanQuery);

      if (titleMatch || contentMatch) {
        let snippet = '';
        if (contentMatch) {
          const pos = item.content.toLowerCase().indexOf(cleanQuery);
          const start = Math.max(0, pos - 40);
          const end = Math.min(item.content.length, pos + 100);
          snippet = '...' + item.content.substring(start, end).trim() + '...';
        } else {
          snippet = item.content.substring(0, 110).trim() + '...';
        }

        results.push({
          ...item,
          score: titleMatch ? 2 : 1,
          snippet: snippet
        });
      }
    });

    return results.sort((a, b) => b.score - a.score);
  }
}
