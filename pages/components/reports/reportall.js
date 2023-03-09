import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
  import {
    Table,
    Thead,
    Tbody,Input,
    Tfoot,
    Tr, Flex, Box,
    Th,
    Td,
    TableCaption,
    TableContainer, useDisclosure, Button, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter
  } from '@chakra-ui/react'
import AddLCR from '../LCR/addLCR';
import moment from 'moment/moment';
import { useRef } from "react";
import ReactToPrint from "react-to-print";






const Report_all = () => {


    const [datalist, setdatalist] = useState([]);
    const [datalist2, setdatalist2] = useState([]);
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');



    const { isOpen, onOpen, onClose } = useDisclosure()

  
    
    const tableRef = useRef(null);

  
    // useEffect(() => {
    //     async function fetchData() {
            
    //         const { data } = await axios.get(process.env.NEXTAUTH_URL + '/api/Reports/report_all');

    //         setdatalist(data);
    //     }    
       
    //     fetchData();
       
    // }, []);



    const handleSearchButtonClick = async () => {
      const response = await axios.get(`/api/Reports/report_all?date1=${date1}&date2=${date2}`);
      const data = response.data;
      setdatalist(data);
    };

    

   const ddate = (petsa) => {
    const finaldate = new Date(petsa);
    const final = finaldate.toLocaleDateString();
    return final;
   }


    return (

     <Flex direction={'column'} >
          {console.log('account',datalist)}

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
             trigger={() => <Button>Print this out!</Button>}
             content={() => tableRef.current}
             pageStyle="@page { size: landscape; }"
           />
      </Box>
     
     </Flex>
   

   <Box  ref={tableRef} padding={'20px'}>

           
  <Flex direction={'row'}>
             
     <table>
     <thead>
      <tr>
      <th style={{width:'150px'}}>Date</th>
     <th style={{width:'80px'}}>OR #</th>
     <th style={{width:'150px'}}>Tax Payer</th>
     <th style={{width:'100px'}}>Bus. Tax</th>
     <th style={{width:'100px'}}>Fines/Penalty</th> 
     <th style={{width:'100px'}}>Mayors</th>
     <th style={{width:'100px'}}>Garbage</th> 
     <th style={{width:'100px'}}>Medical</th>
     
     <th style={{width:'100px'}}>Occupation</th>
     <th style={{width:'100px'}}>Franchise</th> 
     </tr>
     </thead>
     <tbody>
     
       {datalist.map((item,index) => (
         
        <tr key={index} style={{textAlign:'center'}}>
       <td style={{width:'150px'}}>{ddate(item.date)}</td>
       <td style={{width:'80px'}}>{item.orNumber[0]}</td>
       <td style={{width:'150px'}}>{item.customer[0]}</td>
       <td style={{width:'100px'}}>{item.Business}</td>
       <td style={{width:'100px'}}>{item.FinesPenalty}</td>
       <td style={{width:'100px'}}>{item.Mayors}</td>
       <td style={{width:'60px'}}>{item.Garbage}</td>
       <td style={{width:'60px'}}>{item.Medical}</td>
     
       <td style={{width:'60px'}}>{item.Occupation}</td>
       <td style={{width:'60px'}}>{item.Franchise}</td>
          
       </tr>
            
      ))}
           
     
     </tbody>
     </table>
            </Flex>


   </Box>

     

  
    </Flex>
    );
};

{/*           

          <table>
<thead>
 <tr>
<th>OR #</th>
<th>Customer</th>
{ datalist2.map((it,i) => (
   <th key={i}>{it.account_name}</th>
))
       
}
   
</tr>
</thead>
<tbody>

{datalist.map((item,index) => (
<tr key={index}>
<td>{item._id.transacId}</td>
<td>{item.customerName}</td>
{item.amount.map((item) => (

 <td key={item}>{item}</td>


 ))}
     
    
   
</tr>
 ))}
</tbody>
</table> */}

export default Report_all;


