import { Box, HStack, Button, Flex, useToast, Divider, VStack, Select } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Bill, Category } from '../../types/types';
import { Input } from './Inputs/Input';
import { NumberInput } from './Inputs/NumberInput';
import { SelectInput } from './Inputs/SelectInput';

type EditBillFormData = {
    name: string;
    value: number;
    date: string;
    category: Category[];
}



interface FormEditBillProps {
    oldData: Bill;
    closeModal: () => void;
}


const editBillFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório').max(120, 'O nome deve ter menos do que 120 caracteres').min(3, 'O nome deve possuir no minimo 3 caracteres')
})



export function FormEditBill({ closeModal, oldData }: FormEditBillProps) {

    const toast = useToast();

    const categoriesData = [
        "Apartamento", "categoria 2", "categoria 3", "categoria 4", "categoria 5", "categoria 6",
    ]

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(editBillFormSchema)
    });


    const handleUserCreate: SubmitHandler<EditBillFormData> = async (values, event) => {
        event.preventDefault();
        //await createUser.mutateAsync(values);
        console.log(values);
        closeModal();
        toast({
            status: 'success',
            title: 'Conta Editada com sucesso!',
            description: 'Conta foi editada com sucesso.'
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
            <VStack spacing="8">
                <HStack spacing="8" w="100%">
                    <Input
                        label="Nome da Conta"
                        defaultValue={oldData.name}
                        w="80"
                        variant="flushed"
                        bgColor="theme.paper"
                        borderColor="theme.silk"
                        color="theme.paleGold"
                        _hover={{ bgColor: "theme.paper", borderColor: "theme.silk" }}
                        error={formState.errors.name}
                        {...register('name')}
                    />
                    <NumberInput
                        name="value"
                        label="Valor"
                        isRequired={true}
                        defaultValue={oldData.value}
                        precision={2}
                        min={0}
                        error={formState.errors.value}
                    />

                </HStack>
                <HStack spacing="8" w="100%">
                    <SelectInput
                        label="Mês de Referência"
                        name="month"
                        type="month"
                        defaultValue={oldData.date.getMonth()}
                        isRequired={true}
                    />
                    <NumberInput
                        name="year"
                        label="Ano de Referência"
                        isRequired={true}
                        max={new Date().getFullYear()}
                        defaultValue={oldData.date.getFullYear()}
                        error={formState.errors.value}
                    />
                    <SelectInput
                        label="Categoria"
                        name="category"
                        isRequired={true}
                        defaultValue={oldData.category.label}
                        options={categoriesData}
                    />

                </HStack>

            </VStack>
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