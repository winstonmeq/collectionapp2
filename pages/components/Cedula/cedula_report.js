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
  import Link from 'next/link';
  import axios from 'axios';
  import { useRef } from "react";
  import ReactToPrint from "react-to-print";


const Cedula_report = () => {

  const [datalist, setdatalist] = useState([]);
  const [userId, setuserId] = useState('635684a1d9f90d0fed02ca51');
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [tableVisible, setTableVisible] = useState(false);



  const tableRef = useRef(null);


 

  const ddate = (petsa) => {
        const finaldate = new Date(petsa);
        const final = finaldate.toLocaleDateString();
        return final;
       }

        
     

  const toggleTable = () => {
    setTableVisible(!tableVisible);
  };



  const handleSearchButtonClick = async () => {

    const response = await axios.get(`/api/Cedula/cedula_report?date1=${date1}&date2=${date2}`);

    const data = response.data;

    setdatalist(data);

  };





  return (
        <Flex direction={'column'} >
     

        {console.log(datalist)}

     
     <Flex direction={'row'} justify={'center'}>
           
           <Box width={'60%'}>
             <label>Date Start: </label>
           <Input type="date" value={date1} onChange={(e) => setDate1(e.target.value)} width={'200px'} />
           <label> Date End: </label>
           <Input type="date" value={date2} onChange={(e) => setDate2(e.target.value)} width={'200px'} />
           <Button onClick={handleSearchButtonClick} width={'100px'} >Search</Button>
           </Box>
     
     </Flex>
     

     <Flex>
     <Box>
       
     <ReactToPrint
             trigger={() => <Button  >Print this out!</Button>}
             content={() => tableRef.current}
             pageStyle="@page { size: portrait; }"
           />
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



<Box ref={tableRef} padding={'20px'}>

<table>
    
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Republic of the Philippines</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
   
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Region XII</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
   
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Municipality of President Roxas</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Community Tax Certificate</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>for the Period from October {date1} to {date2}</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    
</table>
<table>
    <th>
      <tr>
        <td>Date</td>
        <td>Cedula #</td>
        <td>Client Name</td>
        <td>Basic</td>
        <td>Amount</td>
        <td>Interest</td>
        <td>Total Amount</td>
        <td>Action</td>
      </tr>
    </th>
    <tbody>
    {datalist.map((item,i)=>{

return (
      <tr key={i}>
        <td >{ddate(item.createdAt)}</td>
        <td >{item.cedula_no}</td>
        <td>{item.lname +', '+ item.fname}</td>
        <td>{item.amount1}</td>
        <td>{item.total}</td>
        <td>{item.interest}</td>
        <td>{item.total_paid}</td>
        <td>{
            <Link href={`${item._id}`}>Print</Link>
        }</td>
      </tr>
      )


      })}
    </tbody>
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
  </table>


</Box>


       
       </Flex>
    )
}


export default Cedula_report;