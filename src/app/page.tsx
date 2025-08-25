"use client"

import { Hero } from "@/components/hero"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Settings, Code, Palette } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      title: "AI導入支援",
      description: "AIを身近なものにするために既存の事業から新しい事業を創造します。AIツールなどで企業向けの業務効率化や個人や学生に向けたAI教育",
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
      title: "AI開発",
      description: "あなたの『こんなAIがあったら』を実現",
      icon: Code,
      features: [
        "カスタムAIソリューション開発",
        "API統合",
        "機械学習モデル構築",
        "AIアプリケーション開発",
      ],
    },
    {
      title: "AI広告デザイン",
      description: "ホームページのデザインやロゴ、パンフレットなどを制作",
      icon: Palette,
      features: [
        "AI活用デザイン制作",
        "ホームページ作成",
        "ロゴデザイン",
        "パンフレット制作",
      ],
    },
  ]

  return (
    <main>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <SectionHeading
            title="事業内容"
            subtitle="AIを活用した様々なサービスで、あなたのビジネスをサポートします"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                お問い合わせへ
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
