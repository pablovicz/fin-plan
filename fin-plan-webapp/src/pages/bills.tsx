import {
    Link as ChakraLink,
    Box, Flex, Button, Icon, Table, Thead, Spinner, HStack, Progress, Stack,
    Tr, Th, Td, Checkbox, Tbody, Text, useBreakpointValue, IconButton, useDisclosure
} from "@chakra-ui/react";
import { RiArrowUpLine, RiPencilLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai"


import { PageContainer } from "../components/PageContainer";
import { useState } from "react";
import { ModalAddBill } from "../components/Modal/AddBill";
import { ModalEditBill } from "../components/Modal/EditBill";
import { Pagination } from "../components/Pagination";
import { Bill } from "../types/types";
import { dateToTable } from "../utils/dateUtils";




interface BillsResponseData {
    bills: Bill[];
}


export default function Bills() {

    const [editBillData, setEditBillData] = useState({} as Bill);

    const {
        isOpen: isEditModalOpen,
        onOpen: onEditModalOpen,
        onClose: onEditModalClose,
    } = useDisclosure();
    const {
        isOpen: isAddModalOpen,
        onOpen: onAddModalOpen,
        onClose: onAddModalClose,
    } = useDisclosure();


    const data: Bill[] = [
        {
            id: 1,
            name: 'Aluguel',
            value: 1735.50,
            date: new Date(),
            category: {
                label: "Apartamento",
                color: "#F00000",
                id: 1
            }
        },
        {
            id: 2,
            name: 'Condomínio',
            value: 620.50,
            date: new Date(),
            category: {
                label: "Apartamento",
                color: "#F00000",
                id: 1
            }
        },
        {
            id: 3,
            name: 'Carro',
            value: 860.00,
            date: new Date(),
            category: {
                label: "Mãe",
                color: "#00ee47",
                id: 2
            }
        },
        {
            id: 4,
            name: 'Internet',
            value: 104.00,
            date: new Date(),
            category: {
                label: "Apartamento",
                color: "#F00000",
                id: 1
            }
        }
    ]

    function handleEditModalOpen(bill: Bill) {
        setEditBillData(bill);
        onEditModalOpen();
    }



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
                    onClick={() => onAddModalOpen()}
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
                        <Th>
                            Nome
                        </Th>
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
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(bill.value)}
                            </Td>
                            <Td>
                                {dateToTable(bill.date)}
                            </Td>
                            <Td>
                                {bill.category.label}
                            </Td>
                            <Td>
                                <IconButton
                                    aria-label="Open details"
                                    icon={<Icon as={RiPencilLine} />}
                                    fontSize="24"
                                    variant="unstyled"
                                    _hover={{ color: "theme.primary" }}
                                    onClick={() => handleEditModalOpen(bill)}
                                    mr="2"
                                />
                            </Td>
                        </Tr>
                    ))}

                </Tbody>
            </Table>
            <Pagination
                totalCountOfRegisters={30}
                currentPage={1}
                registersPerPage={10}
                onPageChange={() => { }}
            />
            <ModalAddBill isOpen={isAddModalOpen} onClose={onAddModalClose} />
            <ModalEditBill isOpen={isEditModalOpen} onClose={onEditModalClose} oldData={editBillData} />
        </PageContainer >
    );
}