import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type TestimonialCardProps = {
    content: string
    author: string
    role: string
    avatarSrc: string
}

export function TestimonialCard({ content, author, role, avatarSrc }: TestimonialCardProps) {
    return (
        <Card className="w-full max-w-[800px] border-themeGray bg-themeGray bg-opacity-40 backdrop-blur-lg">
            <CardContent className="flex flex-col items-center p-8 text-center">
                <Avatar className="mb-4 h-20 w-20">
                    <AvatarImage src={avatarSrc} alt={author} />
                    <AvatarFallback>{author[0]}</AvatarFallback>
                </Avatar>
                <h4 className="mb-1 text-xl font-semibold text-themeTextWhite">{author}</h4>
                <p className="mb-6 text-sm text-themeTextGray">{role}</p>
                <p className="text-lg text-themeTextGray">{content}</p>
            </CardContent>
        </Card>
    )
}
