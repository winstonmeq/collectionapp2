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

const Rpt_payments = () => {


    const [datalist, setdatalist] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()




    useEffect(() => {
        async function fetchData() {
            
            const { data } = await axios.get(process.env.NEXTAUTH_URL + '/api/Reports/reports_payments');

            console.log(data)
            setdatalist(data);
        }
        fetchData();
    }, []);

    return (
        <div>


      

            <h1>Report</h1>
            <Table>
                <Thead>
                    <Tr>
                        <Th>OR Number</Th>
                        <Th>Customer Name</Th>
                        <Th>Type Service</Th>
                        <Th>MCR</Th>
                        <Th>Laboratory</Th>
                        <Th>Action</Th>
                        
                    </Tr>
                </Thead>
                <Tbody>
                    {datalist.map((item,i) => {
                        return (
                            
                            <Tr key={i}>
                            <Td>{item.orNumber}</Td>
                            <Td>{item.customerName}</Td>    
                            <Td>{item.serviceType}</Td>                                
                            <Td>{item.MCR}</Td>
                            <Td>{item.Lab}</Td>
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

export default Rpt_payments;
