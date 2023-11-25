import { LinearGradient } from '@tamagui/linear-gradient'
import { NextLink } from 'app/config//NextLink'
import * as React from 'react'
import { ScrollView } from 'react-native'
import { EnsureFlexed, Paragraph, XStack, YStack } from 'tamagui'
import { MenuContents } from './MenuContents'
import { useMenu } from './useMenu'
import { ThemeTint } from '../logo'
import { Container } from '../Container'
import { Link } from 'app/config/Link'
import { MenuRoutes } from './MenuRoutes'

export const allNotPending = MenuRoutes.filter((x) => !x['pending'])

export function MenuPage({ children }: { children: React.ReactNode }) {
    const { currentPath, next, previous, documentVersionPath } = useMenu()

    const GITHUB_URL = 'https://github.com'
    const REPO_NAME = 'tamagui/tamagui'
    const editUrl = `${GITHUB_URL}/${REPO_NAME}/edit/master/apps/site/data${currentPath}${documentVersionPath}.mdx`

    const pageContents = React.useMemo(() => {
        return (
            <>
                <YStack tag="article">
                    <Container pos="relative">{children}</Container>

                    <Container>
                        {(previous || next) && (
                            <XStack aria-label="Pagination navigation" my="$9" jc="space-between" space>
                                {previous && (
                                    <NextLink href={previous.route}>
                                        <YStack
                                            hoverStyle={{
                                                borderColor: '$borderColorHover',
                                            }}
                                            flex={1}
                                            width="50%"
                                            p="$5"
                                            borderRadius="$2"
                                            borderWidth={1}
                                            borderColor="$borderColor"
                                            pressStyle={{
                                                backgroundColor: '$backgroundPress',
                                            }}
                                            aria-label={`Previous page: ${previous.title}`}
                                            ai="flex-start"
                                        >
                                            <Paragraph userSelect="none" theme="alt1" size="$5">
                                                Previous
                                            </Paragraph>
                                            <Paragraph userSelect="none" size="$3" color="$gray10">
                                                {previous.title}
                                            </Paragraph>
                                        </YStack>
                                    </NextLink>
                                )}
                                {next && (
                                    <NextLink href={next.route} passHref>
                                        <YStack
                                            hoverStyle={{
                                                borderColor: '$borderColorHover',
                                            }}
                                            width="50%"
                                            flex={1}
                                            p="$5"
                                            borderRadius="$2"
                                            borderWidth={1}
                                            borderColor="$borderColor"
                                            pressStyle={{
                                                backgroundColor: '$backgroundPress',
                                            }}
                                            aria-label={`Previous page: ${next.title}`}
                                            ai="flex-end"
                                        >
                                            <Paragraph userSelect="none" theme="alt1" size="$5">
                                                Next
                                            </Paragraph>
                                            <Paragraph userSelect="none" size="$3" color="$gray10">
                                                {next.title}
                                            </Paragraph>
                                        </YStack>
                                    </NextLink>
                                )}
                            </XStack>
                        )}
                    </Container>

                    <Container my="$3">
                        <Link
                            href={editUrl}
                            // @ts-ignore
                            title="Edit this page on GitHub."
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Edit this page on GitHub.
                        </Link>
                    </Container>
                </YStack>
            </>
        )
    }, [children, previous, next, editUrl])

    return (
        <>
            <YStack
                overflow="hidden"
                mx="auto"
                $gtSm={{
                    flexDirection: 'row',
                }}
                maw={1250}
                zi={100}
                pos="relative"
            >
                <EnsureFlexed />
                <YStack
                    overflow="hidden"
                    $md={{
                        display: 'none',
                    }}
                    // className="custom-scroll"
                    $gtSm={{
                        position: 'fixed' as any,
                        top: 0,
                        bottom: 0,
                        width: 245,
                    }}
                >
                    <LinearGradient
                        pos="absolute"
                        t={0}
                        l={0}
                        r={0}
                        h={100}
                        w={300}
                        zi={100}
                        colors={['$backgroundStrong', '$backgroundStrong', '$backgroundTransparent']}
                    />
                    <ScrollView>
                        <ThemeTint>
                            <YStack
                                display="none"
                                contain="paint layout"
                                $gtMd={{
                                    display: 'block',
                                    pr: '$3',
                                    mt: 108,
                                    pb: '$18',
                                }}
                            >
                                <MenuContents />
                            </YStack>
                        </ThemeTint>
                    </ScrollView>
                </YStack>
            </YStack>

            <YStack
                maxWidth="100%"
                flex={1}
                py="$8"
                $gtMd={{
                    pb: '$9',
                    pl: 250,
                    pr: 100,
                }}
            >
                {pageContents}
            </YStack>
        </>
    )
}

export type NavItemProps = {
    children: React.ReactNode
    active?: boolean
    href: string
    pending?: boolean
    external?: boolean
}
