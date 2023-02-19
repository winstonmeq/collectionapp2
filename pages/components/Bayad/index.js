import {
    Flex,
    Box,
    Button,
    Table, TableContainer, 
    Thead,
    Tbody,
    Tfoot,
    Input,
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
  




  const Bayad = () => {
  
    const [newlcrdata, setnewlcrdata] = useState({});
    const [data, setData] = useState([]);
    const [price, setprice] = useState(0);
    const [name1, setName1] = useState('')
    const [amount1, setAmount1] = useState('')
    const [transId, setTransId] = useState();
    const [datalist2, setdatalist2] = useState([]);    

  
    useEffect(() => {
  
      const trasacId = () => {
        setTransId(`T${Math.floor(Math.random() * 1000000)}`)
        console.log(transId)
      }
  
       trasacId();
  
       
    
    }, []);
  

    useEffect(() => {   

        async function fetchData2() {
          const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/Sub_account/get_sub_account`)
          setdatalist2(data);
           
      }
     
        fetchData2();
        }, []);

  
  
    //const route = useRouter();
  
    const [datalist, setdatalist] = useState([])
  
  
    const lab1 = { transacId: transId , name: 'Complete Blood Count', amount: 100.00, type: 'birth', userId: '63e4484b3a663c0b8d277141' }
    const lab2 = { transacId: transId, name: 'Platelet Count', amount: 50.00, type: 'birth', userId: '63e4484b3a663c0b8d277141' }
    const lab3 = { transacId: transId, name: 'Hemoglobin', amount: 50.00, type: "married", userId: '63e4484b3a663c0b8d277141' }
    const lab4 = { transacId: transId, name: 'Blood Typing', amount: 50.00, type: "birth", userId: '63e4484b3a663c0b8d277141' }
    const lab5 = { transacId: transId, name: 'Urinalysis', amount: 30.00, type: "married", userId: '63e4484b3a663c0b8d277141' }
    const lab6 = { transacId: transId, name: 'Stool Examination', amount: 30.00, type: "married", userId: '63e4484b3a663c0b8d277141' }
    const lab7 = { transacId: transId, name: 'Sputum/AFB (Vendor Only)', amount: 30.00, type: "married", userId: '63e4484b3a663c0b8d277141' }

  
  
    const handleAddProduct = (newData) => {
      setdatalist([...datalist, newData]);
    }
  
  
  
    const handleRemoveProduct = (name) => {
      setdatalist(datalist.filter(item => item.name !== name));
    }
  
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
      <Flex direction={'row'} >
        

        {console.log(datalist2)}
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
         <Flex direction={'column'} width={'50%'}  padding={'10px'} >
         <Flex direction={'row'} justify={'center'}  >
         <Box >        
         <Stack >
           
                <table>
                    <tbody>    
                    <tr>
                        <td colspan='3'>Select Services</td>
                    </tr>
                    <tr>
                        <td colspan='3'><Input type='text' /></td>
                        <td><Button>Search</Button></td>
                    </tr>
                    {datalist2.map((item)=> {
             
                    return (                
                           <tr key={item._id}>
                            <td style={{width:'150px'}}>{item.sub_account_name}</td>
                            <td style={{width:'80px'}}>{item.sub_account_fee}</td>
                            <td style={{width:'50px'}}><Button onClick={() => handleAddProduct({

                                    transacId: transId , 
                                    name: item.sub_account_name, 
                                    amount: item.sub_account_fee, 
                                    type: 'birth', 
                                    userId: '63e4484b3a663c0b8d277141' 

                            })}>Add</Button></td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
                
                   




        

            {/* <Button onClick={() => handleAddProduct(lab1)}>Blood Count (100)</Button>
            <Button onClick={() => handleAddProduct(lab2)}>Platelet Count (50)</Button>
            <Button onClick={() => handleAddProduct(lab3)}>Hemoglobin/Hematocrit (50)</Button>
            <Button onClick={() => handleAddProduct(lab4)}>Blood Typing (50)</Button>
            <Button onClick={() => handleAddProduct(lab5)}>Urinalysis (30)</Button>
            <Button onClick={() => handleAddProduct(lab6)}>Stool Examination(30)</Button>
            <Button onClick={() => handleAddProduct(lab7)}>Sputum/AFB (Vendor Only) (30)</Button> */}
          </Stack>
         </Box>
         </Flex>
        </Flex>
  
        <Flex direction={'column'}  padding={'10px'} >
          <Box>
            <TableContainer>
              <Table variant='striped' colorScheme='blue'>
                <TableCaption>Laboaratory Services</TableCaption>
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
              { datalist.length ?               <Savepayment transacId={transId} serviceType={'laboratory'} amount={totalAmount} savehandle={handleSave} />
  : null
            

            } 
            </TableContainer>
            
        
  
          </Box>
        </Flex>
         </Flex>
        </Box>
        
        </Flex>
        
  
      </Flex>
    )
  
  
  }
  
  
  
  
  export default Bayad;
  