export const siteConfig = {
  name: "AI Revolution",
  description: "AIを誰でも使える簡単なツールに。AIをより身近なものにするために個人や企業に沿った事業で一人でも多くの人が豊かな暮らしをできる社会を目指します",
  url: "https://ai-revolution.co.jp",
  ogImage: "https://ai-revolution.co.jp/og.jpg",
  links: {
    twitter: "https://twitter.com/ai_revolution",
    github: "https://github.com/ai-revolution",
    linkedin: "https://linkedin.com/company/ai-revolution",
  },
  company: {
    name: "株式会社AI Revolution",
    established: "4月22日",
    ceo: "中谷琥珀",
    director: "椛島回光",
    capital: "200万円",
    address: "〒530-0001 大阪府大阪市北区梅田1丁目2番2号 大阪駅前第2ビル12-12",
    email: "nakatani@ai-revo.co.jp",
  },
  navigation: [
    { name: "メイン", href: "/" },
    { name: "事業内容", href: "/services" },
    { name: "企業情報", href: "/company" },
    { name: "お問い合わせ", href: "/contact" },
  ],
} as const

export type SiteConfig = typeof siteConfig
