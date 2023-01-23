import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import moment from 'moment/moment';
import {
    Flex,
    Avatar,
    Box,
    Button,
    Text,
    Input,
    Spacer,
  } from "@chakra-ui/react";


const Print = () => {


    const [paymentList, setPaymentList] = useState([]);

    const router = useRouter();

    const { id } = router.query;

    
     console.log(id)

   
    useEffect(() => {        
        async function fetchData(id) {
            const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/Payment/${id}`)
            console.log(data)
            setPaymentList(data);
        }
        fetchData(id);
    }, [id]);



    const tableRef = useRef(null);

    var converter = require('number-to-words');








    return (
<Flex  direction={"column"} align={"center"} width={"100vw"}>

<ReactToPrint
        trigger={() => <Button>Print this out!</Button>}
        content={() => tableRef.current}
      />

<Box ref={tableRef} align={"left"} paddingLeft={'30px'}>

{paymentList.map((item,i) => {

return (
<Box key={i}>
<Flex direction={'column'}>
    <Box height={'170px'}></Box>
   <Box>{moment(item.createdAt).format('MM/DD/YYYY')}</Box>
   <Box height={'20px'}></Box>
   <Box paddingLeft={'50px'}>MTO</Box>
   <Box height={'12px'}></Box>
   <Box paddingLeft={'50px'}>{item.customerName}</Box>
   <Box height={'40px'}></Box>
   <Box height={'190px'}>  
   {item.data2.map((item2)=>(

<Flex direction={'row'} textAlign={'left'}>
    <Box width={'230px'}>{item2.name}</Box>
    <Box width={'40px'}></Box>
    <Box>{item2.amount.toFixed(2)}</Box>
</Flex>



))}   
</Box>      
<Box>
<Flex direction={'row'} textAlign={'left'}>
    <Box width={'270px'}></Box>
    <Box>{item.amount.toFixed(2)}</Box>
    <Box height={'40px'}></Box>
</Flex>
<Flex direction={'row'} textAlign={'left'}>
<Box width={'40px'}></Box>
<Box>{converter.toWords(item.amount)}</Box>
</Flex>
</Box>

</Flex>



</Box>




)})}

</Box>
    </Flex>
        
    );
};

export default Print;
