// Utility to format minified SSR/HTML output into beautifully indented, readable, multi-line HTML source
export function formatHtml(html) {
  if (!html || typeof html !== 'string') return '';

  let formatted = '';
  let indent = 0;
  const tab = '  ';

  const voidTags = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'
  ]);

  const preservedBlocks = [];
  let workingHtml = html.replace(/<(script|style|textarea|pre)[^>]*>[\s\S]*?<\/\1>/gi, (match) => {
    const placeholder = `___PRESERVED_BLOCK_${preservedBlocks.length}___`;
    preservedBlocks.push(match);
    return placeholder;
  });

  const tokens = workingHtml.split(/(<\/?[a-zA-Z0-9\-]+(?:\s+[^>]*?)?\/?>)/g).filter(Boolean);

  for (const token of tokens) {
    const trimmed = token.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('___PRESERVED_BLOCK_')) {
      const idx = parseInt(trimmed.match(/\d+/)[0], 10);
      formatted += tab.repeat(indent) + preservedBlocks[idx] + '\n';
      continue;
    }

    if (trimmed.startsWith('<!--')) {
      formatted += tab.repeat(indent) + trimmed + '\n';
      continue;
    }

    if (trimmed.startsWith('</')) {
      indent = Math.max(0, indent - 1);
      formatted += tab.repeat(indent) + trimmed + '\n';
    } else if (trimmed.startsWith('<')) {
      const match = trimmed.match(/<([a-zA-Z0-9\-]+)/);
      const tagName = match ? match[1].toLowerCase() : '';
      const isSelfClosing = trimmed.endsWith('/>') || voidTags.has(tagName);

      formatted += tab.repeat(indent) + trimmed + '\n';
      if (!isSelfClosing && !trimmed.startsWith('<!')) {
        indent++;
      }
    } else {
      formatted += tab.repeat(indent) + trimmed + '\n';
    }
  }

  return formatted;
}
