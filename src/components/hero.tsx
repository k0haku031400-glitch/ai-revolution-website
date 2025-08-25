"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users, Brain, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              AI Revolution
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-muted-foreground">
              AIがあなたのそばに
            </h2>

            <p className="text-lg lg:text-xl font-semibold text-primary tracking-wider">
              AI ALWAYS WITH YOU
            </p>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              AIを誰でも使える簡単なツールに。AIをより身近なものにするために個人や企業に沿った事業で一人でも多くの人が豊かな暮らしをできる社会を目指します
            </p>

            <div>
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* SVG Diagram */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Background Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/10 to-accent/10" />
              </div>

              {/* People Icon */}
              <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
                <div className="p-4 bg-background rounded-xl border shadow-lg">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* AI Brain Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="p-6 bg-primary rounded-xl shadow-lg">
                  <Brain className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>

              {/* Sparkles Icon */}
              <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12">
                <div className="p-4 bg-background rounded-xl border shadow-lg">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
              </div>

              {/* Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 80 80 Q 200 100 320 320"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                />
                <path
                  d="M 320 80 Q 200 100 80 320"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="var(--accent)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
