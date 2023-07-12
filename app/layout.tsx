import './globals.css'
import { Barlow, Barlow_Condensed, Bellefair } from 'next/font/google'
import NavBar from "@/components/NavBar";

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: ["100","200"],
  variable: "--font-barlow",
});
const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200"],
  variable: "--font-barlow-condensed",
});
const bellefair = Bellefair({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-bellefair",
});



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${barlow_condensed.variable} ${bellefair.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
