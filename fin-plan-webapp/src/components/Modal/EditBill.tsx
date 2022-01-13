import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { Bill } from '../../types/types';
import { FormEditBill } from '../Form/FormEditBill';


interface ModalEditBillProps {
    oldData: Bill;
    isOpen: boolean;
    onClose: () => void;
}

export function ModalEditBill({ isOpen, onClose, oldData }: ModalEditBillProps): JSX.Element {

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
                    <FormEditBill closeModal={handleCloseModal} oldData={oldData}/>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}