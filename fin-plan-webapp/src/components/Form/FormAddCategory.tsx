import { Box, HStack, Button, Flex, useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from './Inputs/Input';


type CreateCategoryFormData = {
    label: string;
    color: string;
}

interface FormAddCategoryProps {
    closeModal: () => void;
}


const createCategoryFormSchema = yup.object().shape({
    label: yup.string().required('Nome obrigatório'),
    color: yup.string()
})


export function FormAddCategory({ closeModal }: FormAddCategoryProps) {

    const toast = useToast();

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createCategoryFormSchema)
    });


    const handleUserCreate: SubmitHandler<CreateCategoryFormData> = async (values, event) => {
        event.preventDefault();
        //await createUser.mutateAsync(values);
        console.log(values);
        closeModal();
        toast({
            status: 'success',
            title: 'Categoria Adicionada com sucesso!',
            description: 'Categoria foi cadastrada com sucesso.'
        })
    }


    return (
        <Box
            as="form"
            flex="1"
            borderRadius={8}
            color="theme.paper"
            p={["6", "8"]}
            noValidate
            onSubmit={handleSubmit(handleUserCreate)}
        >
            <Flex>
                <Input
                    label="Nome da Categoria"
                    w="240px"
                    mr="8"
                    error={formState.errors.label}
                    {...register('label')}
                />
                <Input
                    bgColor="theme.paper"
                    _hover={{ bgColor: "theme.paper", borderColor: "theme.paper" }}
                    h={50}
                    w={50}
                    variant="flushed"
                    border="none"
                    label="Cor da Categoria"
                    type="color"
                    error={formState.errors.color}
                    {...register('color')}
                />
            </Flex>
            <Flex justify="end" pt="10">
                <Button
                    type="submit"
                    color="theme.paper"
                    colorScheme="yellow"
                >
                    Salvar
                </Button>
            </Flex>


        </Box>
    )
}