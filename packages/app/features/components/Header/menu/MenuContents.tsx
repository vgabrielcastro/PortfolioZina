import * as React from 'react'
import { Paragraph, Separator, XStack, YStack } from 'tamagui'

import { MenuRouteNavItem } from './MenuRouteNavItem'
import { NavHeading } from './NavHeading'
import { useMenu } from './useMenu'
import { MenuRoutes } from './MenuRoutes'

export const MenuContents = React.memo(function MenuContents() {
    const { currentPath } = useMenu()

    return React.useMemo(() => {
        return (
            <>
                {MenuRoutes.map((section, i) => {
                    if ('type' in section) {
                        if (section.type === 'hr') {
                            return (
                                <YStack key={`sep${i}`} mx="$4">
                                    {section.title ? (
                                        <XStack
                                            ai="center"
                                            space="$6"
                                            spaceDirection="horizontal"
                                            mb="$2"
                                            mt="$3"
                                        >
                                            <Separator />
                                            <Paragraph size="$4">{section.title}</Paragraph>
                                        </XStack>
                                    ) : (
                                        <Separator my="$4" />
                                    )}
                                </YStack>
                            )
                        }
                        return null
                    }
                    return (
                        <YStack key={`${section.label}${i}`} mb="$4">
                            {!!section.label && <NavHeading>{section.label}</NavHeading>}
                            {section.pages.map((page, index) => {
                                return (
                                    <MenuRouteNavItem
                                        key={`${page.route}${index}`}
                                        href={page.route}
                                        active={currentPath === page.route}
                                        pending={page['pending']}
                                    >
                                        {page.title}
                                    </MenuRouteNavItem>
                                )
                            })}
                        </YStack>
                    )
                })}
            </>
        )
    }, [currentPath, MenuRoutes])
})
