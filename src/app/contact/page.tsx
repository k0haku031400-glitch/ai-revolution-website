"use client"

import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Mail, MapPin, Phone } from "lucide-react"
import { siteConfig } from "@/lib/siteConfig"

const contactFormSchema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  company: z.string().optional(),
  type: z.string().min(1, "お問い合わせ種別を選択してください"),
  message: z.string().min(1, "お問い合わせ内容は必須です"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const { toast } = useToast()

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      type: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "送信完了",
          description: "送信が完了しました。担当よりご連絡いたします。",
        })
        form.reset()
      } else {
        throw new Error("送信に失敗しました")
      }
    } catch {
      toast({
        title: "エラー",
        description: "送信に失敗しました。しばらく時間をおいて再度お試しください。",
        variant: "destructive",
      })
    }
  }

  const contactTypes = [
    { value: "support", label: "導入支援" },
    { value: "development", label: "開発" },
    { value: "design", label: "広告デザイン" },
    { value: "education", label: "教育" },
    { value: "other", label: "その他" },
  ]

  return (
    <main className="py-20">
      <div className="container">
        <SectionHeading
          title="お問い合わせ"
          subtitle="ご質問やご相談がございましたら、お気軽にお問い合わせください"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">お問い合わせフォーム</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>お名前 *</FormLabel>
                        <FormControl>
                          <Input placeholder="山田太郎" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>メールアドレス *</FormLabel>
                        <FormControl>
                          <Input placeholder="example@email.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>企業名 / 学校名</FormLabel>
                        <FormControl>
                          <Input placeholder="株式会社サンプル" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>お問い合わせ種別 *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="選択してください" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {contactTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>お問い合わせ内容 *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="お問い合わせ内容を詳しくお聞かせください"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg">
                    送信する
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">連絡先</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">メール</p>
                    <a
                      href={`mailto:${siteConfig.company.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">住所</p>
                    <p className="text-sm text-muted-foreground">
                      {siteConfig.company.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">電話</p>
                    <p className="text-sm text-muted-foreground">
                      06-1234-5678
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">営業時間</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>平日</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>土曜日</span>
                    <span>9:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>日曜・祝日</span>
                    <span>休業</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">アクセス</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Google Maps</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
