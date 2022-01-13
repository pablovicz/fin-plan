import {
    Link as ChakraLink,
    Box, Flex, Button, Icon, Table, Thead, Spinner, HStack, Progress, Stack,
    Tr, Th, Td, Checkbox, Tbody, Text, useBreakpointValue, IconButton, useDisclosure
} from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai"


import { PageContainer } from "../components/PageContainer";
import { ModalAddCategory } from "../components/Modal/AddCategory";
import { ModalEditCategory } from "../components/Modal/EditCategory";
import { Pagination } from "../components/Pagination";
import { useState } from "react";

type CategoryResponseData = {
    label: string;
    color: string;
    id: number;
}



export default function categorys() {

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


    const categoryData: CategoryResponseData[] = [
        {
            label: "Apartamento",
            color: "#F00000",
            id: 1
        },
        {
            label: "Mãe",
            color: "#00ee47",
            id: 2
        },
        {
            label: "Kaoana",
            color: "#2034e4",
            id: 3
        },
    ]


    const [categoryEdit, setCategoryEdit] = useState({} as CategoryResponseData);


    function handleEditModalOpen(category: CategoryResponseData){
        setCategoryEdit(category);
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
                        <Th>Label</Th>
                        <Th>Cor</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {categoryData.map(category => (
                        <Tr key={category.id}>
                            <Td>
                                <Checkbox colorScheme="yellow" />
                            </Td>
                            <Td>
                                {category.label}
                            </Td>
                            <Td>
                                <Box
                                    w={10}
                                    h={5}
                                    borderRadius={5}
                                    bgColor={category.color}
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
                                    onClick={() => handleEditModalOpen(category)}
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

            <ModalAddCategory isOpen={isAddModalOpen} onClose={onAddModalClose} />
            <ModalEditCategory isOpen={isEditModalOpen} onClose={onEditModalClose} category={categoryEdit}/>
        </PageContainer>
    );
}