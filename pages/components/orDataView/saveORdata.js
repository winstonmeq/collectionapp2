import {
    Flex,
    Box,
    Input,
    Button,
    Table, TableContainer, 
    Thead,
    Tbody,Select,Spacer,
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
import Fetch_no_orUse from "./fetch_no_orUse";
  
  const SaveORdata = () => {
  

    const [datalist,setdatalist] = useState([])
    const [orType, setorType] = useState('51');
    const [orBooklet, setorBooklet] = useState('')


    const [qty2, setqty2] = useState(0)
    const [rcFrom, setrcFrom] = useState(0)
    const [rcTo, setrcTo] = useState(0)
    

    const [orFrom, setorFrom] = useState(0)
    const [orTo, setorTo] = useState(0)
    const [orUse, setorUse] = useState(0)
    const [orBB, setorBB] = useState(0)
    const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')
 
  
    const router = useRouter()

    useEffect(() => {   

      async function fetchOR() {
          const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/or/fetchOR`)          
          setdatalist(data)
       
      }

      fetchOR();
  
      }, []);

    
// function fetchORdata() {

  // ayaw ni delete intawon

//   let sum = 0;
// for (let i = 0; i < datalist.length; i++) {
//   let payments = datalist[i].payments;
//   for (let j = 0; j < payments.length; j++) {
//     sum += payments[j].amount;
//   }
// }

// console.log(datalist)
 
//   setAmount(sum)
//   setorFirst(datalist[0].orNumber)
//   setorLast(datalist[datalist.length - 1].orNumber)

// }



      const generateRange = async (num1, num2) => {
       
        for (let orNumber = num1; orNumber <= num2; orNumber++) {
            try {
    
                const payload = {orType, orBooklet, orFrom,orTo,orNumber,orUse,orBB, userId}
      
                console.log('browser', payload)         
          
                const response = await axios.post(process.env.NEXTAUTH_URL + '/api/or/addOR', payload);
                   

              } catch (error) {
      
                console.log(error)
      
              }            

        }


        router.push('/')
      }


  
      const saveORreport = async () => {

        setqty2(rcTo - rcFrom)

            try {
    
                const payload = {orDate, qty2, rcFrom, rcTo, userId }
      
                console.log('browser', payload)         
          
                const response = await axios.post(process.env.NEXTAUTH_URL + '/api/orReport/add_or_report', payload);
                   

              } catch (error) {
      
                console.log(error)
      
              }  



      }



  
  
    return (
      <div>
       
       <Flex direction={'row'} justify={'center'}>
       <Box>
          <label>OR Type</label>
          <Select value={orType} onChange={(e) => {setorType(e.target.value)}} style={{width:"100px"}}>
            
              <option  value='51'>51</option>
              <option  value='52'>52</option>
              <option  value='53'>53</option>
              <option  value='56'>56</option>
        
            </Select>
      
        </Box>
        <Box>
        <label>Stab Number</label>
            <Input type="text" value={orBooklet} onChange={(e)=>{setorBooklet(e.target.value)}} />
        </Box>
        <Box>
        <label>OR# Start</label>
            <Input type="text" value={orFrom} onChange={(e)=>{setorFrom(e.target.value)}} />
        </Box>
      
        <Box>
        <label>OR# End</label>
            <Input type="text" value={orTo} onChange={(e)=>{setorTo(e.target.value)}} />
        </Box>
                  
        <Button onClick={(e) => {generateRange(orFrom,orTo)}}>Save</Button>      
  
      </Flex>
 <Box height={'50px'}></Box>
   <Flex direction={'row'}>

   <Box width={'80%'} border={'1px'}>


<h1>Issued OR</h1>
   <Table>
   <Thead>
   <Tr>
   <Th>OR Type</Th>
    <Th>Booklet</Th>
    <Th>OR Start</Th>
    <Th>OR End</Th>
    <Th>Amount</Th>
   </Tr>
   </Thead>

   <Tbody>
  
  
   { datalist.map((items,i) => {

return (
  <Tr key={i}>
  <Td>{items.orType}</Td>
    <Td >{items.orBooklet}</Td>
    <Td >{items.firstORNumber}</Td>
    <Td >{items.lastORNumber}</Td>
    <Td >{items.totalAmount}</Td>

  </Tr>
 
  
)


})

}
</Tbody>
</Table>

<Fetch_no_orUse />
 
   </Box>

   

  <Box width={'20%'}>

  </Box>

   

    </Flex>
      

</div>




    )
  
  
  }
  
  
  
  
  export default SaveORdata;
  