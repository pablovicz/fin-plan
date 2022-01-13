import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import {
    Input as ChakraInput, FormLabel, FormControl,
    InputProps as ChrakraInputProps, FormErrorMessage
} from '@chakra-ui/react';

interface InputProps extends ChrakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {
                !!label && (<FormLabel htmlFor={name} color="theme.silk">{label}</FormLabel>)  //só mostra caso o label exista}  
            }

            < ChakraInput
                name={name}
                id={name}
                focusBorderColor="theme.paleGold"
                variant="flushed"
                bgColor="theme.paper"
                borderColor="theme.silk"
                color="theme.paleGold"
                _hover={{ bgColor: "theme.paper", borderColor: "theme.silk" }}
                size="md"
                ref={ref}
                {...rest}
            />

            {!!error && (
                <FormErrorMessage>{error.message}</FormErrorMessage>
            )}
        </FormControl>
    )
}


export const Input = forwardRef(InputBase);