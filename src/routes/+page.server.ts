import type { PageServerLoad } from './$types';

/* load from +page.server.ts runs only on the server; the browser receives its result */
export const load: PageServerLoad = ({ request }) => {
	return {
		renderedAt: new Date().toISOString(),
		runtime: process.versions.bun ? 'Bun ' + process.versions.bun : 'Node.js ' + process.version,
		userAgent: request.headers.get('user-agent') ?? '—'
	};
};
