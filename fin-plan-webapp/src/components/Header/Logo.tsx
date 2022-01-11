import { Flex, Icon, Text } from "@chakra-ui/react";
import { SiWebmoney } from 'react-icons/si';


export function Logo() {
    return (
        <Flex
            flexDirection="row"
            align="center"
            justify="center"
        >
            <Icon as={SiWebmoney} h={30} w={30} color="yellow.500" />
            <Flex flexDir="row" size={50} pl="4">
                <Text color="theme.paleGold" fontSize={36} fontWeight="500">Fin</Text>
                <Text color="yellow.500" fontSize={36}  fontWeight="500">Plan</Text>
            </Flex>
        </Flex>
    );
}