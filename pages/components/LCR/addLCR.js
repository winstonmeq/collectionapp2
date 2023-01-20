import {
  Flex,
  Avatar,
  Box,
  Button,
  Text,
  Input,
  Spacer, Table, TableContainer, Select,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Link from "next/link";
import Savepayment from "../../payments/savepayment";



const AddLCR = () => {

  const [newlcrdata, setnewlcrdata] = useState({});
  const [data, setData] = useState([]);
  const [price, setprice] = useState(0);
  const [name1, setName1] = useState('')
  const [amount1, setAmount1] = useState('')
  const [transacId, setTransacId] = useState();

  useEffect(() => {

    function trasacId() {
      setTransacId(`T${Math.floor(Math.random() * 1000000)}`)
    }

    trasacId();
  }, []);





  const [datalist, setdatalist] = useState([])

  console.log('maon nih transacID',transacId)

  const lcr1 = { transId: transacId , name: 'Certification fee', amount: 75.00, type: 'birth', userId: '635684a1d9f90d0fed02ca51' }
  const lcr2 = { transId: transacId, name: 'Late Registration', amount: 120.00, type: 'birth', userId: '635684a1d9f90d0fed02ca51' }
  const lcr3 = { transId: transacId, name: 'True Copy', amount: 80.00, type: "married", userId: '635684a1d9f90d0fed02ca51' }

  const handleAddProduct = (newData) => {
    setdatalist([...datalist, newData]);
  }

  const handleRemoveProduct = (name) => {
    setdatalist(datalist.filter(item => item.name !== name));
  }

  const handleSave = async () => {
    try {

      console.log({ datalist })

      const response = await axios.post('http://192.168.0.8:3000/api/LCR/addLCRdata2', { datalist });
   
     setdatalist([])
     

    } catch (error) {
      console.log(error)
    }
  }




  const totalAmount = datalist.reduce((acc, item) => acc + item.amount, 0);




  return (
    <Flex direction={'row'} >
      
      <Flex direction={'column'} width={'20%'}>
      <Box>
      <Flex direction={'column'} padding={'10px'}>
          <Stack width={'40%'}>
            <Button>Add</Button>
            <Button>Report</Button>
            <Button>User</Button>
          </Stack>
           
      </Flex>
      </Box>
      </Flex>
      
      <Flex direction={'column'} width={'80%'} >
      <Box border={'1px'} >
      <Flex direction={'row'} width={'100%'} justify={'left'}>
       <Flex direction={'column'} width={'20%'} bg={'blackAlpha.800'}  padding={'10px'} >
       <Flex direction={'row'} justify={'center'}  >
       <Box >        
       <Stack >
          <Button onClick={() => handleAddProduct(lcr1)}>Certification</Button>
          <Button onClick={() => handleAddProduct(lcr2)}>Late Registration</Button>
          <Button onClick={() => handleAddProduct(lcr3)}>True Copy</Button>
        </Stack>
       </Box>
       </Flex>
      </Flex>

      <Flex direction={'column'}  padding={'10px'} >
        <Box>
          <TableContainer>
            <Table variant='striped' colorScheme='blue'>
              <TableCaption>LCR Services</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>TrasactionID</Th>
                  <Th>Name</Th>
                  <Th>Amount</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {datalist.map((item, i) => {

                  return (
                    <Tr key={i}>
                      <Td >{item.id}</Td>
                      <Td >{item.transId}</Td>
                      <Td >{item.name}</Td>
                      <Td>{item.amount}</Td>
                      <Td> <Button onClick={() => handleRemoveProduct(item.name)}>Remove</Button>
                      </Td>
                    </Tr>
                  )


                })}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                  <Th colSpan="1">Total</Th>
                  <Th>{totalAmount}</Th>
                </Tr>


              </Tfoot>
            </Table>
            <Button onClick={handleSave}>Save</Button>
          </TableContainer>
          
          <Button ><Savepayment transacId={transacId} amount={totalAmount} /></Button>

        </Box>
      </Flex>
       </Flex>
      </Box>
      </Flex>
      

    </Flex>
  )


}




export default AddLCR;
