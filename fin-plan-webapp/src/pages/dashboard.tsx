import { Flex, Text, SimpleGrid } from "@chakra-ui/react";

import { PageContainer } from "../components/PageContainer";



export default function Dashboard() {
    return (
        <PageContainer>
            <SimpleGrid
                flex="1"
                gap="4"
                minChildWidth="320px"
                align="center"
                justifyContent="center"
            >
                <Text>Dashboard</Text>
            </SimpleGrid>
        </PageContainer>
    );
}