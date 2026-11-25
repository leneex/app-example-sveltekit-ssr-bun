# SvelteKit SSR on Bun

Example [SvelteKit](https://svelte.dev/docs/kit) app with server-side rendering (SSR) running on [Bun](https://bun.sh/). SvelteKit is the official framework for building full-stack apps with Svelte. Bun is a fast all-in-one JavaScript runtime and package manager compatible with Node.js.

## Deploy settings

| Field | Value |
| --- | --- |
| Build | Railpack |
| Project directory | `/` |
| Install command | leave empty |
| Build command | leave empty |
| Start command | leave empty |
| Application port | `3000` |
| Health check path | `/` |

## <a name="dev"></a>Run locally

```bash
# install dependencies
bun install

# run in development mode
bun run dev

# build for production
bun run build

# run the built server app
bun run start
```
