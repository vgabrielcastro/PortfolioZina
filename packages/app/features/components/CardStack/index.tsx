import { Card, CardProps, H2, Image, Paragraph, XStack } from 'tamagui';
import Coding from '../../assets/icons/coding.svg';
import Mobile from '../../assets/icons/mobile-black.svg';
import illustration from '../../assets/icons/illustration.svg';
import { YStack } from '@my/ui/src';

export function CardStack() {
    return (
        <XStack $sm={{ flexDirection: 'column' }} paddingHorizontal="$4" space>
            <Stacks
                title='Web Development'
                subtitle='Landing pages, Websites, E-commerce'
                icon={Coding.src}
            />
            <Stacks
                title='Mobile Development'
                subtitle='Android and iOS applications, hybrid and native'
                icon={Mobile.src}
            />
            <Stacks
                title='Ui / Ux Design'
                subtitle='Design of interfaces, user experience, Figma, Adobe Photoshop and Adobe Premiere'
                icon={illustration.src}
            />
        </XStack>
    )
}

export function Stacks({ title, subtitle, icon }, props: CardProps) {
    return (
        <Card
            elevate
            size="$4"
            bordered {...props}
            animation='bouncy'
            size="$5"
            width={250}
            height={300}
            scale={0.9}
            hoverStyle={{ scale: 1.100 }}
        >
            <Card.Header padded gap='6px'>
                <YStack p='12px' ai="center" color='color10'>
                    <Image
                        source={{ width: 68, height: 62, uri: icon }}
                    />
                </YStack>
                <H2>{title}</H2>
                <Paragraph theme="alt2" >{subtitle}</Paragraph>
            </Card.Header >
        </Card >
    )

}
