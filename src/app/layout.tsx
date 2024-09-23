import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Toaster } from 'sonner'
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
            <body className={`${jakarta.className} bg-black`}>
                <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    )
}
