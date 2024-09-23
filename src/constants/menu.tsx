import { About, Home, ZapDouToneBlack } from '@/icons'

export type MenuProps = {
    id: number
    label: string
    icon: React.ReactNode
    path: string
    section?: boolean
    integration?: boolean
}

export const LANDING_PAGE_MENU: MenuProps[] = [
    {
        id: 0,
        label: 'Home',
        icon: <Home />,
        path: '/',
        section: true,
    },
    {
        id: 1,
        label: 'Features',
        icon: <ZapDouToneBlack />,
        path: '#features',
        section: true,
    },
    {
        id: 2,
        label: 'FAQ',
        icon: <About />,
        path: '#faq',
        section: true,
    },
]
