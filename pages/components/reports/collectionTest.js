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


const Collection_test = () => {


    const [datalist, setdatalist] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()




    useEffect(() => {
        async function fetchData() {
            
            const { data } = await axios.get(process.env.NEXTAUTH_URL + '/api/or/fetch_or_payment');
        
            setdatalist(data);
        }
        fetchData();
    }, []);

    return (
        <div>

        {console.log(datalist)}


<table style={{ width: "670px", fontSize:'10px' }}>
<tbody>   
<tr>
            <td rowSpan='2' style={{border: '1px solid black', width:'20px'}}>Name of Forms and Number</td>
            <td rowSpan='2' style={{border: '1px solid black',width:'20px'}}>Qty.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>Beginning Balance </td>
            <td rowSpan='2' style={{border: '1px solid black',width:'20px'}}>Qty.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>RECEIPTS</td>
            <td rowSpan='2' style={{border: '1px solid black',width:'20px'}}>Qty.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>ISSUED</td>
            <td rowSpan='2' style={{border: '1px solid black',width:'20px'}}>Qty.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>ENDING Balance</td>
           
          
 </tr>
 <tr>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>Inclusive Serial No.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>Inclusive Serial No.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>Inclusive Serial No.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>Inclusive Serial No.</td>
        
          
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

 { datalist.map((items,i) => {
   
return (

    
<>
<tr key={i} style={{ width: "60px", fontSize:'10px' }}>
<td style={{border: '1px solid black',width:'73px'}}>{items.orType}</td>
<td style={{border: '1px solid black',width:'39px'}}>{items.orUse.length}</td>
<td style={{border: '1px solid black',width:'54px'}}>{items.orNumber[0]}</td>
<td style={{border: '1px solid black',width:'56px'}}>{items.orNumber[items.orUse.length - 1]}</td>
<td style={{border: '1px solid black',width:'39px'}}>{items.orUse.length}</td>
<td style={{border: '1px solid black',width:'54px'}}>{items.orNumber[0]}</td>
<td style={{border: '1px solid black',width:'56px'}}>{items.orNumber[items.orUse.length - 1]}</td>

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
        </div>
    );
};

export default Collection_test;
