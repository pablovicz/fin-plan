import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { FormEditBill } from '../Form/FormEditBill';


interface ModalEditBillProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalEditBill({ isOpen, onClose }: ModalEditBillProps): JSX.Element {

    const handleCloseModal = (): void => {
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="4xl">
            <ModalOverlay />
            <ModalContent bgColor="theme.paper">
                <ModalHeader fontSize="2xl" color="theme.paleGold">Nova Categoria</ModalHeader>
                <ModalCloseButton color="theme.paleGold" />
                <ModalBody w="90%">
                    <FormEditBill closeModal={handleCloseModal} />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}