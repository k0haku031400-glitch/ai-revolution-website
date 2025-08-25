import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // ダミー実装: コンソールにログを出力
    console.log("Contact form submission:", body)
    
    // 実際の実装では、ここでメール送信やデータベース保存を行う
    // 例: await sendEmail(body)
    // 例: await saveToDatabase(body)
    
    // 成功レスポンス
    return NextResponse.json(
      { message: "お問い合わせを受け付けました" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    
    // エラーレスポンス
    return NextResponse.json(
      { message: "送信に失敗しました" },
      { status: 500 }
    )
  }
}
