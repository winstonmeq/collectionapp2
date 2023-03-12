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
    const [datalist4, setdatalist4] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()



    const tableRef = useRef(null);


    useEffect(() => {

        // async function fetchIssuesOR() {
            
        //     const { data } = await axios.get(process.env.NEXTAUTH_URL + '/api/or/fetchOR');
          
        //     setdatalist(data);
        // }

        // async function fetchNoIssuesOR() {
        //     const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/or/fetch_no_orUse`)          
        //     setdatalist2(data)
           
        // }

        // async function fetch_allOR() {
        //     const { data } = await axios.get(process.env.NEXTAUTH_URL + '/api/or/fetch_or_payment');
        //     setdatalist3(data)
           
        // }

        async function getORreport() {
            const { data } = await axios.get(process.env.NEXTAUTH_URL + '/api/orReport/get_or_report');
            setdatalist4(data)
           
        }
  
        getORreport();
        // fetch_allOR();
        // fetchIssuesOR();
        // fetchNoIssuesOR();
      

    }, []);


    const total = datalist.reduce((acc, item) => acc + item.totalAmount, 0);



    return (
        

<Flex  direction={"column"} align={"center"}>
{console.log(datalist4)}   
 

<Text>C. Accountability for Accountables Forms</Text>


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
 {datalist4.map((items,i) => {
   
   return (
    <>

    <tr key={i} style={{ width: "60px", fontSize:'10px' }}>
   <td style={{border: '1px solid black',width:'73px'}}>{items.formType}</td>


   <td style={{border: '1px solid black',width:'39px'}}>{items.qty1}</td>
   <td style={{border: '1px solid black',width:'54px'}}>{items.bgFrom}</td>
   <td style={{border: '1px solid black',width:'56px'}}>{items.bgTo}</td>

   <td style={{border: '1px solid black',width:'39px'}}>{items.qty2}</td>
   <td style={{border: '1px solid black',width:'54px'}}>{items.rcFrom}</td>
   <td style={{border: '1px solid black',width:'56px'}}>{items.rcTo}</td>

   
   
   <td style={{border: '1px solid black',width:'39px'}}>{items.qty3}</td>
   <td style={{border: '1px solid black',width:'54px'}}>{items.isFrom}</td>
   <td style={{border: '1px solid black',width:'56px'}}>{items.isTo}</td>
   
   <td style={{border: '1px solid black',width:'39px'}}>{items.qty4}</td>
   <td style={{border: '1px solid black',width:'54px'}}>{items.ebFrom}</td>
   <td style={{border: '1px solid black',width:'56px'}}>{items.ebTo}</td>
   
   
   
   </tr>
    

    </>
   )})}

 </tbody>
 </table>
</Flex>
      

       
    );
};

export default Collection_deposit;