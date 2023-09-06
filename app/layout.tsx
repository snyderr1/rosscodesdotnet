import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Theme from './pages/Theme';
import NavBar from 'NavBar';

const inter = Inter({ subsets: ['latin'] })

const NavigationDefault: [string, string][] = [["/Home", "Home"], ["/Resume", "Resume"], ["/Projects", "Projects"], ["/pages/About", "About"]]

export const metadata: Metadata = {
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
          <body className={inter.className}>
              <div class="h-screen w-auto overflow-x-hidden flex bg-[url('../public/background.jpg')] bg-no-repeat bg-cover">
                  <Theme>{children}</Theme>
              </div>
          </body>
    </html>
  )
}
