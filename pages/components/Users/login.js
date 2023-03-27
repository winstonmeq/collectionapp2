import {
  Table,
  Thead,Alert,
  Tbody,Input,Grid,GridItem,
  Tfoot,
  Tr, Flex, Box,Select,
  Th,Td,
  TableCaption,
  TableContainer, useDisclosure, Button, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter
} from '@chakra-ui/react'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'

export default function LoginPage() {

  const { data: session, status } = getSession()


  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session) {
    return <div>You must be logged in to access this page</div>
  }





const [authState, setAuthState] = useState({
  username:'',
  password:''
})

const [pageState, setpageState] = useState({
  error:'',
  response: false
})

const handleFieldChange = (e) => {
  setAuthState(old => ({...old, [e.target.id]: e.target.value}))
}

const router = useRouter();

const handleAuth = async () => {
setpageState(old => ({...old, processing: true, error: ''}))
signIn('credentials', {
  ...authState,
  redirect: false
}).then(response => {
  console.log(response)
  if(response.ok) {
    router.push('/')
  }else {
    setpageState(old =>({...old, processing: false}))

  }


}).catch(error => {
  console.log(error)
  setpageState(old =>({...old, processing: false, error: error.message ?? "Something went wrong"}))

})

}




  return (
  <>
     <Grid alignItems={'center'} justifyContent={'center'} height={'100vh'}>
    <GridItem>
    {
      pageState.error !== '' && <Alert>{pageState.error}</Alert>
    }
      <Input sx={{mb:1}} type="text" placeholder='Username' onChange={handleFieldChange} id='username'/>
      <Input sx={{mb:1}} type="text" placeholder='Password' onChange={handleFieldChange} id='password'/>

      <Button onClick={handleAuth}>SignIn</Button>
    </GridItem>
   </Grid>
  </>
  );
}

