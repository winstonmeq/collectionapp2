import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import { Box, Flex, Text, Input, Button, Stack,Select, useDisclosure, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter 
    
  } from '@chakra-ui/react';

const Add_sub_account = ({account_name,account_id}) => {

    const [sub_account_name, setSub_account_name] = useState('');
    const [sub_account_code, setSub_account_code] = useState('');
    const [sub_account_description, setSub_account_description] = useState('');
    const [sub_account_fee, setSub_account_fee] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure()

    // const [account_id, setAccount_id] = useState('')

    const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')
    const [datalist, setdatalist] = useState([]);    

    const router = useRouter();

    const add_sub_account_db = async () => {

        try {
        
            const payload = { sub_account_name, sub_account_code, sub_account_description,sub_account_fee, account_id, userId }

            console.log('payload', payload)

            const response = await axios.post(process.env.NEXTAUTH_URL + '/api/Sub_account/create_sub_account', payload);

            if (response != null) {

                console.log('add', response)
            }

        } catch (error) {
            console.log(error)
        }

       // router.push(`/`);

    };


    
    useEffect(() => {   

        async function fetchData() {
            const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/Account/get_account`)
            setdatalist(data);

            if(data!=null){          

            } else {             

              window.alert('Please add Account');
              router.push('/components/orDataView/saveORdata');

            }
           
        }

        fetchData();
        }, []);





    return (
        <Box direction={'row'} justify={'center'} width={'400px'}>
            
            
            <Button onClick={onOpen}>{account_name}</Button>

<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'xl'}  >
  <ModalOverlay />
  <ModalContent >
    <ModalHeader>Sub Account</ModalHeader>
  
    <ModalBody >
    <Box width={'30%'}>
            <Stack spacing='24px'>
            <form>

            <Box>
            <label>Select Account Name</label>
{/* 
          <Select value={account_id} onChange={e => setAccount_id(e.target.value)} >

                {datalist.map((items,i) => {

                    return (

                        <option key={items._id} value={items._id}>{items.account_name}</option>

                    )

                } )}          
            
          
            </Select> */}

                <Input
                    type='text'
                    value={account_name}
                    onChange={''}
                />

          </Box>



                <Box>
                <label>Sub-Account Name</label>
                <Input
                    type='text'
                    value={sub_account_name}
                    onChange={(e) => { setSub_account_name(e.target.value) }}
                />

                </Box>
               
              <Box>

              <label>Sub-Account Code</label>

                <Input
                    type='text'
                    value={sub_account_code}
                    onChange={(e) => setSub_account_code(e.target.value)}

                />
              </Box>

              <Box>
              <label>Sub-Account Description</label>
                <Input
                    type='text'
                    value={sub_account_description}
                    onChange={(e) => setSub_account_description(e.target.value)}
                />
              
              </Box>


              <Box>
              <label>Charges/Fees</label>
                <Input
                    type='text'
                    value={sub_account_fee}
                    onChange={(e) => setSub_account_fee(e.target.value)}
                />
              
              </Box>

          
              
            </form>

            <Box>

                <Button onClick={(e) => {add_sub_account_db()}} type="submit">Save</Button>

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
         


        </Box>
    )
}


export default Add_sub_account;
