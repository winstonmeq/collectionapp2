import {
    Flex,
    Avatar,
    Box,
    Button,
    Text,
    Input,
    Spacer, Table,TableContainer,Select,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useEffect } from "react";
  import axios from 'axios';
  import Link from "next/link";
  
  
  
  const AddLCR = ({ lcrdata }) => {
  
    const [newlcrdata, setnewlcrdata] = useState({});
    const [data, setData] = useState([]);
    const [price, setprice] = useState(0);
    const [name1, setName1] = useState('')
    const [amount1, setAmount1] = useState('')
    const [transacId,setTransacId] = useState();
   
  useEffect(() => {
   
    function trasacId() {
      setTransacId(transacId = `T${Math.floor(Math.random() * 1000000)}`)
    }

    trasacId();
  }, []);



 
    
  const [datalist, setdatalist] = useState([{ name:'Certification fee', amount: 75.00, type:'birth'},{ name:'Late Registration', amount: 120.00, type:'birth'}])
 

  const lcr1 = { name:'Certification fee', amount: 75.00, type:'birth'}
  const lcr2 = { name:'Late Registration', amount: 120.00, type:'birth'}
  const lcr3 = { name:'True Copy', amount: 80.00, type:"married"}
  
const handleAddProduct = (newData) => {
    setdatalist([...datalist, newData ]);
}

const handleRemoveProduct = (name) => {
  setdatalist(datalist.filter(item => item.name !== name));
}

const handleSave = async() => {
  try {

    console.log({datalist})
       const response = await axios.post('http://192.168.0.8:3000/api/LCR/addLCRdata',{datalist});
      
    

  } catch (error) {
      console.error(error);
  }
}

const handleSubmit = async (e) => {

  const payload = {name:'werwer',amount:'tttt',type:'sjdfh'}
  console.log('payload',payload);

  e.preventDefault();
  try {
    
    const response = await axios.post('http://192.168.0.8:3000/api/LCR/addLCRdata', payload);
   
   
  } catch (error) {

    console.error(error);

  }

};


  
   const totalAmount = datalist.reduce((acc, item) => acc + item.amount, 0);
  



  
    return (
    <Flex direction={'row'}>
   <Box >
 <Button onClick={() => handleAddProduct(lcr1)}>Certification</Button>
 <Button onClick={() => handleAddProduct(lcr2)}>Late Registration</Button>
 <Button onClick={() => handleAddProduct(lcr3)}>True Copy</Button>

 
  
  
    </Box>
    <Box>
    <TableContainer>
    <Table variant='striped' colorScheme='teal'>
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
      {datalist.map((item,i)=>{
  
  return (
        <Tr key={item.id}>
           <Td >{item.id}</Td>
           <Td >{item.transactionId}</Td>
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
    <Button onClick={handleSubmit}>Save</Button>
  </TableContainer>
    </Box>
    </Flex>
    )
  
  
  
  }
  
  

  
  export default AddLCR;
  