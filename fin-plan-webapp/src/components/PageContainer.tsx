import { Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

interface PageContainerProps {
    children: ReactNode;
}


export function PageContainer({ children }: PageContainerProps) {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Navbar />
            <Flex
                width="100vw"
                h="100vh"
                align="center"
                flexDirection="column"
                justifyContent="flex-start"
                bgColor="gray.100"
            >
                <Flex
                    alignItems="center"
                    flexDirection="column"
                    align="center"
                    justifyContent="flex-start"
                    pt="8"
                >
                    {children}
                </Flex>

            </Flex>
        </Flex>
    );
}