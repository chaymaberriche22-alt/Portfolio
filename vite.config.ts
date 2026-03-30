import { defineConfig } from 'vite'

// GitHub Pages often serves your site from a sub-path:
// https://<user>.github.io/<repo>/
//
// Using a relative base ensures assets work both locally and on Pages.
export default defineConfig({
  base: './',
})

