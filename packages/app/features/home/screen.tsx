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
} from '@my/ui'
import { Avatar } from 'tamagui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { CardStack } from '../components/CardStack'
import { ChangeTheme } from '../components/ChangeTheme'
import { useColorScheme } from 'react-native'
import { Theme } from 'tamagui'

export function HomeScreen() {
  const scheme = useColorScheme()
  const [isDarkTheme, setisDarkTheme] = useState(true)
  const linkProps = useLink({
    href: '/user/nate',
  })

  const handleChange = () => {
    setisDarkTheme(!isDarkTheme);
  };

  return (
    <Theme name={isDarkTheme ? 'dark' : 'light'}>
      <ScrollView
        maxHeight={'auto'}
        width="100%"
        height="100%"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bc={'$background'}
      >
        <YStack flexWrap="wrap" alignItems="center" justifyContent="center" pt='26px'>
          <ChangeTheme onCheckedChange={handleChange} />
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
              <H1 ta="center">Hi, I'm Vinícius Gabriel, a Full-Stack developer who loves technology...</H1>
              <XStack w="$2" h="$1" animation='bouncy' enterStyle={{
                x: -100,
              }}>
              </XStack>
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
          <Button {...linkProps}>Link to user</Button>
          <SheetDemo />
        </YStack>
      </ScrollView>
    </Theme>
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
