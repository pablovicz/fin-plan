import { Box, HStack, Button, Flex, useToast, Divider, VStack, Select } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Category } from '../../types/types';
import { Input } from './Inputs/Input';
import { NumberInput } from './Inputs/NumberInput';
import { SelectInput } from './Inputs/SelectInput';
import { useState } from 'react';
import { getAllMonths, getMonthNumber } from '../../utils/dateUtils';

type CreateBillFormData = {
    name: string;
    value: number;
    month: string;
    category: string;
}



interface FormAddBillProps {
    closeModal: () => void;
}


const createBillFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório').max(120, 'O nome deve ter menos do que 120 caracteres').min(3, 'O nome deve possuir no minimo 3 caracteres'),
    value: yup.number(),
    year: yup.number().max(new Date().getFullYear(), "O ano não pode ser maior do que o atual"),
    month: yup.string(),
    category: yup.string()
})



export function FormAddBill({ closeModal }: FormAddBillProps) {

    const categoriesData = [
        "categoria 1", "categoria 2", "categoria 3", "categoria 4", "categoria 5", "categoria 6",
    ]


    //const [billValue, setBillValue] = useState(0);
    const [month, setMonth] = useState('janeiro');
    const [year, setYear] = useState(new Date().getFullYear());
    const [category, setCategory] = useState(categoriesData[0]);


    const toast = useToast();



    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createBillFormSchema)
    });


    const handleUserCreate: SubmitHandler<CreateBillFormData> = async (values, event) => {
        event.preventDefault();
        //await createUser.mutateAsync(values);
        const data = {
            name: values.name,
            date: new Date(year, getMonthNumber(month), 1),
            value: values.value,
            category: category
        }
        console.log(data)
        closeModal();
        toast({
            status: 'success',
            title: 'Conta Adicionada com sucesso!',
            description: 'Conta foi cadastrada com sucesso.'
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
                        w="80"
                        variant="flushed"
                        error={formState.errors.name}
                        {...register('name')}
                    />
                    <Input
                        label="Valor"
                        type="number"
                        w="25"
                        variant="flushed"
                        defaultValue={0}
                        error={formState.errors.value}
                        {...register('value')}
                    />
                </HStack>
                <HStack spacing="8" w="100%">
                    <SelectInput
                        name="month"
                        label="Mês de Referência"
                        type="month"
                        variant="flushed"
                        isRequired={true}
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                    />
                    <Input
                        label="Year"
                        type="number"
                        w="25"
                        defaultValue={new Date().getFullYear()}
                        variant="flushed"
                        error={formState.errors.year}
                        {...register('year')}
                    />
                    <SelectInput
                        label="Categoria"
                        //name="category"
                        isRequired={true}
                        value={category}
                        variant="flushed"
                        onChange={setCategory}
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