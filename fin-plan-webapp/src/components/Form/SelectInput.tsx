import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import {
    FormLabel, FormControl, FormErrorMessage,
    Select,
    SelectProps
} from '@chakra-ui/react';
import { getAllMonths } from '../../utils/dateUtils';

interface SelectInputProps extends SelectProps {
    name: string;
    label?: string;
    type?: string;
    options?: { value: any, label: any }[] | any[];
    error?: FieldError;
}


const SelectInputBase: ForwardRefRenderFunction<HTMLInputElement, SelectInputProps> = (
    { name, label, error = null, options = [], type, ...rest }
    , ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {
                !!label && (<FormLabel htmlFor={name} color="theme.silk">{label}</FormLabel>)
            }


            <Select
                name={name}
                focusBorderColor="theme.paleGold"
                variant="outline"
                bgColor="theme.paper"
                borderColor="theme.silk"
                color="theme.paleGold"
                _hover={{ bgColor: "theme.paper", borderColor: "theme.silk" }}
                {...rest}
            >
                {type === "month" ? (
                    getAllMonths("long").map(month => (
                        <option
                            key={month}
                            value={month}
                            color="theme.silk"
                        >
                            {month}
                        </option>
                    ))
                ) : (
                    options.map(op => {
                        if (op instanceof Object) {
                            return (
                                <option
                                    key={op.value}
                                    value={op.value}
                                    color="theme.silk"
                                >
                                    {op.label}
                                </option>
                            )
                        }
                        return (
                            <option
                                key={op}
                                value={op}
                                color="theme.silk"
                            >
                                {op}
                            </option>
                        )
                    })
                )}
            </Select>


            {!!error && (
                <FormErrorMessage>{error.message}</FormErrorMessage>
            )}
        </FormControl>
    )
}


export const SelectInput = forwardRef(SelectInputBase);