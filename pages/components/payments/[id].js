import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import {
    Flex,
    Box,
    Button,
    
  } from "@chakra-ui/react";
  import { useRef } from "react";
  import ReactToPrint from "react-to-print";
import moment from 'moment/moment';



const Print = () => {


    

    const tableRef = useRef(null);

    const [paymentList, setPaymentList] = useState([]);

    const router = useRouter();

    const { id } = router.query;

    //  const payload = {id }

   
     console.log(id)

   

    useEffect(() => {        
        async function fetchData(id) {
            const { data } = await axios.get(`http://192.168.102.18:3000/api/Payment/${id}`)
            console.log(data)
            setPaymentList(data);
        }
        fetchData(id);
    }, [id]);





    return (
      
          <Flex  direction={"column"} align={"center"} width={"100vw"}>
          <ReactToPrint
        trigger={() => <Button>Print this out!</Button>}
        content={() => tableRef.current}
      />
<Box ref={tableRef} align={"left"}>

<table style={{ width: "400px", fontSize:'14px', fontWeight:'' }}>

<tr style={{ height: "170px" }}>
    <td style={{ width: "200px" }}></td>
    <td style={{ width: "50px" }}></td>
    <td style={{ width: "150px" }}></td>
</tr>
</table>
</Box>
    </Flex>
        
          
       
    );
};

export default Print;
