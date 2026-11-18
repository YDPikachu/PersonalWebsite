/**
 * Wraps each `<h2>` and the content below it (up to the next `<h2>`) in a
 * `<section>`. Sections whose heading starts with "Day <number>" get the
 * `day-section` class, which the blog layout styles as a timeline.
 */
export function wrapDaySections(html: string): string {
	return html
		.split(/(?=<h2[\s>])/)
		.map((part) => {
			if (!part.startsWith('<h2')) return part;
			const headingText = part.slice(0, part.indexOf('</h2>')).replace(/<[^>]+>/g, '');
			const cls = /^\s*day\s*\d+/i.test(headingText) ? 'day-section' : 'post-section';
			return `<section class="${cls}">${part}</section>`;
		})
		.join('');
}
