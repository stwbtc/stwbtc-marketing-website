import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'stWBTC',
  description: '',
  icons: {
    icon: '/imgs/home/stWBTC.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
