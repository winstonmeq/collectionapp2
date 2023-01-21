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



const Paymentlist = () => {


    const [paymentList, setPaymentList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('http://192.168.102.18:3000/api/Payment/apiPaymentList');

            console.log(data)
            setPaymentList(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <Table>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Amount</Th>
                        <Th>Action</Th>
                        
                    </Tr>
                </Thead>
                <Tbody>
                    {paymentList.map((item,i) => {
                        return (
                            
                            <Tr key={i}>
                            <Td>{item.transacId}</Td>                            
                            <Td>{item.customerName}</Td>
                            <Td>{item.amount}</Td>
                            <Td>{
                                    <Link href={`${item.transacId}`}>Print</Link>
                                }</Td>                    
                           </Tr>
                         
                        
                        )
                       

                    })}
                 
                </Tbody>
            </Table>
        </div>
    );
};

export default Paymentlist;
