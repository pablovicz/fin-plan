import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { Category } from '../../types/types';
import { FormEditCategory } from '../Form/FormEditCategory';


interface ModalEditCategoryProps {
    category: Category;
    isOpen: boolean;
    onClose: () => void;
}

export function ModalEditCategory({ isOpen, onClose, category }: ModalEditCategoryProps): JSX.Element {

    const handleCloseModal = (): void => {
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="xl">
            <ModalOverlay />
            <ModalContent bgColor="theme.paper">
                <ModalHeader fontSize="4xl" color="theme.paleGold">Editar Categoria</ModalHeader>
                <ModalCloseButton color="theme.paleGold"/>
                <ModalBody w="90%">
                    <FormEditCategory closeModal={handleCloseModal} oldData={category}/>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}