import { ThemeProvider } from '@/components/theme/theme-provider'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import '../styles/globals.css'

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
})
export const metadata: Metadata = {
    title: 'EmotiSync',
    description: 'Your AI-Powered Emotional Well-Being Companion',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${jakarta.className} bg-dark-bg text-white`}>
                <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
