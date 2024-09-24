import GlassSheet from '@/components/glass-sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import Menu from './menu'

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex w-full items-center justify-between py-5 md:px-4 lg:px-20">
            <p className="text-2xl font-bold">EmotiSync.</p>

            <Menu orientation="desktop" />

            <div className="flex gap-2">
                <Link href="/sign-in">
                    <Button className="bg-purple-300 text-base">Try it for free</Button>
                </Link>

                <GlassSheet
                    triggerClass="lg:hidden"
                    trigger={
                        <Button variant="ghost" className="hover:bg-transparent">
                            <MenuIcon size={30} />
                        </Button>
                    }
                >
                    <Menu orientation="mobile" />
                </GlassSheet>
            </div>
        </header>
    )
}
