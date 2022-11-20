import { Box, Flex, Text, IconButton, Button, Stack,
    Collapse, Icon, Link, Popover, PopoverTrigger,PopoverContent,
    useColorModeValue, useBreakpointValue, useDisclosure,
  } from '@chakra-ui/react';
import Header from './header';
import Menunav from './menunav';


const Layout = ({ children }) => {


    return (



        <Flex direction={'column'}>

            <Box p={4} bg={'gray.100'}>
                <Header />
            </Box>
            <Box>
            <Menunav />
        </Box>


            <Box p={3} >
                {children}
            </Box>


        </Flex>




    )
}

export default Layout;