export function autocomplete(search: string, items: string[], maxResults: number): string[] {
    const lowerSearch = search.toLowerCase();
    const filteredItems = items.filter(item => item.toLowerCase().includes(lowerSearch));
    const sortedItems = filteredItems.sort((a, b) => {
        const indexA = a.toLowerCase().indexOf(lowerSearch);
        const indexB = b.toLowerCase().indexOf(lowerSearch);
        return indexA - indexB;
    });
    return sortedItems.slice(0, maxResults);
}