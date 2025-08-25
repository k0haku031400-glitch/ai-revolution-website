"use client"

import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Calendar, MapPin, Mail } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/siteConfig"

export default function CompanyPage() {
  const companyInfo = [
    {
      label: "会社名",
      value: siteConfig.company.name,
      icon: Building2,
    },
    {
      label: "設立日",
      value: siteConfig.company.established,
      icon: Calendar,
    },
    {
      label: "代表取締役",
      value: siteConfig.company.ceo,
      icon: Users,
    },
    {
      label: "取締役",
      value: siteConfig.company.director,
      icon: Users,
    },
    {
      label: "資本金",
      value: siteConfig.company.capital,
      icon: Building2,
    },
    {
      label: "住所",
      value: siteConfig.company.address,
      icon: MapPin,
    },
  ]

  return (
    <main className="py-20">
      <div className="container">
        <SectionHeading
          title="企業情報"
          subtitle="AI Revolutionについて"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">会社概要</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  {companyInfo.map((item) => (
                    <div key={item.label} className="flex items-start space-x-3">
                      <item.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <dt className="font-medium text-sm text-muted-foreground">
                          {item.label}
                        </dt>
                        <dd className="text-base">{item.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">お問い合わせ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="text-base hover:text-primary transition-colors"
                  >
                    {siteConfig.company.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mission */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">経営理念</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold text-primary">
                  AIをより身近なものに
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  AIを使ったことがない人やAIがよくわからないという人でも簡単にAIを使うことができる未来と、AIが人や企業にとって価値のあるものにすることを目指します。
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  私たちは、AI技術を活用して個人や企業の業務効率化を実現し、より豊かな社会の構築に貢献します。誰もがAIを身近に感じ、活用できる世界を目指して、日々新しいソリューションの開発に取り組んでいます。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">私たちの価値</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      技術革新を通じた社会貢献
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      お客様第一のサービス提供
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      継続的な学習と成長
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      透明性と信頼性の重視
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="group">
            <Link href="/contact">
              お問い合わせ
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
