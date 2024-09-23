import GlassSheet from '@/components/glass-sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import Menu from './menu'

export default function Header() {
    return (
        <header className="w-full flex justify-between sticky top-0 items-center py-5 px-5 z-50">
            {/* <Link href="/">
                <Image src="/logo.png" alt="EMOTISYNC LOGO" width={150} height={50} />
            </Link> */}

            <p className="font-bold text-2xl">EmotiSync.</p>

            <Menu orientation="desktop" />
            <div className="flex gap-2">
                <Link href="/sign-up">
                    <Button>Try it now</Button>
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
