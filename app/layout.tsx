import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const display = Sora({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "Amazon Author Partners",
  description:
    "Professional book publishing services. Global distribution, expert editing, and author support.",
  generator: "fahad",
  verification: {
    google: "sRUYHrpmVoLoDaUYgyCTS6PQMfvtJd-SDpsiuS3cfl0",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-background text-foreground ${display.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
