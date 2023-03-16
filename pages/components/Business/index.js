import {
  Flex,
  Box,
  Button,
  Table, TableContainer, 
  Thead,
  Tbody,
  Tfoot,
  Input,Select,
  Tr,
  Th,
  Td,
  TableCaption,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Savepayment from "../payments/savepayment";
import { useRouter } from "next/router";





const Business_tax = () => {

  const [newlcrdata, setnewlcrdata] = useState({});
  const [data, setData] = useState([]);
  const [amount2, setamount2] = useState(0);
  const [accountName, setAccountName] = useState('')
  const [searchName, setSearchName] = useState('')
  const [transId, setTransId] = useState();
  const [datalist, setdatalist] = useState([])
  const [datalist2, setdatalist2] = useState([]);    
  const [orFund, setorFund] = useState('');
  const [orType, setorType] = useState('');


  useEffect(() => {

    const trasacId = () => {
      setTransId(`T${Math.floor(Math.random() * 1000000)}`)
      console.log(transId)
    }

     trasacId();

    //  setdatalist2([{ transacId: 1, name: 'Business_tax' , amount: 0,  type: 'Business',
    //  userId: '63e4484b3a663c0b8d277141' }, { transacId: 2 , name: 'Fines/Penalty' , amount: 0,  type: 'Fines/Penalty',
    //  userId: '63e4484b3a663c0b8d277141', }])
   
  
  }, []);


  useEffect(() => {   

      async function fetchData2() {
        const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/Sub_account/get_sub_account`)
        setdatalist2(data);
         
    }
   
      fetchData2();
      }, []);



  //const route = useRouter();

 

  const handleAddProduct = (newData) => {
    setdatalist([...datalist, newData]);
  }

  const [amounts, setAmounts] = useState({});




  function handleSearchButtonClick() {
    // filter the dataList array based on the search query
    const filteredList = datalist2.filter((item) =>
      item.sub_account_name.toLowerCase().includes(searchName.toLowerCase())
    );
    console.log(`Searching for: ${searchName}. Results: ${filteredList}`);
  }



  const handleRemoveProduct = (name) => {
    setdatalist(datalist.filter(item => item.name !== name));
  }

  const handleAmountChange = (itemId, amount) => {
    setAmounts({ ...amounts, [itemId]: amount });
  };
  






  const handleSave = async () => {
    try {
  
      const response = await axios.post(process.env.NEXTAUTH_URL + '/api/laboratory/add_lab_payment', { datalist });     
       //setdatalist([])

     console.log('datalist',{ datalist })
   

    } catch (error) {
      console.log(error)
    }
  }




  const totalAmount = datalist.reduce((acc, item) => acc + item.amount, 0);

  

  return (
    <Flex direction={'row'} justify={'center'} >
      

      {console.log(datalist2)}

      
      <Flex direction={'column'} width={'100%'} >


      <Box border={'1px'} >
      <Flex direction={'row'} width={'100%'} justify={'left'}>
       <Flex direction={'column'} width={'50%'}  padding={'10px'} >
       <Flex direction={'row'} justify={'center'}  >
       <Box >       
    <Flex direction={'row'}>
    <Box width={'120px'}>
          <label>OR Type</label>
          <Select value={orType} required onChange={(e) => {setorType(e.target.value)}} >
            
              <option  value=''>Select</option>
              <option  value='51'>51</option>
              <option  value='52'>52</option>
              <option  value='53'>53</option> 
              <option  value='56'>56</option>            
            
            </Select>
      
        </Box> 
      
       <Box width={'120px'}>
          <label>OR Fund</label>
          <Select value={orFund} required onChange={(e) => {setorFund(e.target.value)}} >
            
              <option  value=''>Select</option>
              <option  value='GF'>GF</option>
              <option  value='DC'>DC</option>
              <option  value='TF'>TF</option>            
            
            </Select>
      
        </Box> 
    </Flex>
      
   
       <Box direction={'row'}>
       <Input width={'350px'} type='text' value={searchName} placeholder={'Search...'} onChange={e=>setSearchName(e.target.value)} />
       
       <Button onClick={handleSearchButtonClick}>Search</Button>
       </Box>
           <TableContainer maxHeight={'600px'} overflowY={'scroll'}>
           <Table size='sm' variant='striped' colorScheme='gray.500' >
               <TableCaption>Business</TableCaption>
               <Thead bg={'gray.200'} fontWeight={'bold'}>           
                  <Tr>
                        <Td >Sub Account</Td>
                        <Td >Amount</Td>
                        <Td >Action</Td>
                    </Tr>
                </Thead>
              <Tbody >
             
                  {datalist2 .filter((item) =>
                           item.sub_account_name.toLowerCase().includes(searchName.toLowerCase())
                           ).map((item)=> {
           
                  return (                
                         <Tr key={item._id}>
                          <Td style={{width:'200px'}}>{item.sub_account_name}</Td>
                          <Td style={{width:'180px'}}>{item.sub_account_fee === 0 ? (<Input type='text' required={'true'} placeholder="0" value={amounts[item._id] || ''} 
                          onChange={(e) => handleAmountChange(item._id, e.target.value)} />) : (item.sub_account_fee) }</Td>

                          
                          <Td style={{width:'50px'}}><Button onClick={() => handleAddProduct({

                                  transacId: transId , 
                                  orFund: orFund,
                                  type: item.data2[0].account_name,
                                  name: item.sub_account_name, 
                                  amount: item.sub_account_fee === 0 ? Number(amounts[item._id]) : item.sub_account_fee ,
                                  userId: '63e4484b3a663c0b8d277141',                                   
                                  
                          },
                          
                          )}>Add</Button></Td>
                      </Tr>
                      )
                  })}
              </Tbody>

           </Table>
           </TableContainer>
           
              
         
       
       </Box>
       </Flex>
      </Flex>

      <Flex direction={'column'}  >
   
        <Box padding={'10px'} >
          <TableContainer >
            <Table variant='striped' colorScheme='blue'>
              <TableCaption>Payment Summary</TableCaption>
              <Thead>
                <Tr>
                  <Th>TransacId</Th>
                  <Th>Account</Th>
                  <Th>Sub Account</Th>
                  <Th>Amount</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {datalist.map((item, i) => {

                  return (
                    <Tr key={i}>
                      <Td >{item.transacId}</Td>
                      <Td >{item.type}</Td>
                      <Td >{item.name}</Td>
                      <Td>{item.amount}</Td>
                      <Td> <Button onClick={() => handleRemoveProduct(item.name)}>Remove</Button></Td>
                    </Tr>
                  )


                })}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                  <Th style={{fontSize:"15px", fontWeight: "bold"}}colSpan="1">Total</Th>
                  <Th style={{ fontSize:"20px", fontWeight: "bold"}}>{totalAmount}</Th>
                </Tr>


              </Tfoot>
            </Table>
       
          </TableContainer>
          
          { datalist.length ?               
            <Savepayment transacId={transId} orFund={orFund} orType={orType} serviceType={accountName} amount={totalAmount} savehandle={handleSave} />
                : null
          

          } 

        </Box>
      </Flex>
       </Flex>
      </Box>
      
      </Flex>
      

    </Flex>
  )


}




export default Business_tax;
