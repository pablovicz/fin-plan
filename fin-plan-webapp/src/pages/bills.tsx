import {
    Link as ChakraLink,
    Box, Flex, Button, Icon, Table, Thead, Spinner, HStack, Progress, Stack,
    Tr, Th, Td, Checkbox, Tbody, Text, useBreakpointValue, IconButton
} from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai"


import { PageContainer } from "../components/PageContainer";
import { useState } from "react";


type Bill = {
    name: string;
    value: number;
    createdDate: string;
    category: string;
}

interface BillsResponseData {
    bills: Bill[];
}


export default function Bills() {

    const [allChecked, setAllChecked] = useState(false);



    const data: Bill[] = [
        {
            name: 'Aluguel',
            value: 1735.50,
            createdDate: 'jan/22',
            category: 'Apartamento'
        },
        {
            name: 'Condomínio',
            value: 620.50,
            createdDate: 'jan/22',
            category: 'Apartamento'
        },
        {
            name: 'Carro',
            value: 860.00,
            createdDate: 'jan/22',
            category: 'Mae'
        },
        {
            name: 'Internet',
            value: 104.00,
            createdDate: 'jan/22',
            category: 'Apartamento'
        }
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
                        <Th>Nome</Th>
                        <Th>Valor</Th>
                        <Th>Data</Th>
                        <Th>Categoria</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(bill => (
                        <Tr key={bill.name}>
                            <Td>
                                <Checkbox colorScheme="yellow" />
                            </Td>
                            <Td>
                                {bill.name}
                            </Td>
                            <Td>
                                {bill.value}
                            </Td>
                            <Td>
                                {bill.createdDate}
                            </Td>
                            <Td>
                                {bill.category}
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
        </PageContainer >
    );
}