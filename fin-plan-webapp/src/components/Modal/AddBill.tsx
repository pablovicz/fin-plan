import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { FormAddBill } from '../Form/FormAddBill';


interface ModalAddBillProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalAddBill({ isOpen, onClose }: ModalAddBillProps): JSX.Element {

    const handleCloseModal = (): void => {
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="4xl">
            <ModalOverlay />
            <ModalContent bgColor="theme.paper">
                <ModalHeader fontSize="2xl" color="theme.paleGold">Nova Conta</ModalHeader>
                <ModalCloseButton color="theme.paleGold"/>
                <ModalBody w="90%">
                    <FormAddBill closeModal={handleCloseModal} />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}