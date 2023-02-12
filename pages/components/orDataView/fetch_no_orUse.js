import {
    Flex,
    Box,
    Input,
    Button,
    Table, TableContainer, 
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Stack,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useEffect } from "react";
  import axios from 'axios';
  import Savepayment from "../payments/savepayment";
  import { useRouter } from "next/router";
  
  const Fetch_no_orUse = () => {
  

    const [datalist,setdatalist] = useState([])
     
    const router = useRouter()

    useEffect(() => {   

      async function fetchOR() {
          const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/or/fetch_no_orUse`)          
          setdatalist(data)
       
      }

      fetchOR();
  
      }, []);

    
 
    return (
      
   <Flex direction={'row'}>

   <Box width={'80%'} border={'1px'}>

   <Table>
   <TableCaption>Ending Balance</TableCaption>
   <Thead>
   <Tr>
   <Th>OR Type</Th>
    <Th>Booklet</Th>
    <Th>OR Start</Th>
    <Th>OR End</Th>
    <Th>Amount</Th>
   </Tr>
   </Thead>

   <Tbody>
  
   </Tbody>
   { datalist.map((items,i) => {

return (
  <Tr key={i}>
  <Td>{items.orType}</Td>
    <Td >{items.orBooklet}</Td>
    <Td >{items.firstORNumber}</Td>
    <Td >{items.lastORNumber}</Td>
    <Td >{items.totalAmount}</Td>

  </Tr>
 
  
)


})

}
   </Table>
 
   </Box>

  <Box width={'20%'}>
  
  </Box>

   

    </Flex>
      



    )
  
  
  }
  
  
  
  
  export default Fetch_no_orUse;
  