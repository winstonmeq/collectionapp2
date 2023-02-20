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






const Report_all = () => {


    const [datalist, setdatalist] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()




    useEffect(() => {
        async function fetchData() {
            
            const { data } = await axios.get(process.env.NEXTAUTH_URL + '/api/Reports/report_all');

            console.log(data)
            setdatalist(data);
        }
        fetchData();
    }, []);



    const civilData = datalist.filter((item) => item.serviceType === 'Civil');
    const tricycleData = datalist.filter((item) => item.serviceType === 'Tricycle');


     console.log(civilData)


    return (
        <div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h2>Civil</h2>
          <ul>
            {civilData.map((item) => (
              <li key={item._id}>
                {item.amount}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Tricycle</h2>
          <ul>
            {tricycleData.map((item) => (
              <li key={item._id}>
                {item.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    );
};

export default Report_all;
