import {
    Link as ChakraLink,
    Box, Flex, Button, Icon, Table, Thead, Spinner, HStack, Progress, Stack,
    Tr, Th, Td, Checkbox, Tbody, Text, useBreakpointValue, IconButton
} from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai"


import { PageContainer } from "../components/PageContainer";

type CategoryResponseData = {
    label: string;
    color: string;
    id: number;
}



export default function Categories() {


    const categoryData: CategoryResponseData[] = [
        {
            label: "Apartamento",
            color: "red",
            id: 1
        },
        {
            label: "Mãe",
            color: "blue",
            id: 2
        },
        {
            label: "Kaoana",
            color: "green",
            id: 3
        },
    ]



    return (
        <PageContainer>
            <Flex
                align="center"
                justify="right"
                w="100%"
                pb="8"
            >
                <Button
                    leftIcon={<Icon as={AiOutlinePlus} />}
                    colorScheme="blackAlpha"
                    onClick={() => { }}
                >
                    Cadastrar
                </Button>
            </Flex>
            <Table
                colorScheme="blackAlpha"
                w="70vw"
            >
                <Thead>
                    <Tr>
                        <Th px={["4", "4", "6"]} color="gray.300" width="8">
                            <Checkbox colorScheme="yellow" />
                        </Th>
                        <Th>Label</Th>
                        <Th>Cor</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {categoryData.map(categorie => (
                        <Tr key={categorie.id}>
                            <Td>
                                <Checkbox colorScheme="yellow" />
                            </Td>
                            <Td>
                                {categorie.label}
                            </Td>
                            <Td>
                                <Box
                                    w={10}
                                    h={5}
                                    borderRadius={5}
                                    bgColor={categorie.color}
                                >
                                </Box>
                            </Td>
                            <Td>
                                <IconButton
                                    aria-label="Open details"
                                    icon={<Icon as={RiPencilLine} />}
                                    fontSize="24"
                                    variant="unstyled"
                                    _hover={{ color: "yellow.500" }}
                                    onClick={() => { }}
                                    mr="2"
                                />
                            </Td>

                        </Tr>
                    ))}

                </Tbody>
            </Table>
        </PageContainer>
    );
}