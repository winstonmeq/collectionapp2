import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
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

  console.log(id);

  useEffect(() => {        
    async function fetchData(id) {
      const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/Payment/${id}`);           
      setPaymentList(data);
    }
    fetchData(id);
  }, []);

  const tableRef = useRef(null);
  var converter = require('number-to-words');

  return (
    <Flex  direction={"column"} align={"center"}  fontFamily={'Arial'}>
      <ReactToPrint
        trigger={() => <Button>Print!</Button>}
        content={() => tableRef.current}
        pageStyle={{ size: "A4", orientation: "Portrait" }}
      />

      <Box ref={tableRef} align={"left"} paddingLeft={'30px'} >
        {paymentList.map((item, i) => {
          return (
            <Box key={i}>
              <Flex  direction={'column'}>
                <Box height={'180px'}></Box>
                <Box paddingLeft={'35px'}>{moment(item.createdAt).format('MM/DD/YYYY')}</Box>
                <Box height={'20px'}></Box>
                <Box paddingLeft={'70px'}>MTO</Box>
                <Box height={'12px'}></Box>
                <Box paddingLeft={'70px'}>{item.customerName}</Box>
                <Box height={'45px'}></Box>
                <Box height={'192px'}>  
                  {item.data2.map((item2,j) => (
                    <Flex key={j} direction={'row'} textAlign={'left'}>
                      <Box  width={'260px'}>{item2.name}</Box>
                      <Box width={'25px'}></Box>
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
          );
        })}
      </Box>
    </Flex>
  );
};

export default Print;

// ReactDOM.render(<Print />, document.getElementById('root'));
