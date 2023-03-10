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


      const totalAmount = datalist.reduce((acc, item) => acc + item.total_paid, 0);


  return (
    <Flex  direction={"column"} align={"center"}>

     

        {console.log(datalist)}


<ReactToPrint
            trigger={() => <Button >Print this out!</Button>}
            content={() => tableRef.current}
            pageStyle="@page { size: portrait; }"
          />
        
 <Box ref={tableRef} padding={'20px'}>


 <Box textAlign={'center'}>Republic of the Philippines</Box>
<Box textAlign={'center'}>Region XII</Box>
<Box textAlign={'center'}>Municipality of President Roxas</Box>
<Box textAlign={'center'}>for the Period from October <b><u>{date1}</u></b> to <b><u>{date2}</u></b> </Box>
<br></br>
<table>
  
    <tr style={{textAlign:'center'}}>
      <td style={{width:'100px', borderBottom:'1px solid'}}>Date</td>
      <td style={{width:'100px', borderBottom:'1px solid'}}>Cedula #</td>
      <td style={{width:'100px', borderBottom:'1px solid'}}>Client Name</td>
      <td style={{width:'100px', borderBottom:'1px solid'}}>Basic</td>
      <td style={{width:'100px', borderBottom:'1px solid'}}>Amount</td>
      <td style={{width:'100px', borderBottom:'1px solid'}}>Interest</td>
      <td style={{width:'100px', borderBottom:'1px solid'}}>Total Amount</td>
    </tr>
  
  <tbody>
  {datalist.map((item,i)=>{

return (
    <tr key={i} style={{textAlign:'center'}}>
      <td >{ddate(item.createdAt)}</td>
      <td >{item.cedula_no}</td>
      <td>{item.lname +', '+ item.fname}</td>
      <td>{item.amount1}</td>
      <td>{item.total}</td>
      <td>{item.interest}</td>
      <td>{item.total_paid}</td>
     
    </tr>
    )


    })}

    
  <tr style={{textAlign:'center'}}>
      <td style={{width:'100px', borderTop:'1px solid'}}></td>
      <td style={{width:'100px', borderTop:'1px solid'}}></td>
      <td style={{width:'100px', borderTop:'1px solid'}}><b>Total</b></td>
      <td style={{width:'100px', borderTop:'1px solid'}}></td>
      <td style={{width:'100px', borderTop:'1px solid'}}></td>
      <td style={{width:'100px', borderTop:'1px solid'}}></td>
      <td style={{width:'100px', borderTop:'1px solid'}}><b>{totalAmount.toFixed(2)}</b></td>
    </tr>
    <br></br>
    <tr style={{textAlign:'center'}}>
      <td style={{width:'100px'}}></td>
      <td style={{width:'100px'}}></td>
      <td style={{width:'100px'}}></td>
      <td style={{width:'100px'}}>Prepared by:</td>
      <td style={{width:'100px'}}></td>
      <td style={{width:'100px'}}></td>
      <td style={{width:'100px'}}></td>
    </tr>
    <br></br>
    <tr style={{textAlign:'center'}}>
      <td style={{width:'100px'}}></td>
      <td style={{width:'100px'}}></td>
      <td style={{width:'100px'}}></td>
      <td style={{width:'100px'}}></td>
      <td colspan={'2'} style={{width:'100px'}}>HAROLD KIM B. UDANI</td>
      <td style={{width:'100px'}}></td>
    </tr>

  </tbody>
 
</table>

</Box>




       
</Flex>
    )
}


export default CedulaPrint;