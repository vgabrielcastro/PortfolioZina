import { useRouter } from 'next/router'
import * as React from 'react'
import { Paragraph, YStack, styled } from 'tamagui'

import { GithubIcon } from './GithubIcon'
import { HeaderProps } from './HeaderProps'
import { NextLink } from 'app/config/NextLink'

const HeadAnchor = styled(Paragraph, {
  fontFamily: '$silkscreen',
  px: '$3',
  py: '$2',
  cursor: 'pointer',
  size: '$3',
  color: '$color10',
  hoverStyle: { opacity: 1, color: '$color' },
  pressStyle: { opacity: 0.25 },
  tabIndex: -1,
  w: '100%',
  tag: 'a',
})

export const HeaderLinks = ({ forceShowAllLinks }: HeaderProps) => {
  const router = useRouter()
  // there is user context and supabase setup in the current page
  return (
    <>
      <NextLink passHref prefetch={false} href="/docs/intro/installation">
        <HeadAnchor
          $sm={{
            display: forceShowAllLinks ? 'flex' : 'none',
          }}
        >
          Projects
        </HeadAnchor>
      </NextLink>

      <NextLink passHref prefetch={false} href="/linkedin.com/in/vgabriel-castro/">
        <HeadAnchor
          $md={{
            display: forceShowAllLinks ? 'flex' : 'none',
          }}
        >
          Contact
        </HeadAnchor>
      </NextLink>
      {forceShowAllLinks && (
        <NextLink
          prefetch={false}
          legacyBehavior={false}
          target="_blank"
          href="https://github.com/tamagui/tamagui"
        >
          <HeadAnchor>
            Github{' '}
            <YStack dsp="inline-block" y={10} my={-20} o={0.8}>
              <GithubIcon width={16} />
            </YStack>
          </HeadAnchor>
        </NextLink>
      )}
    </>
  )
}
