import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
  import {
    Table,
    Thead,
    Tbody,Input,
    Tfoot,
    Tr, Flex, Box,Select,
    Th,
    Td,
    TableCaption,
    TableContainer, useDisclosure, Button, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter
  } from '@chakra-ui/react'
import AddLCR from '../LCR/addLCR';
import moment from 'moment/moment';
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { useSession } from 'next-auth/react';




const AbstractReport= () => {


    const [datalist, setdatalist] = useState([]);
    const [datalist2, setdatalist2] = useState([]);
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [reportName, setreportName] = useState('');

    const { data: session} = useSession();

  
    
    const tableRef = useRef(null);

    useEffect(() => {

      async function fetchData() {
          
          const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/DataReport/fetchData?userId=${session.user.id}`);          
          setdatalist2(data);
      }

      fetchData();
    

  }, []);


    
    const handleSearchButtonClick = async (selectedReport) => {
      const {data} = await axios.get(`/api/DataReport/abstractReport?userId=${session.user.id}&reportName=${selectedReport}`);
      setdatalist(data);
    };

    


   const handleSelectChange = (e) => {
    const selectedReport = e.target.value
    handleSearchButtonClick(selectedReport);
  };

    return (

     <Flex direction={'column'} >
          {console.log('datalist')}


     <Flex direction={'row'} justify={'center'}>
           
     <Box width={'30%'} align={'left'}>
            <Select value={reportName} onChange={handleSelectChange} >
            <option  value=''>Select</option>
            {datalist2.map((item,index) => (
                <>
                 <option  value={item.reportName}>{item.reportName}</option>
               </>

            ))}
         
          
          </Select>
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
   

   <Box  ref={tableRef} fontFamily={'Arial'} fontSize={'12px'}>

           
  <Flex direction={'row'}>
             
     <table>
     <thead>
      <tr>
      <th style={{width:'80px'}}>Date</th>
     <th style={{width:'80px'}}>OR #</th>
     <th style={{width:'100px'}}>OR Type</th>
     <th style={{width:'100px'}}>Name</th>
     <th style={{width:'100px'}}>Bus. Tax</th>
     <th style={{width:'100px'}}>Fines Penalty</th>
     <th style={{width:'100px'}}>Garbage</th>
     <th style={{width:'100px'}}>Permit</th>
     <th style={{width:'100px'}}>Civil</th>
     <th style={{width:'100px'}}>Police</th>
     <th style={{width:'100px'}}>Locational</th>
     <th style={{width:'100px'}}>Rental</th>
     <th style={{width:'100px'}}>Certification</th>
     <th style={{width:'100px'}}>Inspection</th>
     <th style={{width:'100px'}}>Medical</th>
     <th style={{width:'100px'}}>Occupation</th>
     <th style={{width:'100px'}}>Mayors</th>
     <th style={{width:'100px'}}>Wt. Measure</th>
     <th style={{width:'100px'}}>Doc Stamp</th>
     <th style={{width:'100px'}}>Brgy. Clearance</th>
     <th style={{width:'100px'}}>Sand & Gravel</th>
     <th style={{width:'100px'}}>Others</th>
     <th style={{width:'100px'}}>Total</th>  
     </tr>
     </thead>
     <tbody>
     
       {datalist.map((item,index) => {

        const total = item.Medical + item.Occupation + item.Mayors;

  return(
       <tr key={item._id} style={{textAlign:'center'}}>
      <td style={{width:'80px'}}>2023</td>
       <td style={{width:'80px'}}>{item.orNumber[0]}</td>
       <td style={{width:'80px'}}>{item.orType[0]}</td>
       <td style={{width:'100px'}}>{item.customer[0]}</td>
       <td style={{width:'100px'}}>{item.Business_Tax}</td>
       <td style={{width:'100px'}}>{item.Fines_Penalty}</td>
       <td style={{width:'100px'}}>{item.Garbage}</td>
       <td style={{width:'100px'}}>{item.Permit}</td>
       <td style={{width:'100px'}}>{item.Civil}</td>
       <td style={{width:'100px'}}>{item.Police}</td>
       <td style={{width:'100px'}}>{item.Locational}</td>
       <td style={{width:'100px'}}>{item.Rental}</td>
       <td style={{width:'100px'}}>{item.Certification}</td>
       <td style={{width:'100px'}}>{item.Inspection}</td>
       <td style={{width:'100px'}}>{item.Medical}</td>
       <td style={{width:'100px'}}>{item.Occupation}</td>
       <td style={{width:'100px'}}>{item.Mayors}</td>
       <td style={{width:'100px'}}>{item.Wt_Measure}</td>
       <td style={{width:'100px'}}>{item.Doc_Stamp}</td>
       <td style={{width:'100px'}}>{item.Brgy_Clearance}</td>
       <td style={{width:'100px'}}>{item.Sand_Gravel}</td>
       <td style={{width:'100px'}}>{item.Others}</td>
       <td style={{width:'100px'}}>{total}</td>

                
       </tr>
  )
      
            
       })}
           
     
     </tbody>
     <tfoot>
    <tr>
      <td colSpan="4" style={{ textAlign: 'right' }}>Total:</td>
      <td>{datalist.reduce((sum, item) => sum + item.Medical, 0)}</td>
      <td>{datalist.reduce((sum, item) => sum + item.Occupation, 0)}</td>
      <td>{datalist.reduce((sum, item) => sum + item.Mayors, 0)}</td>
      <td>{datalist.reduce((sum, item) => sum + item.Medical + item.Occupation + item.Mayors, 0)}</td>
    </tr>
  </tfoot>
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

export default AbstractReport;


