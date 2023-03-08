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
  import moment from "moment/moment";



  const SaveORdata = () => {
  

    const [datalist,setdatalist] = useState([])
    const [orType, setorType] = useState('');


    const [orFrom, setorFrom] = useState(0)
    const [orTo, setorTo] = useState(0)
    const [orUse, setorUse] = useState(0)
    const [orBB, setorBB] = useState(0)
    const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')
    const [orGenId, setorGenId] = useState('')
    const [orFund, setorFund] = useState('')
  
    const router = useRouter()

    useEffect(() => {   

      async function fetchOR() {
          const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/or/fetchOR`)          
          setdatalist(data)
       
      }
      
      const ORgenerateId = () => {
        setorGenId(`or${Math.floor(Math.random() * 10000)}`)
      }
  
      

      fetchOR();
      ORgenerateId();
  
  
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
    
                const payload = {orType, orFund, orGenId, orFrom,orTo,orNumber,orUse,orBB, userId}
      
                console.log('browser', payload)         
          
                const response = await axios.post(process.env.NEXTAUTH_URL + '/api/or/addOR', payload);                   

              } catch (error) {
      
                console.log(error)
      
              }            

        }    

        router.push('/')
      }


      const currentDate = new Date();
       const dateToday = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  
   

      const saveORreport = async (orGenIdd,orFund, orType, tdate,rcFrom,rcTo) => {


            try {
    
                const payload = {orGenId:orGenIdd, orFund:orFund, formType:orType, orDate:tdate, qty1:null, bgFrom:null, bgTo:null, 
                                 qty2:(rcTo-rcFrom + 1), rcFrom:rcFrom, rcTo:rcTo, 
                                 qty3:null, isFrom:null, isTo:null, qty4:null, ebFrom:null, ebTo:null, userId}
      
                console.log('orReport', payload)         
          
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
          <Select value={orType} required onChange={(e) => {setorType(e.target.value)}} >
            
              <option  value=''>Select</option>
              <option  value='51'>51</option>
              <option  value='52'>52</option>
              <option  value='53'>53</option>
              <option  value='56'>56</option>
              <option  value='Cedula'>Cedula</option>
            
            
            </Select>
      
        </Box>

        <Box>
          <label>OR Fund</label>
          <Select value={orFund} required onChange={(e) => {setorFund(e.target.value)}} >
            
              <option  value=''>Select</option>
              <option  value='GF'>General Fund</option>
              <option  value='DC'>Direct Cash</option>
              <option  value='TF'>Trust Fund</option>
            
            </Select>
      
        </Box>

        <Box width={'120px'}>
        <label>Stab Number</label>
            <Input type="text" value={orGenId} onChange={(e)=>{}} />
        </Box>
        <Box>
        <label>OR# Start</label>
            <Input type="text" value={orFrom} onChange={(e)=>{setorFrom(e.target.value)}} />
        </Box>
      
        <Box>
        <label>OR# End</label>
            <Input type="text" value={orTo} onChange={(e)=>{setorTo(e.target.value)}} />
        </Box>
          

        <Box marginTop={'20px'}>
        <Button width={'60px'} onClick={(e) => {generateRange(orFrom,orTo), saveORreport(orGenId, orFund, orType,dateToday,orFrom,orTo)}}>Save</Button>  
      </Box>
  
      </Flex>
     
 <Box height={'50px'}></Box>
   <Flex direction={'row'} justify={'center'}>

   <Box width={'80%'} border={'1px'}>


<h1>Issued OR</h1>
   <Table>
   <Thead>
   <Tr>
   <Th>OR Fund</Th>
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
  <Td>{items.orFund}</Td>
  <Td >{items.orType}</Td>
    <Td >{items.orGenId}</Td>
    <Td >{items.firstORNumber}</Td>
    <Td >{items.lastORNumber}</Td>
    <Td >{items.totalAmount}</Td>

  </Tr>
 
  
)


})

}
</Tbody>
</Table>

 
   </Box>

      

    </Flex>
      

</div>




    )
  
  
  }
  
  
  
  
  export default SaveORdata;
  