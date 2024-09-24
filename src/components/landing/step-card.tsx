import { cn } from '@/lib/utils'
import { Card, CardContent } from '../ui/card'

type StepCardProps = {
    number: string
    title: string
    description: string
}

export default function StepCard({ number, title, description }: StepCardProps) {
    return (
        <Card
            className={cn(
                'relative flex h-[400px] w-[280px] flex-col items-center justify-start',
                'backdrop--blur__safari rounded-2xl border-themeGray',
                'bg-themeGray bg-opacity-40 bg-clip-padding backdrop-blur-lg',
                'transition-all duration-300 hover:shadow-lg hover:shadow-themeGray/50',
            )}
        >
            <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-themeBlack text-xl font-bold text-themeTextWhite">
                {number}
            </div>
            <CardContent className="flex h-full w-full flex-col items-center justify-between p-6 pt-10 text-center">
                <div className="flex-grow">
                    {/* Placeholder for icon */}
                    <div className="mb-6 h-32 w-full rounded-lg bg-themeGray/30"></div>
                </div>
                <div>
                    <h3 className="mb-4 text-2xl font-semibold text-themeTextWhite">{title}</h3>
                    <p className="text-sm text-themeTextGray">{description}</p>
                </div>
            </CardContent>
        </Card>
    )
}
