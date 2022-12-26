import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { listCedula } from "../../../axios/cedula_request";
  import { useState } from 'react';
  import { useEffect } from 'react';
  import Link from 'next/link';



const ListCedula = () => {

  const [data, setdata] = useState([]);
  const [userId, setuserId] = useState('635684a1d9f90d0fed02ca51');



  const getListCedula = async (userId) => {     

    const payload = {userId}

    
    const cedulalist = await listCedula(payload);

          if(!cedulalist.hasError == true){                
         

              if(!cedulalist.body == ""){  

            
            console.log(cedulalist.body);
                
            setdata(cedulalist.body);

             }      
          
            }else {
              console.log("wala data")
            }

      }

      useEffect(() => {             
        
        getListCedula(userId)   
           
          }, [userId]);


    return (
        <>
    
          <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>List of Cedula</TableCaption>
    <Thead>
      <Tr>
        <Th>Cedula #</Th>
        <Th>Name</Th>
        <Th>Address</Th>
        <Th>Amount</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
    {data.map((item,i)=>{

return (
      <Tr key={i}>
        <Td >{item.cedula_no}</Td>
        <Td>{item.full_name}</Td>
        <Td>{item.full_add}</Td>
        <Td>{item.total}</Td>
        <Td>{
            <Link href={`${item._id}`}>Print</Link>
        }</Td>
      </Tr>
      )


      })}
    </Tbody>
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
  </Table>
</TableContainer>
    
       
        </>
    )
}


export default ListCedula;