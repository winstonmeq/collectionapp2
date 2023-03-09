import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr, Flex, Box,Input,
    Th,
    Td,
    TableCaption,
    TableContainer, useDisclosure, Button, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter
  } from '@chakra-ui/react'
  import { useState } from 'react';
  import { useEffect } from 'react';
  import { useRouter } from 'next/router';
  import Link from 'next/link';
  import axios from 'axios';
  import { useRef } from "react";
  import ReactToPrint from "react-to-print";
import CedulaPrint from './print';


const Cedula_report = () => {

  const [datalist, setdatalist] = useState([]);
  const [userId, setuserId] = useState('635684a1d9f90d0fed02ca51');
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [tableVisible, setTableVisible] = useState(false);
  const [showtable2, setshowtable2] = useState(false)


  const tableRef = useRef(null);
  const router = useRouter()

 

  const ddate = (petsa) => {
        const finaldate = new Date(petsa);
        const final = finaldate.toLocaleDateString();
        return final;
       }

     //mao ni code para mag push sang data sa next page na object type sya
      //  const handleClick = () => {
      //   router.push({
      //     pathname: "/components/Cedula/print",
      //     query: { data: JSON.stringify(datalist) },
      //   });
      // };
      


  const handleSearchButtonClick = async () => {

    const response = await axios.get(`/api/Cedula/cedula_report?date1=${date1}&date2=${date2}`);

    const data = response.data;

    setdatalist(data);

  };



  return (
        <Flex direction={'column'} >
     

        {console.log(datalist)}

        <Link href={`/components/Cedula/print?date1=${date1}&date2=${date2}`} >
  <Button >Preview   </Button>
</Link>

  

   {/* <Button onClick={()=>handleClick()}>Push data</Button> */}
     
     <Flex direction={'row'} justify={'center'}>
           
           <Box width={'60%'}>
             <label>Date Start: </label>
           <Input type="date" value={date1} onChange={(e) => setDate1(e.target.value)} width={'200px'} />
           <label> Date End: </label>
           <Input type="date" value={date2} onChange={(e) => setDate2(e.target.value)} width={'200px'} />
           <Button onClick={handleSearchButtonClick} width={'100px'} >Search</Button>
           </Box>
     
     </Flex>
     

    


   
  <Box>
  <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>List of Cedula</TableCaption>
    <Thead>
      <Tr>
        <Th>Date</Th>
        <Th>Cedula #</Th>
        <Th>Client Name</Th>
        <Th>Basic</Th>
        <Th>Amount</Th>
        <Th>Interest</Th>
        <Th>Total Amount</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
    {datalist.map((item,i)=>{

return (
      <Tr key={i}>
        <Td >{ddate(item.createdAt)}</Td>
        <Td >{item.cedula_no}</Td>
        <Td>{item.lname +', '+ item.fname}</Td>
        <Td>{item.amount1}</Td>
        <Td>{item.total}</Td>
        <Td>{item.interest}</Td>
        <Td>{item.total_paid}</Td>
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
</Box>



       
       </Flex>
    )
}


export default Cedula_report;