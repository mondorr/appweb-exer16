import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "exer16",
  description: "Revue de code documentée",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Raoul Mondor', link: '/raoul-mondor' },
      { text: 'Matis Filion', link: '/matis-filion' }
    ],

    sidebar: [
      {
        text: 'Membres de l\'équipe',
        items: [
          { text: 'Raoul Mondor', link: '/raoul-mondor' },
          { text: 'Matis Filion', link: '/matis-filion' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
