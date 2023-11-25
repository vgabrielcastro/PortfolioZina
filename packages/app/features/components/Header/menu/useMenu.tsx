import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { allNotPending } from './MenuPage'

export const useMenu = () => {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()
    let currentPath = router.pathname
    let documentVersion = ''

    if (router.query.slug) {
        currentPath = currentPath.replace('[slug]', router.query.slug as string)
    } else {
        currentPath = currentPath.replace('[slug]', router.query.slug as string)
    }

    const documentVersionPath = documentVersion ? `/${documentVersion}` : ''
    const currentPageIndex = allNotPending.findIndex((page) => page.route === currentPath)
    const previous = allNotPending[currentPageIndex - 1]
    let nextIndex = currentPageIndex + 1
    let next = allNotPending[nextIndex]
    // while (next && next.route.startsWith('http')) {
    //     next = allNotPending[++nextIndex]
    // }

    useEffect(() => {
        const handleRouteChange = () => {
            setOpen(false)
        }
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router.events])

    return {
        router,
        open,
        setOpen,
        currentPath,
        next,
        previous,
        documentVersionPath,
    }
}
