import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { FormAddCategory } from '../Form/FormAddCategory';


interface ModalAddCategory {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalAddCategory({ isOpen, onClose }: ModalAddCategory): JSX.Element {

    const handleCloseModal = (): void => {
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="xl">
            <ModalOverlay />
            <ModalContent bgColor="theme.paper">
                <ModalHeader fontSize="2xl" color="theme.paleGold">Nova Categoria</ModalHeader>
                <ModalCloseButton color="theme.paleGold"/>
                <ModalBody w="90%">
                    <FormAddCategory closeModal={handleCloseModal} />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}