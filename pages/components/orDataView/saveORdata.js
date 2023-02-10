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
    const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')
 
  
    const handleSaveORdata = async () => {
        try {
    
          const payload = {orType, orFrom,orTo, userId}

          console.log('browser', payload)         
    
          const response = await axios.post(process.env.NEXTAUTH_URL + '/api/or/addOR', payload);
    
           
        } catch (error) {

          console.log(error)

        }
      }


      const generateRange = (number1, number2) => {
        range = [];
        for (let i = number1; i <= number2; i++) {
          range.push(i);
        }
        //return range;
        console.log(range)
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

           
        <Button onClick={handleSaveORdata}>Save</Button>


       
      
      
  
      </Flex>
    )
  
  
  }
  
  
  
  
  export default SaveORdata;
  