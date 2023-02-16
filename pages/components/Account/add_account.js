import { createUser } from '../../../axios/user_request'
import { useState } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import { Box, Flex, Text, Input, Button, Stack,
    
  } from '@chakra-ui/react';

const Add_account = () => {

    const [account_name, setAccount_name] = useState('');
    const [account_code, setAccount_code] = useState('');
    const [account_description, setAccount_description] = useState('');
    const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')


    const router = useRouter();

    const add_account_db = async () => {

        try {
        
            const payload = { account_name, account_code, account_description, userId }

            console.log('payload', payload)

            const response = await axios.post(process.env.NEXTAUTH_URL + '/api/Account/create_account', payload);


            if (response != null) {

                console.log('add', response)

            }

        } catch (error) {

            console.log(error)

        }

       // router.push(`/`);

    };




    return (
        <Flex direction={'row'} justify={'center'}>
            
          <Box width={'30%'}>
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
              
              </Box>

          
              
            </form>

            <Box>

                <Button onClick={(e) => {add_account_db()}} type="submit">Save</Button>

                </Box>

            </Stack>
         
          </Box>


        </Flex>
    )
}


export default Add_account;
