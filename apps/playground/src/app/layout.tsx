import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Fira_Code, Fraunces } from "next/font/google"
import { ToastProvider } from "@adeeeeta/greenhouse"
import "@adeeeeta/greenhouse/styles.css"
import "@adeeeeta/greenhouse/tokens.css"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-face",
  display: "swap",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-face",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-face",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Greenhouse Playground",
  description: "A standalone test bed for the Greenhouse Design System package.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${firaCode.variable} ${fraunces.variable}`}
    >
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}