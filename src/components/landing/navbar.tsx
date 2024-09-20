import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-themeGray/30 backdrop-blur-lg">
            <div className="flex items-center justify-between p-6 md:p-8 max-w-7xl mx-auto">
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/images/logo.png"
                        alt="EMOTISYNC LOGO"
                        sizes="100vw"
                        style={{
                            width: '120px',
                            height: 'auto',
                        }}
                        width={0}
                        height={0}
                    />
                </Link>
                <Link
                    href="/sign-up"
                    className="bg-gradient-to-r from-themeGray to-themeDarkGray text-themeTextWhite px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-themeGray/50"
                >
                    Try it for free
                </Link>
            </div>
        </header>
    )
}
