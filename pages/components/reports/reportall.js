import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
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
import AddLCR from '../LCR/addLCR';
import moment from 'moment/moment';






const Report_all = () => {


    const [datalist, setdatalist] = useState([]);
    const [datalist2, setdatalist2] = useState([]);

    const { isOpen, onOpen, onClose } = useDisclosure()


    const m1 = moment(new Date('2019/06/01'));
  
    useEffect(() => {
        async function fetchData() {
            
            const { data } = await axios.get(process.env.NEXTAUTH_URL + '/api/Reports/report_all');

            setdatalist(data);
        }

        
      async function fetchData2() {
        const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/Account/get_account`)
        setdatalist2(data);
       
    }

       
        fetchData();
        fetchData2();
    }, []);



    // const civilData = datalist.filter((item) => item.serviceType === 'Civil');
    // const tricycleData = datalist.filter((item) => item.serviceType === 'Tricycle');


    //  console.log(civilData)

    

   const ddate = (petsa) => {

    const finaldate = new Date(petsa);

    const final = finaldate.toLocaleDateString();
    return final;

   }


    return (
        <Flex >
          {console.log('account',datalist)}
          

<table>
<thead>
 <tr>
 <th style={{width:'150px'}}>Date</th>
<th style={{width:'80px'}}>OR #</th>
<th style={{width:'150px'}}>Tax Payer</th>
<th style={{width:'100px'}}>Bus. Tax</th>
<th style={{width:'100px'}}>Fines/Penalty</th> 
<th style={{width:'100px'}}>Mayors</th>
<th>Garbage</th> 
<th>Occupation</th>
<th>Franchise</th> 
</tr>
</thead>
<tbody>

  {datalist.map((item,index) => (
    
   <tr key={index} style={{textAlign:'center'}}>
  <td style={{width:'150px'}}>{ddate(item.date)}</td>
  <td style={{width:'80px'}}>{item.orNumber[0]}</td>
  <td style={{width:'150px'}}>{item.customer[0]}</td>
  <td style={{width:'100px'}}>{item.BusinessTax}</td>
  <td style={{width:'100px'}}>{item.FinesPenalty}</td>
  <td style={{width:'100px'}}>{item.Mayors}</td>
  <td style={{width:'60px'}}>{item.Garbage}</td>
  <td style={{width:'60px'}}>{item.Occupation}</td>
  <td style={{width:'60px'}}>{item.Franchise}</td>
     
  </tr>
       
 ))}
      

</tbody>
</table>
  
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


