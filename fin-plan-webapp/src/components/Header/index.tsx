import { Flex, Text, Icon, IconButton } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { RiMenuLine } from "react-icons/ri";

import { Profile } from "./Profile";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";


export function Header() {

    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })


    return (
        <Flex
            as="header"
            w="100%"
            //maxWidth={1480}
            h="20"  //20*4 = 80px
            marginX="auto"
            paddingX="6"
            align="center"
            bgColor="gray.100"
        >
            <Flex
                margin="auto"
                padding="4"
                w="100%"
                justify="space-between"
                align="center"
            >

                {!isWideVersion && (
                    <IconButton
                        aria-label="Opoen navigation"
                        icon={<Icon as={RiMenuLine} color="theme.paleGold" />}
                        fontSize="24"
                        variant="unstyled"
                        onClick={onOpen}
                        mr="2"
                    >

                    </IconButton>
                )}
                <Logo />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}