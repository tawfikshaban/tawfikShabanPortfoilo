// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-04-04',
  devtools: { enabled: false },
  pages: true,

  modules: ['@nuxt/image', '@nuxt/fonts'],

  fonts: {
    families: [
      // specify specific font data - this will bypass any providers
      { name: 'outline', src: "/Fonts/outline-black.otf", display: "swap" },
      { name: 'Neue', src: "/Fonts/NeueMetanaNext.otf",display:"swap" },
      { name: 'migha', src: "/Fonts/Migha-BoldCondensedSlant.otf",display:"swap" },
      {
        name: 'migha-var',
        src: "/Fonts/Heming Variable.ttf",
        display: "swap",
        variationSettings: "ttf 800", 
        
       },
      { name: 'special', src: "/Fonts/MagilioRegular-8Mxvg.otf",display:"swap" },
      
     
    ]
  },
  app: {
    head: {
       // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/icon.svg' },
      ],
    },

  },
  ssr: true, 
  // اختياري: تحديد الـ Preset لـ Vercel (رغم إن نكست بيكتشفه لوحده)
  nitro: {
    
    preset: 'vercel-edge'
  },

  
})