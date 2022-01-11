import {
    Box, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody
    , useBreakpointValue
} from "@chakra-ui/react";
import Nav from "./NavOptionsBar";
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiDashboardLine, RiGitMergeLine } from "react-icons/ri";
import { MdOutlineCategory } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";


const navOptions = [
    {
        title: 'Dashboard',
        icon: RiDashboardLine,
        href: 'dashboard'
    },
    {
        title: 'Categorias',
        icon: MdOutlineCategory,
        href: 'categories'
    },
    {
        title: 'Contas',
        icon: FaRegMoneyBillAlt,
        href: 'bills'
    },
    // {
    //     title: '',
    //     icon: RiGitMergeLine,
    //     href: 'automation'
    // }
]


export function Navbar() {

    const { isOpen, onClose } = useSidebarDrawer();

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    });

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent backgroundColor="theme.charcoal" p="4">
                        <DrawerCloseButton mt="6" color="theme.silk" />
                        <DrawerHeader color="theme.silk">Navegação</DrawerHeader>
                        <DrawerBody>
                            <Nav navOptions={navOptions}/>
                        </DrawerBody>
                    </DrawerContent>

                </DrawerOverlay>

            </Drawer>
        );
    }

    return (
        <Box
            w="100%"
            h={50}
            align="center"
            justifyContent="center"
            bgColor="gray.100"
        >   
            <Box
            margin="auto"
                w="95%"
                h="100%"
                bgColor="gray.100"
                borderBottom="1px" 
                borderBottomColor="theme.silk"
            >
            <Nav navOptions={navOptions}/>
            </Box>
        </Box>
    );
}