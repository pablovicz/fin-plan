import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181b23",
            "800": "#1f2029",
            "700": "#353646",
            "600": "#4b4d63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#B3B5C6",
            "100": "#E5E5E5",
            "50": "#EEEEF2"
        },
        theme: {
            "paleGold": "#C0B283",
            "silk": "#DCD0C0",
            "paper": "#F4F4F4",
            "charcoal": "#373737"

        },
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.500'
            }
        }
    }
});