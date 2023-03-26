import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import { Box, Flex, Text, Input, Button, Stack,Select, useDisclosure, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter   
  } from '@chakra-ui/react';

import Add_sub_account from '../SubAccount/add_sub_account';

import DataTable from 'react-data-table-component';
import Add_account from '../Account/add_account';



const Utility = () => {

   
  
    return (
        <Flex direction={'row'} justify={'center'} w={'100%'}>

          
    <Box width={'30%'} border={'1px'} padding='10px' >
        <Add_account />
    </Box>
    <Box width={'70%'} padding='10px' >
        <Add_sub_account />
    </Box>
  
      
        </Flex>
    )
}


export default Utility;
