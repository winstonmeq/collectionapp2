import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import { Box, Flex, Text, Input, Button, Stack,Select, useDisclosure, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter   
  } from '@chakra-ui/react';

import DataTable from 'react-data-table-component';
import Add_sub_account from '../SubAccount/add_sub_account';





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

  

    
    useEffect(() => {   

        async function fetchData() {
            const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/Sub_account/get_sub_account`)
            setdatalist(data);

            if(data!=null){          

            } else {             

              window.alert('Please add Account');
              router.push('/components/orDataView/saveORdata');

            }
           
        }

        fetchData();


        }, []);


    const columns = [
    
        {
            name:'Account Name',
            //selector:(row) => row.data2[0].account_name,
            cell: (row) => (
                
                <Add_sub_account account_name={row.data2[0].account_name} account_id={row.data2[0]._id} />

            ),
            sortable: true,
        },
        {
            name:'Sub Account Name',
            selector:(row) => row.sub_account_name,
            sortable: true,


        },
        {
            name:'Sub Account Code',
            selector:(row) => row.sub_account_code,
            sortable: true,

        },
        {
            name:'Fee & Charges',
            selector:(row) => row.sub_account_fee,
            sortable: true,

        },
        

        // {
        //     name:'Sub Account',
        //     cell: (row) => (
        //         <>
        //          { row.sub_account_name.map((item) => {

        //             return (
        //                 <Box height={'120px'} bg={'red'} width={'50px'}>
        //                       {item}
        //                 </Box>
                      
        //             )
               


        //          })}
                
        //         </>
              
        //       ),
        //     sortable: true,
        // },

   
    
    ]


    return (
        <Flex direction={'row'} justify={'center'}>

            {console.log(datalist)}
    
 
      <DataTable
            columns={columns}
            data={datalist}
           />

  

        </Flex>
    )
}


export default Utility;
