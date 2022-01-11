import { HStack, VStack, useBreakpointValue, Flex } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { ElementType } from "react";

type NavOption = {
    title: string;
    icon: ElementType;
    href: string;
}


interface NavbarProps {
    navOptions: NavOption[];
}



export default function NavOptionsBar({ navOptions }: NavbarProps) {

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    });


    function renderNavOptions() {
        return (
            navOptions.map(option =>
            (
                <NavLink
                    key={option.href}
                    icon={option.icon}
                    href={`/${option.href}`}
                >
                    {option.title}
                </NavLink>
            )
            )
        )
    }

    if (isDrawerSidebar) {
        return (
            <VStack spacing="12" align="center" pt="8">
                {renderNavOptions()}
            </VStack>
        )
    }

    return (

        <Flex
            margin="auto"
            justify="center"
            pt="2"
            h="100%"
        >
            <HStack spacing="12">
                {renderNavOptions()}
            </HStack>
        </Flex>


    );
}