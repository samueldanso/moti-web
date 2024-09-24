'use client'

import { Card, CardContent } from '@/components/ui/card'
import { LANDING_PAGE_MENU } from '@/constants/menus'
import { useNavigation } from '@/hooks/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type MenuProps = {
    orientation: 'mobile' | 'desktop'
}

const Menu = ({ orientation }: MenuProps) => {
    const { section, onSetSection } = useNavigation()
    switch (orientation) {
        case 'desktop':
            return (
                <Card className="backdrop--blur__safari hidden rounded-full border-themeGray bg-themeGray bg-opacity-60 bg-clip-padding p-1 backdrop-blur-2xl backdrop-filter lg:flex">
                    <CardContent className="flex gap-2 p-0">
                        {LANDING_PAGE_MENU.map((menuItem) => (
                            <Link
                                href={menuItem.path}
                                {...(menuItem.section && {
                                    onClick: () => onSetSection(menuItem.path),
                                })}
                                className={cn(
                                    'flex items-center gap-2 rounded-full px-4 py-2',
                                    section == menuItem.path ? 'border-[#27272A] bg-[#09090B]' : '',
                                )}
                                key={menuItem.id}
                            >
                                {section == menuItem.path && menuItem.icon}
                                {menuItem.label}
                            </Link>
                        ))}
                    </CardContent>
                </Card>
            )

        case 'mobile':
            return (
                <div className="mt-10 flex flex-col">
                    {LANDING_PAGE_MENU.map((menuItem) => (
                        <Link
                            href={menuItem.path}
                            {...(menuItem.section && {
                                onClick: () => onSetSection(menuItem.path),
                            })}
                            className={cn(
                                'flex items-center gap-2 rounded-full px-4 py-2',
                                section == menuItem.path ? 'border-[#27272A] bg-themeGray' : '',
                            )}
                            key={menuItem.id}
                        >
                            {menuItem.icon}
                            {menuItem.label}
                        </Link>
                    ))}
                </div>
            )
        default:
            return <></>
    }
}

export default Menu
