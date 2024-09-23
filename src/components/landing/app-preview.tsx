import Image from 'next/image'

export default function AppPreview() {
    return (
        <div className="relative py-20">
            <div className="w-full h-3/6 absolute rounded-[50%] radial--blur opacity-40 mx-10" />
            <div className="w-full aspect-video relative">
                <Image
                    priority
                    src="/images/iphonecorinna.png"
                    width={400}
                    height={100}
                    alt="iPhone with EmotiSync app"
                    objectFit="contain"
                    className="opacity-[0.95]"
                />
            </div>
        </div>
    )
}
