// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://firelink-library.github.io',
  base: '/arch',
  outDir: 'dist',
  publicDir: 'static',
  favicon: './src/assets/logos/logo.png',
	integrations: [
		starlight({
			title: 'Arquitetura de computadores',
      logo: {
        src: './src/assets/logos/logo.png'
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2
      },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/firelink-library/arch' }],
      plugins: [
        catppuccin({
          dark: { flavor: "macchiato", accent: "mauve" },
          light: { flavor: "latte", accent: "mauve" }
        })
      ],
			sidebar: [
          { label: 'Introdução', autogenerate: { directory: 'intro' }, collapsed: true },
          { label: 'Lógica Combinacional', autogenerate: { directory: 'combinatory' }, collapsed: true },
          { label: 'Lógica Sequencial', autogenerate: { directory: 'sequential' }, collapsed: true },
          { label: 'Memória', autogenerate: { directory: 'memory' }, collapsed: true },
          { label: 'Aritmética', autogenerate: { directory: 'arithmetic' }, collapsed: true },
			],
		}),
	],
});
