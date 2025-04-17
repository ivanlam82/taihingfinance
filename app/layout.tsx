import type React from "react"
import "./globals.css"
import { Noto_Sans_TC } from "next/font/google"
import { Providers } from "./providers"

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
})

export const metadata = {
  title: "泰興財務 - 專業貸款服務",
  description: "提供個人貸款、物業貸款及企業融資等專業服務",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", type: "image/png" },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-HK" suppressHydrationWarning>
      <body className={notoSansTC.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}


import './globals.css'