# Module Federation POC

## How to set up the project locally

1. Install the dependencies of every app
2. Run the react-app with `npx webpack serve`
3. Build the vue-app with `npm run build``
4. Run the vue-app with `npm run preview` (we can't use vite in dev mode for sub-apps, explaination here: https://github.com/originjs/vite-plugin-federation#vite-dev-mode)
5. Run nova with `npm run dev`
6. Open http://localhost:3000