import { Menu } from '@tamagui/lucide-icons'
import * as React from 'react'
import { Adapt, Button, Popover, Separator, YStack } from 'tamagui'

import { MenuContents } from './menu/MenuContents'
import { HeaderLinks } from './HeaderLinks'
import { useMenu } from './menu/useMenu'

export const HeaderMenu = React.memo(function HeaderMenu() {
  const { open, setOpen } = useMenu()

  return (
    <Popover
      keepChildrenMounted
      open={open}
      onOpenChange={setOpen}
      size="$5"
      stayInFrame={{ padding: 20 }}
    >
      <Popover.Trigger asChild>
        <Button
          size="$3"
          bc="transparent"
          circular
          noTextWrap
          onPress={() => setOpen(!open)}
          theme={open ? 'alt1' : undefined}
        >
          <Menu size={16} color="var(--color)" />
        </Button>
      </Popover.Trigger>

      <Adapt platform="touch" when="sm">
        <Popover.Sheet
          zIndex={100000000}
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: 'spring',
            damping: 25,
            mass: 1.2,
            stiffness: 200,
          }}
        >
          <Popover.Sheet.Frame>
            <Popover.Sheet.ScrollView>
              <Adapt.Contents />
            </Popover.Sheet.ScrollView>
          </Popover.Sheet.Frame>
          <Popover.Sheet.Overlay zIndex={100} />
        </Popover.Sheet>
      </Adapt>

      <HeaderMenuContent />
    </Popover>
  )
})

const HeaderMenuContent = React.memo(function HeaderMenuContent() {
  return (
    <Popover.Content
      bw={1}
      boc="$borderColor"
      enterStyle={{ x: 0, y: -10, o: 0 }}
      exitStyle={{ x: 0, y: -10, o: 0 }}
      x={0}
      y={0}
      o={1}
      animation={[
        'quick',
        {
          opacity: {
            overshootClamping: true,
          },
        },
      ]}
      animateOnly={['transform', 'opacity']}
      p={0}
      maxHeight="80vh"
      elevate
      zIndex={100000000}
    >
      <Popover.Arrow borderWidth={1} boc="$borderColor" />

      <Popover.ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <YStack miw={230} p="$3" ai="flex-end">
          <HeaderLinks forceShowAllLinks />
          <Separator my="$4" w="100%" />
          <MenuContents />
        </YStack>
      </Popover.ScrollView>
    </Popover.Content>
  )
})
