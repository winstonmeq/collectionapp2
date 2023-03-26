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
  
  
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
//   const [authState, setAuthState] = useState({
//     username:'',
//     password:''
//   })
  
  const [pageState, setpageState] = useState({
    error:'',
    response: false
  })
  
//   const handleFieldChange = (e) => {
//     setAuthState(old => ({...old, [e.target.id]: e.target.value}))
//   }
  
  const router = useRouter();
  


  const handleAuth = async () => {

//   setpageState(old => ({...old, processing: true, error: ''}))

  const payload = { email, password };

  const data = await signIn('credentials', {...payload, redirect: false});
  
  if (!data.error) {

    router.replace("/");
   
  } else {

    setpageState(old => ({...old, processing: true, error: data.error}))

  }

  }
    
  
    return (
    <>

       <Grid alignItems={'center'} justifyContent={'center'} >
      <GridItem>
      {
        pageState.error !== '' && <Alert>{pageState.error}</Alert>
      }
        <Input sx={{mb:1}} type="text" value={email} placeholder='Username' onChange={(e) => setEmail(e.target.value)} />
        <Input sx={{mb:1}} type="text" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
  
        <Button onClick={handleAuth}>SignIn</Button>
      </GridItem>
     </Grid>
    </>
    );
  }
  
  