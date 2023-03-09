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
  import axios from 'axios';
  import Link from 'next/link';
  import { useEffect } from 'react';
  import { useRouter } from 'next/router';
  import { useRef } from "react";
  import ReactToPrint from "react-to-print";
 import { useState } from 'react';

const CedulaPrint = () => {

  
    const [datalist, setdatalist] = useState([]);

    
   const router = useRouter()

   const date1 = router.query.date1
   const date2 = router.query.date2


   //ayaw nih eh delete mao ni code mag kuha sang data object pag eh push dire
  // const data2 = JSON.parse(router.query.data);

   const tableRef = useRef(null);

   const ddate = (petsa) => {
     const finaldate = new Date(petsa);
     const final = finaldate.toLocaleDateString();
     return final;
    }
 

    const fetchCedulaReport = async () => {

        const response = await axios.get(`/api/Cedula/cedula_report?date1=${date1}&date2=${date2}`);
    
        const data = response.data;
    
        setdatalist(data);
    
      };
  
      useEffect(() => {

       fetchCedulaReport()
      
      }, []);





  return (
        <Flex direction={'column'} >
     

        {console.log(datalist)}

<Flex>

<ReactToPrint
            trigger={() => <Button >Print this out!</Button>}
            content={() => tableRef.current}
            pageStyle="@page { size: portrait; }"
          />
        
 <Box ref={tableRef} padding={'20px'}>

<table>
  <th>

  </th>
  <tbody>
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
          <td>for the Period from October ____ to _____ </td>
          <td></td>
          <td></td>
          <td></td>
      </tr>

  </tbody>
     
  
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
 
</table>

</Box>

</Flex>


       
       </Flex>
    )
}


export default CedulaPrint;