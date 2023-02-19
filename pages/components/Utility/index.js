import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import { Box, Flex, Text, Input, Button, Stack,Select, useDisclosure, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter   
  } from '@chakra-ui/react';

import Add_sub_account from '../SubAccount/add_sub_account';

import DataTable from 'react-data-table-component';
import Add_account from '../Account/add_account';



const Utility = () => {

    const [sub_account_name, setSub_account_name] = useState('');
    const [sub_account_code, setSub_account_code] = useState('');
    const [sub_account_description, setSub_account_description] = useState('');
    const [sub_account_fee, setSub_account_fee] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure()


    const [account_id, setAccount_id] = useState('')

    const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')
    const [datalist, setdatalist] = useState([]);    

    const router = useRouter();

  

  
    return (
        <Flex direction={'row'} justify={'center'} w={'100%'}>

            {console.log(datalist)}
    <Box width={'50%'} border={'1px'} padding='10px' >
        <Add_account />
    </Box>
    <Box width={'50%'} padding='10px' >
        <Add_sub_account />
    </Box>
  
      
        </Flex>
    )
}


export default Utility;
