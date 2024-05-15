export function generateSlug(text: string): string {
    return text
    .normalize("NFD") // Normalize text to remove accents
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove non-word characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
};