import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-themeGray/20 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Image
                            src="/images/logo.png"
                            alt="EMOTISYNC LOGO"
                            width={100}
                            height={40}
                        />
                    </div>
                    <nav className="mb-4 md:mb-0">
                        <ul className="flex space-x-6">
                            <li>
                                <Link
                                    href="#features"
                                    className="text-themeTextGray hover:text-themeTextWhite transition-colors"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#how-it-works"
                                    className="text-themeTextGray hover:text-themeTextWhite transition-colors"
                                >
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#faq"
                                    className="text-themeTextGray hover:text-themeTextWhite transition-colors"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center md:text-right text-themeTextGray">
                        <p>&copy; 2023 EmotiSync</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
