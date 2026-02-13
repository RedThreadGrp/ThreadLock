// file: src/lib/renderMarkdown.ts
// Safe markdown/HTML rendering utility for resources content

/**
 * Safely renders markdown-style text to HTML
 * Handles newlines, basic formatting, and escapes unsafe content
 */
export function renderMarkdown(text: string): string {
  if (!text) return '';
  
  // Escape HTML to prevent XSS
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
  
  // Convert markdown-style formatting
  let html = escaped
    // Headers (## Header)
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    
    // Bold (**text**)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    
    // Italic (*text*)
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    
    // Links ([text](url))
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-orange hover:underline">$1</a>')
    
    // Line breaks (double newline = paragraph, single = br)
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br />');
  
  // Wrap in paragraph if not already wrapped
  if (!html.startsWith('<h') && !html.startsWith('<p')) {
    html = '<p>' + html + '</p>';
  }
  
  return html;
}

/**
 * Renders simple text with line breaks preserved
 * More conservative than full markdown rendering
 */
export function renderPlainTextWithBreaks(text: string): string {
  if (!text) return '';
  
  // Escape HTML
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
  
  // Convert newlines to <br />
  return escaped.replace(/\n/g, '<br />');
}

/**
 * Extracts plain text from markdown/HTML for use in meta descriptions
 */
export function extractPlainText(text: string, maxLength: number = 160): string {
  if (!text) return '';
  
  // Remove markdown formatting
  let plain = text
    .replace(/^#{1,6}\s+/gm, '') // Remove headers
    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.+?)\*/g, '$1') // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();
  
  // Truncate if needed
  if (plain.length > maxLength) {
    plain = plain.substring(0, maxLength).trim() + '...';
  }
  
  return plain;
}
