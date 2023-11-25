import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  XStack,
  YStack,
  ScrollView,
  Heading,
} from '@my/ui'
import { Avatar, Text, styled } from 'tamagui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { memo, useState } from 'react'
import { useLink } from 'solito/link'
import { CardStack } from '../components/CardStack'
import { useColorScheme } from 'react-native'
import { Theme } from 'tamagui'
import { Footer } from '../components/Footer/Footer'
import { ThemeTintAlt, useTint } from '../components/Header/logo'
import { NextLink } from 'app/config/NextLink'
import { useHeroHovered } from '../components/Hero/heroState'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  const { tint, name } = useTint()

  return (
    <ScrollView
      maxHeight={'auto'}
      width="100%"
      height="100%"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      bc={'$background'}
    >
      <YStack flexWrap="wrap" alignItems="center" justifyContent="center" mt='68px'>
        <YStack ai="flex-start" $gtSm={{ ai: 'center' }} gap="$4">
        </YStack>
        <YStack space="$5" maw={800}>
          <XStack ai='center' maw={800} $xs={{ flexDirection: 'column' }}>
            <Avatar circular size="$18"
              animation={'bouncy'}
              enterStyle={{
                ai: 'center',
                width: 100,
                height: 100,
              }}
            >
              <Avatar.Image
                accessibilityLabel="Cam"
                src="https://avatars.githubusercontent.com/u/91857484?v=4" />
              <Avatar.Fallback bc="$gray1" />
            </Avatar>
            <ThemeTintAlt offset={0}>
              <H1 ta="center" color="$color8" >Hi, {' '}
                <H1>I'm Vinícius Gabriel,</H1>
                {' '} a{''}
                <H1
                  ta="center"
                  color="$color8"
                > Full-Stack developer{' '}
                </H1>
                <H1>who loves</H1>{' '}
                <H1 ta="center"
                  color="$color8">technology...</H1>
              </H1>
            </ThemeTintAlt>
            {name === 'halloween' && (
              <YStack
                mx="$-6"
                mt={-350 - 9}
                zi={-1}
                mb={-350 - 9}
                mah={700}
                maw={700}
                $sm={{ x: '-10%', scale: 0.7 }}
                o={0.5}
              >
                <svg
                  height="700"
                  width="700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 239.891 239.891"
                >
                  <path
                    fill="var(--color4)"
                    d="M101.197 79.755C80.376 63.511 58.778 48.66 35.765 35.67c-2.222-1.254-4.252.899-4.017 2.824-2.495 2.513-4.627 5.569-7.038 8.129a1957.258 1957.258 0 0 0-8.598 9.167c-.784.843-.555 2.048.108 2.769-.05.63.21 1.254.938 1.587 25.623 11.716 53.704 19.882 81.576 23.842 2.128.301 4.731-2.463 2.463-4.233zM54.09 67.279c-.379.047-.73.032-1.085.026-1.113-.351-2.225-.705-3.337-1.059-1.544-1.211-2.084-3.322-.831-5.836 1.133-2.273 3.138-3.751 5.375-4.806 1.011.57 2.103.696 3.138 1.352 1.177.747 2.052 2.09 2.41 3.418.999 3.71-2.254 6.479-5.67 6.905zm171.956-5.447c.292-.629.33-1.376-.094-2.09-2.409-4.054-6.698-7.257-10.049-10.552-3.152-3.1-6.3-6.285-9.985-8.75.074-.069.157-.132.231-.202.494-.461-.017-1.438-.688-1.182-.441.168-.871.384-1.311.558-.513-.006-.978.178-1.314.559-23.276 9.494-44.85 26.276-66.081 39.473-2.222 1.381-1.255 4.71 1.307 4.825 28.341 1.274 60.228-10.361 87.315-17.658 2.557-.689 2.371-3.851.669-4.981zm-37.55 8.801c-3.405 1.581-8.822.436-10.617-3.155-1.018-2.038-.099-4.455 1.5-6.143.022-.004.04.003.061-.002 3.511-.692 8.377-3.184 11.377.167 2.586 2.888.908 7.634-2.321 9.133zm-53.116 40.465c-3.12-8.149-6.847-15.919-11.355-23.395-.89-1.475-3.396-2.117-4.619-.595-2.457 3.057-15.814 17.437-14.296 23.152-.319 2.347 2.064 4.723 4.619 3.248 2.281-1.318 4.562-2.638 6.842-3.958.991-.574 2.685-1.973 3.712-1.936.818.029 3.81 2.537 4.507 3.002l6.01 4.003c2.158 1.436 5.551-.984 4.58-3.521z"
                  />
                  <path
                    fill="var(--color4)"
                    d="M230.411 80.318c-1.332-2.856-5.123-1.074-5.369 1.454-1.432 14.696-5.011 27.401-10.413 40.82-5.139-5.96-10.692-10.957-17.094-15.644-1.55-1.135-4.1.03-4.483 1.824-1.898 8.894-3.793 17.788-5.688 26.681-3.431-5.894-7.203-11.459-11.45-16.94-1.397-1.803-4.631-.727-5.079 1.341-1.827 8.439-4.516 16.211-8.202 23.843a152.876 152.876 0 0 0-11.311-20.005c-1.543-2.309-4.551-1.687-5.526.722-3.532 8.723-7.215 22.424-13.558 30.525-2.366-6.418-4.922-12.68-7.978-18.876-.926-1.878-4.093-1.911-5.009 0-2.249 4.692-4.688 9.168-7.241 13.647-4.979-7.973-9.958-15.945-14.926-23.925-1.137-1.827-3.874-1.915-4.992 0l-10.957 18.77c-4.212-7.531-7.793-15.128-10.875-23.361-.899-2.401-3.707-2.697-5.194-.679-3.604 4.894-7.064 8.684-11.186 12.461l-10.487-26.334c-.763-1.917-4.051-3.14-5.11-.668a132.984 132.984 0 0 1-9.572 18.328C22.588 107.859 17.072 91.108 9.818 75.15c-.356-.784-1.064-.901-1.714-.713-.691-.153-1.491.101-1.698.914-8.218 32.222-10.344 67.934 4.639 98.486.484.986 1.283 1.3 2.068 1.212.613.837 1.856 1.242 2.626.266 3.863-4.896 12.4-19.385 16.832-18.769 6.459.898 15.03 28.315 17.364 33.774.817 1.912 3.958 1.745 4.83 0 2.102-4.207 3.865-9.308 6.564-13.15 4.631-6.59.18-7.036 4.41-3.289 3.389 3.002 8.533 20.158 10.625 24.096 1.053 1.982 3.811 1.712 4.926 0 2.187-3.357 9.773-18.427 12.671-18.038 1.072.144 10.039 22.389 10.381 23.078 1.03 2.075 3.876 1.676 5.001 0 .988-1.471 10.216-17.994 11.536-18.267 4.892-1.011 11.476 15.579 13.106 18.317.787 1.322 2.082 1.597 3.232 1.275 1.322.558 3.168.237 3.862-1.487 2.082-5.177 6.326-19.602 11.65-19.146 3.853.331 9.561 14.882 10.702 17 1.152 2.14 3.955 1.302 4.717-.617 2.579-6.494 5.16-20.412 10.055-25.307 7.296-7.297 8.444 3.576 12.474 13.634.75 1.872 3.731 2.891 4.814.629 3.612-7.538 6.639-15.186 9.408-22.989 1.94 6.42 3.658 12.865 4.943 19.545.391 2.03 3.308 2.715 4.651 1.228 26.854-29.707 32.839-70.246 15.918-106.514z"
                  />
                </svg>
              </YStack>
            )}
          </XStack>
          <Paragraph ta="center">
            I help companies achieve their goals by developing technology, designing products,
            businesses and user experiences.
          </Paragraph>
          <Separator />
          <CardStack />
          <Paragraph ta="center">
            Made by{' '}
            <Anchor color="$color12" href="https://github.com/vgabrielcastro" target="_blank">
              @vgabrielcastro
            </Anchor>
            ,{' '}
            <Anchor
              color="$color12"
              href="https://github.com/tamagui/tamagui"
              target="_blank"
              rel="noreferrer"
            >
              give it a ⭐️
            </Anchor>
          </Paragraph>
        </YStack>
        <YStack ai='center' p='12px' gap='8px'>
          <Button {...linkProps}>All Projects</Button>
          <SheetDemo />
        </YStack>
      </YStack>
      <Footer />
    </ScrollView >
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
