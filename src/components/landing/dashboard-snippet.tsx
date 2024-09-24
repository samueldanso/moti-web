import Image from 'next/image'

export default function DashboardSnippet() {
    return (
        <div className="relative py-20">
            <div className="radial--blur absolute mx-10 h-3/6 w-full rounded-[50%] opacity-40" />
            <div className="relative aspect-video w-full">
                <Image
                    src="/dashboard-snippet.png"
                    className="opacity-[0.95]"
                    alt="snippet"
                    width={850}
                    height={500}
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </div>
    )
}
