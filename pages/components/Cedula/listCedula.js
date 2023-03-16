import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr, Flex, Box,
    Th,
    Td,
    TableCaption,
    TableContainer, useDisclosure, Button, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter
  } from '@chakra-ui/react'
  import { listCedula } from "../../../axios/cedula_request";
  import { useState } from 'react';
  import { useEffect } from 'react';
  import Link from 'next/link';
   //import Cedula from './addCedulaView';
   import Cedula from '../Cedula/addCedulaView'




const ListCedula = () => {

  const [data, setdata] = useState([]);
  const [userId, setuserId] = useState('63e4484b3a663c0b8d277141');
  const { isOpen, onOpen, onClose } = useDisclosure()


  const getListCedula = async (userId) => {     

    const payload = {userId}

    
    const cedulalist = await listCedula(payload);

          if(!cedulalist.hasError == true){                
         

              if(!cedulalist.body == ""){  

            
            console.log(cedulalist.body);
                
            setdata(cedulalist.body);

             }      
          
            }else {
              console.log("wala data")
            }

      }

      useEffect(() => {             
        
        getListCedula(userId)   
           
          }, [userId]);


    return (
        <>
    <Flex >
        
    <Button onClick={onOpen}>Add</Button>

  <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'xl'}  >
    <ModalOverlay />
    <ModalContent >
      <ModalHeader>Add Cedula</ModalHeader>
    
      <ModalBody >
  

    <Cedula />        
        
    
     

     </ModalBody>

      <ModalFooter>
        <Button size={'sm'} colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>


    </Flex>
  
  
  <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>List of Cedula</TableCaption>
    <Thead>
      <Tr>
        <Th>Cedula #</Th>
        <Th>Last Name</Th>
        <Th>First Name</Th>
        <Th>Address</Th>
        <Th>Amount</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
    {data.map((item,i)=>{

return (
      <Tr key={i}>
        <Td >{item.cedula_no}</Td>
        <Td>{item.lname}</Td>
        <Td>{item.fname}</Td>
        <Td>{item.full_add}</Td>
        <Td>{item.total}</Td>
        <Td>{
            <Link href={`${item._id}`}>Print</Link>
        }</Td>
      </Tr>
      )


      })}
    </Tbody>
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
  </Table>
</TableContainer>
    
       
        </>
    )
}


export default ListCedula;