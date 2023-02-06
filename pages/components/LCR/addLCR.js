import {
  Flex,
  Box,
  Button,
  Table, TableContainer, 
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
import Savepayment from "../payments/savepayment";
import { useRouter } from "next/router";

const AddLCR = () => {

  const [newlcrdata, setnewlcrdata] = useState({});
  const [data, setData] = useState([]);
  const [price, setprice] = useState(0);
  const [name1, setName1] = useState('')
  const [amount1, setAmount1] = useState('')
  const [transId, setTransId] = useState();

  useEffect(() => {

    const trasacId = () => {
      setTransId(`T${Math.floor(Math.random() * 1000000)}`)
      console.log(transId)
    }

     trasacId();

     
  
  }, []);



  //const route = useRouter();

  const [datalist, setdatalist] = useState([])


  const lcr1 = { transacId: transId , name: 'Certification Fee', amount: 75.00, type: 'birth', userId: '635684a1d9f90d0fed02ca51' }
  const lcr2 = { transacId: transId, name: 'Late Registration Fee', amount: 120.00, type: 'birth', userId: '635684a1d9f90d0fed02ca51' }
  const lcr3 = { transacId: transId, name: 'True Copy Fee', amount: 75.00, type: "married", userId: '635684a1d9f90d0fed02ca51' }
  const lcr4 = { transacId: transId, name: 'Clerical Error Fee', amount: 1000.00, type: "birth", userId: '635684a1d9f90d0fed02ca51' }
  const lcr5 = { transacId: transId, name: 'CNOMAR Fee', amount: 350.00, type: "married", userId: '635684a1d9f90d0fed02ca51' }
  const lcr6 = { transacId: transId, name: 'CNOMAR /NaN Resident Fee', amount: 450.00, type: "married", userId: '635684a1d9f90d0fed02ca51' }


  const handleAddProduct = (newData) => {
    setdatalist([...datalist, newData]);
  }



  const handleRemoveProduct = (name) => {
    setdatalist(datalist.filter(item => item.name !== name));
  }

  const handleSave = async () => {
    try {
  
      const response = await axios.post(process.env.NEXTAUTH_URL + '/api/LCR/addLCRdata2', { datalist });
   
     //setdatalist([])

     console.log('datalist',{ datalist })

   

    } catch (error) {
      console.log(error)
    }
  }




  const totalAmount = datalist.reduce((acc, item) => acc + item.amount, 0);

  

  return (
    <Flex direction={'row'} >
      
      {/* <Flex direction={'column'} width={'20%'}>
      <Box>
      <Flex direction={'column'} padding={'10px'}>
          <Stack width={'40%'}>
            <Button>Add</Button>
            <Button>Report</Button>
            <Button>User</Button>
          </Stack>
           
      </Flex>
      </Box>
      </Flex> */}
      
      <Flex direction={'column'} width={'80%'} >
      <Box border={'1px'} >
      <Flex direction={'row'} width={'100%'} justify={'left'}>
       <Flex direction={'column'} width={'20%'} bg={'blackAlpha.800'}  padding={'10px'} >
       <Flex direction={'row'} justify={'center'}  >
       <Box >        
       <Stack >
          <Button onClick={() => handleAddProduct(lcr1)}>Certification Fee (75)</Button>
          <Button onClick={() => handleAddProduct(lcr2)}>Late Registration (120)</Button>
          <Button onClick={() => handleAddProduct(lcr3)}>True Copy (75)</Button>
          <Button onClick={() => handleAddProduct(lcr4)}>Clerical Error Fee (1000)</Button>
          <Button onClick={() => handleAddProduct(lcr5)}>CNOMAR Fee(350)</Button>
          <Button onClick={() => handleAddProduct(lcr6)}>CNOMAR/NaN Resident Fee(450)</Button>
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
                      <Td >{item.transacId}</Td>
                      <Td >{item.name}</Td>
                      <Td>{item.amount.toFixed(2)}</Td>
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
                  <Th style={{fontSize:"15px", fontWeight: "bold"}}colSpan="1">Total</Th>
                  <Th style={{ fontSize:"20px", fontWeight: "bold"}}>{totalAmount.toFixed(2)}</Th>
                </Tr>


              </Tfoot>
            </Table>
            {/* <Button onClick={handleSave}>Save</Button> */}
           <Savepayment transacId={transId} amount={totalAmount} savehandle={handleSave} />
          </TableContainer>
          
      

        </Box>
      </Flex>
       </Flex>
      </Box>
      
      </Flex>
      

    </Flex>
  )


}




export default AddLCR;
