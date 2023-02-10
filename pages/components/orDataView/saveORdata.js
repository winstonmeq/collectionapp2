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
  

    const [orType, setorType] = useState('51');
    const [orFrom, setorFrom] = useState(0)
    const [orTo, setorTo] = useState(0)
    const [orUse, setorUse] = useState(0)
    const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')
 
  
    // const handleSaveORdata = async () => {
    //     try {
    
    //       const payload = {orType, orFrom,orTo,orNumber, userId}

    //       console.log('browser', payload)         
    
    //       const response = await axios.post(process.env.NEXTAUTH_URL + '/api/or/addOR', payload);
    
           
    //     } catch (error) {

    //       console.log(error)

    //     }
    //   }


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

      }
  
  
  
    return (
      <Flex direction={'row'} >

       
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
    )
  
  
  }
  
  
  
  
  export default SaveORdata;
  