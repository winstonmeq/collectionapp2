import { createUser } from '../../../axios/user_request'
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import { Box, Flex, Text, Input, Button, Stack,Select, useDisclosure, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter   
} from '@chakra-ui/react';
import DataTable from 'react-data-table-component';










const Add_account = () => {

    const [account_name, setAccount_name] = useState('');
    const [account_code, setAccount_code] = useState('');
    const [account_description, setAccount_description] = useState('');
    const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [datalist, setdatalist] = useState([]);    



    const router = useRouter();

    const add_account_db = async () => {

        try {
        
            const payload = { account_name, account_code, account_description, userId }

            console.log('payload', payload)

            const response = await axios.post(process.env.NEXTAUTH_URL + '/api/Account/create_account', payload);


            if (response != null) {

                console.log('added successfully', response)

                router.reload()
            }

        } catch (error) {

            console.log(error)

        }

       // router.push(`/`);

    };


    
    
    useEffect(() => {   

      async function fetchData() {
          const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/Account/getAccount`)
          setdatalist(data);

         
      }

      fetchData();
      }, []);

      const columns = [
    
        {
            name:'Account Name',
            selector:(row) => row.account_name,
            sortable: true,
        },
        // {
        //     name:'Account Code',
        //     selector:(row) => row.account_code,
        //     sortable: true,


        // },
        // {
        //     name:'Account Description',
        //     selector:(row) => row.account_description,
        //     sortable: true,

        // },
      
    ]

    return (
        <Flex direction={'column'} justify={'center'}>



<Button width={'100px'} onClick={onOpen}>Add</Button>

<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'xl'}  >
  <ModalOverlay />
  <ModalContent >
    <ModalHeader>Account </ModalHeader>
  
    <ModalBody >

    <Box>
            <Stack spacing='24px'>
            <form>
                <Box>
                <label>Account Name</label>
                <Input
                    type='text'
                    value={account_name}
                    onChange={(e) => { setAccount_name(e.target.value) }}
                />

                </Box>
{/*                
              <Box>

              <label>Account Code</label>

                <Input
                    type='text'
                    value={account_code}
                    onChange={(e) => setAccount_code(e.target.value)}

                />
              </Box>

              <Box>
              <label>Account Description</label>
                <Input
                    type='text'
                    value={account_description}
                    onChange={(e) => setAccount_description(e.target.value)}
                />
              
              </Box> */}

          
              
            </form>

            <Box>

                <Button onClick={(e) => {add_account_db()}} type="submit">Save</Button>

                </Box>

            </Stack>
         
          </Box>

   </ModalBody>

    <ModalFooter>
      <Button size={'sm'} colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
            
        
            <DataTable
            columns={columns}
            data={datalist}
           /> 


        </Flex>
    )
}


export default Add_account;
