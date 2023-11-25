import { Card, CardProps, H2, Image, Paragraph, XStack } from 'tamagui';
import Coding from '../../assets/icons/coding.svg';
import Mobile from '../../assets/icons/mobile-black.svg';

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
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
        >
            <Card.Header padded gap='6px'>
                <Image
                    source={{ width: 60, height: 60, uri: icon }}
                />
                <H2>{title}</H2>
                <Paragraph theme="alt2" >{subtitle}</Paragraph>
            </Card.Header >
        </Card >
    )

}
