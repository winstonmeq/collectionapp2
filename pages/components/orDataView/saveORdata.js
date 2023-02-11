import {
    Flex,
    Box,
    Input,
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
  
  const SaveORdata = () => {
  

    const [datalist,setdatalist] = useState([])
    const [orType, setorType] = useState('51');
    const [orFirst, setorFirst] = useState(0)
    const [orLast, setorLast] = useState(0)
    const [amount, setAmount] = useState(0)

    const [orFrom, setorFrom] = useState(0)
    const [orTo, setorTo] = useState(0)
    const [orUse, setorUse] = useState(0)
    const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')
 
  
    const router = useRouter()

    useEffect(() => {   

      async function fetchOR() {
          const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/or/fetchOR`)  
        
          setdatalist(data)
       
          
      }

      fetchOR();
  
      
     
      }, []);

    
function fetchORdata() {

  

  let sum = 0;
// for (let i = 0; i < datalist.length; i++) {
//   let payments = datalist[i].payments;
//   for (let j = 0; j < payments.length; j++) {
//     sum += payments[j].amount;
//   }
// }

console.log(datalist)
 
  setAmount(sum)
  setorFirst(datalist[0].orNumber)
  setorLast(datalist[datalist.length - 1].orNumber)

}



      const generateRange = async (num1, num2) => {
       
        for (let orNumber = num1; orNumber <= num2; orNumber++) {
            try {
    
                const payload = {orType, orFrom,orTo,orNumber,orUse, userId}
      
                console.log('browser', payload)         
          
                const response = await axios.post(process.env.NEXTAUTH_URL + '/api/or/addOR', payload);
          
          

              } catch (error) {
      
                console.log(error)
      
              }

             

        }


        router.push('/')
      }
  
  
  
    return (
      <div>

       
       <Flex direction={'row'}>
       <Box>
            <Input type="text" value={orType} onChange={(e)=>{setorType(e.target.value)}} />
        </Box>
        <Box>
            <Input type="text" value={orFrom} onChange={(e)=>{setorFrom(e.target.value)}} />
        </Box>
      
        <Box>
            <Input type="text" value={orTo} onChange={(e)=>{setorTo(e.target.value)}} />
        </Box>

                  
        <Button onClick={(e) => {generateRange(orFrom,orTo)}}>Save</Button>      
  
      </Flex>

   <Flex direction={'row'}>

   <Button onClick={fetchORdata}>Generate Report</Button>

    <Box>OR Start = {orFirst}</Box>
    <Box>OR End = {orLast}</Box>
    <Box>Total Amount = {amount}</Box>

    </Flex>
      

</div>




    )
  
  
  }
  
  
  
  
  export default SaveORdata;
  