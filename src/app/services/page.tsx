"use client"

import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Settings, Code, Palette, GraduationCap, Users, Brain } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "AI導入支援（企業様向け）",
      description: "AIを使ってあなたの企業の困ったを解決します",
      icon: Settings,
      features: [
        "タスク管理",
        "営業メールの自動返信",
        "議事録作成",
        "お問い合わせの要点整理",
        "プレゼン資料作成",
      ],
    },
    {
      title: "AI教育（個人または学生様向け）",
      description: "AIツールの使い方から実践的な活用まで、段階的に学習できます",
      icon: GraduationCap,
      features: [
        "AIツールやAIの使い方を知る",
        "勉強計画の管理",
        "タスク管理",
        "レポート要約",
        "プレゼン資料作成",
        "翻訳や添削",
        "アイデア出し",
      ],
    },
    {
      title: "AI開発",
      description: "あなたの『こんなAIがあったら』を実現します",
      icon: Code,
      features: [
        "カスタムAIソリューション開発",
        "API統合",
        "機械学習モデル構築",
        "AIアプリケーション開発",
        "既存システムとの連携",
      ],
    },
    {
      title: "AI広告デザイン制作",
      description: "AIを活用した高品質なデザイン制作サービス",
      icon: Palette,
      features: [
        "AIで広告デザインを作る",
        "ホームページ作成",
        "ロゴ作成",
        "パンフレット作成",
        "ブランディング支援",
      ],
    },
  ]

  return (
    <main className="py-20">
      <div className="container">
        <SectionHeading
          title="事業内容"
          subtitle="AIを誰でも使える簡単なものにするために。AIをより身近なものにするために個人や企業に沿った事業で一人でも多くの人が豊かな暮らしをできる社会を目指します"
          className="mb-16"
        />

        {/* Vision Section */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">私たちのビジョン</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    AIを誰でも使える簡単なものにするために。AIをより身近なものにするために個人や企業に沿った事業で一人でも多くの人が豊かな暮らしをできる社会を目指します。
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="p-3 bg-background rounded-lg border shadow-sm">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="p-4 bg-primary rounded-lg shadow-sm">
                        <Brain className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="p-3 bg-background rounded-lg border shadow-sm">
                        <GraduationCap className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full group">
                  <Link href="/contact">
                    お問い合わせへ
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">お気軽にご相談ください</h3>
              <p className="text-lg text-muted-foreground mb-6">
                あなたのニーズに合わせた最適なAIソリューションをご提案いたします
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
