import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Props = {
    children: React.ReactNode
    className?: string
}

export default function GlassCard({ children, className }: Props) {
    return (
        <Card
            className={cn(
                className,
                'backdrop--blur__safari backdrop-blur-4xl rounded-2xl border-themeGray bg-themeGray bg-opacity-40 bg-clip-padding backdrop-filter',
            )}
        >
            {children}
        </Card>
    )
}
