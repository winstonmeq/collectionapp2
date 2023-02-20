import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRef } from "react";
import ReactToPrint from "react-to-print";
  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr, Flex, Box,
    Th,Text,
    Td,Container,Spacer,
    TableCaption,
    TableContainer, useDisclosure, Button, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter
  } from '@chakra-ui/react'
import AddLCR from '../LCR/addLCR';

const Collection_deposit = () => {


    const [datalist, setdatalist] = useState([]);    
    const [datalist2, setdatalist2] = useState([]);
    const [datalist3, setdatalist3] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()



    const tableRef = useRef(null);


    useEffect(() => {

        async function fetchIssuesOR() {
            
            const { data } = await axios.get(process.env.NEXTAUTH_URL + '/api/or/fetchOR');
          
            setdatalist(data);
        }

        async function fetchNoIssuesOR() {
            const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/or/fetch_no_orUse`)          
            setdatalist2(data)
           
        }

        async function fetch_allOR() {
            const { data } = await axios.get(process.env.NEXTAUTH_URL + '/api/or/fetch_or_payment');
            setdatalist3(data)
           
        }
  
        fetch_allOR();
        fetchIssuesOR();
        fetchNoIssuesOR();

      

    }, []);


    const total = datalist.reduce((acc, item) => acc + item.totalAmount, 0);



    return (
        

<Flex  direction={"column"} align={"center"}>
{console.log(datalist3)}   
    <ReactToPrint
        trigger={() => <Button>Print this out!</Button>}
        content={() => tableRef.current}
      />
 
<Box ref={tableRef} padding={'20px'} >

<Box textAlign={'center'} fontSize ={'2xl'}>Report of Collection and Deposits</Box>
<Box textAlign={'center'}>PRESIDENT ROXAS, COTABATO</Box>
<Box textAlign={'center'}>LGU</Box>

<br></br>
<table style={{ width: "680px", fontSize:'12px' }} >
    <tbody>
        <tr >
            <td style={{border: '1px solid black'}}>Fund</td>
            <td style={{border: '1px solid black'}}>DIRECT TO CASH</td>
            <td style={{ width: "40px" }}></td>
            <td style={{border: '1px solid black'}}>Date:</td>
            <td style={{border: '1px solid black'}}>January 23, 2023</td>
        </tr>
        <tr>
            <td style={{border: '1px solid black'}}>Name of Accountable Officer</td>
            <td style={{border: '1px solid black'}}>HAROLD KIM B. UDANI</td>
            <td style={{ width: "40px" }}></td>
            <td style={{border: '1px solid black'}}>Report No</td>
            <td style={{border: '1px solid black'}}>DTC-2023-01-003</td>
        </tr>
    </tbody>
</table>


<Text>A. Collection</Text>


<table style={{ width: "680px", fontSize:'12px' }} >
    <tbody>
        <tr >
            <td style={{border: '1px solid black'}} >1. For Collectors</td> 
          
        </tr>
        <tr>
            <td style={{border: '1px solid black'}}>OFFICIAL RECEIPT/SERIAL NO.</td>
           
        </tr>   
    
    </tbody>
</table>
<br></br>


<table style={{ width: "680px", fontSize:'12px' }}>
   
           
        <tr>
            <td style={{border: '1px solid black', width:'200px'}}>Type Form</td>
            <td style={{border: '1px solid black',width:'160px'}}>From</td>
            <td style={{border: '1px solid black',width:'160px'}}>To</td>
            <td style={{border: '1px solid black',width:'160px'}}>Amount</td>
        </tr>
       
    <tbody>

    { datalist.map((items,i) => {

    return (
  
    <tr key={i}>
    <td style={{border: '1px solid black',width:'60px'}}>{items.orType}</td>
    <td style={{border: '1px solid black',width:'60px'}}>{items.firstORNumber}</td>
    <td style={{border: '1px solid black',width:'100px'}}>{items.lastORNumber}</td>
    <td style={{border: '1px solid black',width:'60px'}}>{items.totalAmount}</td>
    </tr>  
)

}) }


 </tbody>
</table>

<br></br>

<table style={{ width: "300px", fontSize:'12px' }}>
          
<tbody>
<tr>
            <td style={{border: '1px solid black', width:'200px'}}>General Fund</td>
            <td style={{border: '1px solid black',width:'160px'}}>{total}</td>
           
          
 </tr>
 <tr>
            <td style={{border: '1px solid black', height:'20px', width:'200px'}}></td>
            <td style={{border: '1px solid black',width:'160px'}}></td>
          
 </tr>
 <tr>
            <td style={{border: '1px solid black', width:'200px'}}>TOTAL</td>
            <td style={{border: '1px solid black',width:'160px'}}>{total}</td>
          
 </tr>
</tbody>
</table>



<Text>B. Remittance/Deposits</Text>

<table style={{ width: "680px", fontSize:'12px' }}>
<tbody>
              
<tr>
            <td style={{border: '1px solid black', width:'200px'}}>Accountable Officer/Bank</td>
            <td style={{border: '1px solid black',width:'160px'}}>Reference</td>
            <td style={{border: '1px solid black',width:'160px'}}>Amount</td>
           
          
 </tr>
 <tr>
            <td style={{border: '1px solid black', height:'20px', width:'200px'}}></td>
            <td style={{border: '1px solid black',width:'160px'}}></td>
            <td style={{border: '1px solid black',width:'160px'}}></td>
          
 </tr>
</tbody>

</table>

<Text>C. Accountability for Accountables Forms</Text>


<table style={{ width: "670px", fontSize:'10px' }}>
<tbody>   
<tr>
            <td rowspan='2' style={{border: '1px solid black', width:'20px'}}>Name of Forms and Number</td>
            <td rowspan='2' style={{border: '1px solid black',width:'20px'}}>Qty.</td>
            <td colspan='2' style={{border: '1px solid black',width:'20px'}}>Beginning Balance </td>
            <td rowspan='2' style={{border: '1px solid black',width:'20px'}}>Qty.</td>
            <td colspan='2' style={{border: '1px solid black',width:'20px'}}>RECEIPTS</td>
            <td rowspan='2' style={{border: '1px solid black',width:'20px'}}>Qty.</td>
            <td colspan='2' style={{border: '1px solid black',width:'20px'}}>ISSUED</td>
            <td rowspan='2' style={{border: '1px solid black',width:'20px'}}>Qty.</td>
            <td colspan='2' style={{border: '1px solid black',width:'20px'}}>ENDING Balance</td>
           
          
 </tr>
 <tr>
            <td colspan='2' style={{border: '1px solid black',width:'20px'}}>Inclusive Serial No.</td>
            <td colspan='2' style={{border: '1px solid black',width:'20px'}}>Inclusive Serial No.</td>
            <td colspan='2' style={{border: '1px solid black',width:'20px'}}>Inclusive Serial No.</td>
            <td colspan='2' style={{border: '1px solid black',width:'20px'}}>Inclusive Serial No.</td>
        
          
 </tr>
 <tr>
            <td style={{border: '1px solid black',width:'30px'}}></td>
            <td style={{border: '1px solid black',width:'1px'}}></td>
            <td style={{border: '1px solid black',width:'30px'}}>From</td>
            <td style={{border: '1px solid black',width:'30px'}}>To</td>
            <td style={{border: '1px solid black',width:'1px'}}></td>
            <td style={{border: '1px solid black',width:'30px'}}>From</td>
            <td style={{border: '1px solid black',width:'30px'}}>To</td>
            <td style={{border: '1px solid black',width:'1px'}}></td>
            <td style={{border: '1px solid black',width:'30px'}}>From</td>
            <td style={{border: '1px solid black',width:'30px'}}>To</td>
            <td style={{border: '1px solid black',width:'1px'}}></td>
            <td style={{border: '1px solid black',width:'30px'}}>From</td>
            <td style={{border: '1px solid black',width:'30px'}}>To</td>
          
 </tr>

 { datalist3.map((items,i) => {
   
   return (
   
       
   <>
   <tr key={i} style={{ width: "60px", fontSize:'10px' }}>
   <td style={{border: '1px solid black',width:'73px'}}>{items.orType}</td>
   <td style={{border: '1px solid black',width:'39px'}}>{items.orUse.length}</td>
   <td style={{border: '1px solid black',width:'54px'}}>{items.orNumber[0]}</td>
   <td style={{border: '1px solid black',width:'56px'}}>{items.orNumber[items.orUse.length - 1]}</td>

   <td style={{border: '1px solid black',width:'39px'}}></td>
   <td style={{border: '1px solid black',width:'54px'}}></td>
   <td style={{border: '1px solid black',width:'56px'}}></td>
   
   <td style={{border: '1px solid black',width:'39px'}}>{items.orYes.length}</td>
   <td style={{border: '1px solid black',width:'54px'}}>{items.orNumberYes[0]}</td>
   <td style={{border: '1px solid black',width:'56px'}}>{items.orNumberYes[items.orYes.length - 1]}</td>
   
   <td style={{border: '1px solid black',width:'39px'}}>{items.orNo.length}</td>
   <td style={{border: '1px solid black',width:'54px'}}>{items.orNumberNo[0]}</td>
   <td style={{border: '1px solid black',width:'56px'}}>{items.orNumberNo[items.orNo.length - 1]}</td>
   
   
   
   </tr>
   
   </>
   )
   
   }) }




 </tbody>
</table>


<table style={{ width: "670px", fontSize:'10px' }}>
    <tbody>
    <tr>
    <td colspan='3' style={{border: '1px solid black',width:'39px'}}>Beginning Balance ______,2023</td>
    <td  style={{border: '1px solid black',width:'39px'}}>0</td>
    <td colspan='3' style={{border: '1px solid black',width:'39px'}}>List of Checks</td>

    </tr>
    <tr>
        <td style={{border: '1px solid black',width:'39px'}}>Add</td>
        <td colspan='2' style={{border: '1px solid black',width:'39px'}}>Collection</td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}>Check No.</td>
        <td style={{border: '1px solid black',width:'39px'}}>Payee</td>
        <td style={{border: '1px solid black',width:'39px'}}>Amount</td>

    </tr>
    <tr>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}>Cash</td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}>{total}</td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>

    </tr>
    <tr>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}>Checks:</td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>

    </tr>
    <tr>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}>Total</td>
        <td style={{border: '1px solid black',width:'39px'}}>{total}</td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>

    </tr>

    <tr>
    <td colspan='3' style={{border: '1px solid black',width:'39px'}}>Less: Remittance to Cashier/Treasurer/Depository Bank</td>
    <td  style={{border: '1px solid black',width:'39px'}}></td>
    <td colspan='3' style={{border: '1px solid black',width:'39px'}}></td>

    </tr>

    
    <tr>
    <td colspan='3' style={{border: '1px solid black',width:'39px'}}>Balance</td>
    <td  style={{border: '1px solid black',width:'39px'}}></td>
    <td colspan='3' style={{border: '1px solid black',width:'39px'}}></td>

    </tr>



    <tr style={{ width: "670px", fontSize:'10px', textAlign: 'center' }}>
    <td colspan='4' style={{border: '1px solid black',width:'39px'}}>C E R T I F I C A T I O N</td>
    <td colspan='3' style={{border: '1px solid black',width:'39px'}}>VERIFICATION AND ACKNOWLEDGEMENT</td>

    </tr>
    
    <tr>
    <td colspan='4' style={{border: '1px solid black',width:'39px'}}>I HEREBY CERTIFY the foregoing report of collections and</td>
    <td colspan='3' style={{border: '1px solid black',width:'39px'}}>I HEREBY CERTIFY the foregoing report of collections</td>

    </tr>

    <tr>
    <td colspan='4' style={{border: '1px solid black',width:'39px'}}>deposits, & accountability for accountable forms is true and correct</td>
    <td colspan='3' style={{border: '1px solid black',width:'39px'}}>has been verified and acknowledge receipt of...</td>

    </tr>
    <tr>
    <td colspan='4' style={{border: '1px solid black',width:'39px', height:'50px'}}></td>
    <td colspan='3' style={{border: '1px solid black',width:'39px', fontSize:'14px'}}>{total.toFixed(2)}</td>

    </tr>

    <tr style={{ textAlign: 'center' }}>
    <td colspan='2' style={{border: '1px solid black',width:'39px'}}>HAROLD KIM B. UDANI</td>
    <td colspan='2'style={{border: '1px solid black',width:'39px'}}>FEB. 14, 2023</td>
    <td colspan='2' style={{border: '1px solid black',width:'39px'}}>MARIA FE E. DALISAY</td>
    <td style={{border: '1px solid black',width:'39px'}}>FEB. 14, 2023</td>

    </tr>
    <tr style={{ textAlign: 'center' }}>
    <td colspan='2' style={{border: '1px solid black',width:'39px'}}>Name & Signature</td>
    <td colspan='2'style={{border: '1px solid black',width:'39px'}}>Date</td>
    <td colspan='2'style={{border: '1px solid black',width:'39px'}}>Name & Signature</td>
    <td style={{border: '1px solid black',width:'39px'}}>FEB. 14, 2023</td>

    </tr >

    <tr style={{ width: "670px", fontSize:'10px', textAlign: 'center' }}>
    <td colspan='2' style={{border: '1px solid black',width:'39px'}}>Accountable Officer</td>
    <td colspan='2' style={{border: '1px solid black',width:'39px'}}></td>
    <td colspan='2' style={{border: '1px solid black',width:'39px'}}>Cashier/Treasurer</td>
    <td style={{border: '1px solid black',width:'39px'}}></td>

    </tr>











    </tbody>
   
   </table>












</Box>
</Flex>
      

       
    );
};

export default Collection_deposit;