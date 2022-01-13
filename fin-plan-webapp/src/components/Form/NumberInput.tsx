import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import {
    FormLabel, FormControl, FormErrorMessage,
    NumberInputProps as ChakraNumberInputProps,
    NumberInput as ChakraInputNumber,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from '@chakra-ui/react';

interface NumberInputProps extends ChakraNumberInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}


const NumberInputBase: ForwardRefRenderFunction<HTMLInputElement, NumberInputProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {
                !!label && (<FormLabel htmlFor={name} color="theme.silk">{label}</FormLabel>)
            }

            <ChakraInputNumber
                name={name}
                id={name}
                focusBorderColor="theme.paleGold"
                variant="outline"
                bgColor="theme.paper"
                borderColor="theme.silk"
                color="theme.paleGold"
                _hover={{ bgColor: "theme.paper", borderColor: "theme.silk" }}
                w="40"
                allowMouseWheel
                {...rest}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper color="theme.silk" />
                    <NumberDecrementStepper color="theme.silk" />
                </NumberInputStepper>
            </ChakraInputNumber>

            {!!error && (
                <FormErrorMessage>{error.message}</FormErrorMessage>
            )}
        </FormControl>
    )
}


export const NumberInput = forwardRef(NumberInputBase);