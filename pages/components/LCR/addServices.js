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




  useEffect(() => {
    async function fetchData() {
      const result = await axios.post('http://192.168.0.8:3000/api/LCR/listLCRdata');
      setData(result.data);
    }
    fetchData();
  }, []);


  

  const handleSubmit = async (e) => {

    const payload = {name:name1,amount:amount1,type:'sjdfh'}
    console.log('payload',payload);

    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.0.8:3000/api/LCR/addLCRdata', payload);
      setData([...data, response.data]);
      setAmount1(0)
     
    } catch (error) {

      console.error(error);

    }

  };

  const savedd = () => {

    setAmount1(NameChange(name1))


  }

 const NameChange = (val) => {

  if(val == 'Certification Fee') {

   
   return 75

    
  }

  if(val == 'Late Registration') {

   
   return 120

  }
  
  if(val == 'True Copy for Birth') {

    return 78

  } 

 }

 const totalAmount = data.reduce((acc, item) => acc + item.amount, 0);


  return (
  <Flex direction={'row'}>
 <Box >
  <form onSubmit={handleSubmit}>

     <label>Services:</label>
      <Select value={name1} onChange={(e) => setName1(e.target.value)} >

        <option value="Certification Fee">Certification Fee</option>
        <option value="Late Registration">Late Registration </option>
        <option value="True Copy for Birth">True Copy for Birth</option>
      </Select>
      
      <label>Amount:</label>
      <Input type="number" value={NameChange(name1)} onChange={(e)=>{}} />

        {/* <label htmlFor="name">Name:</label>
        <Input type="text" id="name" onChange={(e) => setnewlcrdata({ ...newlcrdata, name: e.target.value })} />
       
        <label htmlFor="description">Amount:</label>
        <Input type="text" id="amount" value={100 + Number(price)} onChange={(e) => setnewlcrdata({ ...newlcrdata, amount: e.target.value })} />
        <label htmlFor="Type">Type:</label>
        <Input type="text" id="type" onChange={(e) => setnewlcrdata({ ...newlcrdata, type: e.target.value })} /> */}
        <Button onClick={savedd}  type="submit">Add LCR Data</Button>
      </form>

  </Box>
  <Box>
  <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>LCR Services</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Amount</Th>
      </Tr>
    </Thead>
    <Tbody>
    {data.map((item,i)=>{

return (
      <Tr key={i}>
        <Td >{item.name}</Td>
        <Td>{item.amount}</Td>       
      </Tr>
      )


      })}
    </Tbody>
    <Tfoot>  
      <Tr>
        <Th colSpan="1">Total</Th>
        <Th>{totalAmount}</Th>      
      </Tr>
      
     
    </Tfoot>
  </Table>
  <Button>Payment</Button>
</TableContainer>
  </Box>
  </Flex>
  )



}



// export async function getServerSideProps() {
//   const res = await axios.post('http://192.168.0.8:3000/api/LCR/listLCRdata');
//   const lcrdata = res.data;

//   return {
//     props: {
//       lcrdata
//     }
//   }

// }






export default AddLCR;
