import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-4 md:mb-0">
                        <Image
                            src="/images/logo.png"
                            alt="EMOTISYNC LOGO"
                            width={100}
                            height={40}
                        />
                    </div>

                    <div className="text-center text-themeTextGray md:text-right">
                        <p>&copy; 2024 EmotiSync</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
