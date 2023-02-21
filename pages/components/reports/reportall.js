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
    const [datalist2, setdatalist2] = useState([]);

    const { isOpen, onOpen, onClose } = useDisclosure()



  
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



    return (
        <Flex >
          {console.log('account',datalist)}
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
    </table>
    </Flex>
    );
};

export default Report_all;
