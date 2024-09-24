import { Card, CardContent } from '@/components/ui/card'

export default function NotFound() {
    return (
        <Card className="mx-auto max-w-md">
            <CardContent className="text-center">
                <p className="text-2xl">This page cannot be found</p>
            </CardContent>
        </Card>
    )
}
