import { Switch, XStack, SwitchProps } from "@my/ui";
import { Moon, Sun } from "@tamagui/lucide-icons";

export function ChangeTheme({ ...rest }: SwitchProps) {
    return (
        <XStack space='2' gap='6px'{...rest} >
            <Moon size='$1' />
            <Switch size='$2' bg='$gray6' {...rest}>
                <Switch.Thumb animation='bouncy' />
            </Switch>
            <Sun size='$1' />
        </XStack>
    )
}