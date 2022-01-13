import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    pageNumber: number;
    isCurrent?: boolean;
    onPageChange: (page:number) => void;
}


export function PaginationItem({ pageNumber, onPageChange, isCurrent = false }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="blackAlpha"
                disabled
                _disabled={{ bgColor: "theme.primary", cursor: "default" }}
            >
                {pageNumber}
            </Button>
        );
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bgColor="gray.500"
            color="theme.paper"
            _hover={{ bgColor: 'theme.silk' }}
            onClick={() => onPageChange(pageNumber)}
        >
            {pageNumber}
        </Button>
    );
}