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

const IndexLab = () => {


    const [paymentList, setPaymentList] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()




    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(process.env.NEXTAUTH_URL + '/api/Payment/apiPaymentList');

            console.log(data)
            setPaymentList(data);
        }
        fetchData();
    }, []);

    return (
        <div>

<Link href={'/components/laboratory/add_laboratory'} >
  <Button>Add</Button>
</Link>
           
      

            <h1>Payment List</h1>
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

export default IndexLab;
