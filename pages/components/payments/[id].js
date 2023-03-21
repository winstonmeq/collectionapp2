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

      <Box ref={tableRef} align={"left"} >
        <table style={{fontSize:'12px'}} width={'1024'}>
         
          <tbody>
          {paymentList.map((item, i) => {
          return (
            <> 
            <tr>
            <td height={'150px'} width={'180px'}></td>
            <td width={'70px'}></td>
            <td width={'100px'}></td>
            </tr> 

            <tr >             
              <td style={{paddingLeft:'30px'}}>{moment(item.createdAt).format('MM/DD/YYYY')}</td>
              <td></td>
              <td></td>            
            </tr>

            <tr>
            <td height={'15px'}></td>
            <td></td>
            <td></td>
            </tr>  

            <tr>
              <td style={{paddingLeft:'30px'}} >MTO</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
            <td height={'15px'}></td>
            <td></td>
            <td></td>
            </tr>  

            <tr>
              <td style={{paddingLeft:'30px'}}>{item.customerName}</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
            <td height={'35px'}></td>
            <td></td>
            <td></td>
            </tr>  
               

            <tr>
            <td height={'200px'} colspan='3'>
            {item.data2.map((item2,j) => (
                     <tr key={j}>
                   <td width={'180px'} >{item2.name}</td>
                   <td width={'70px'}></td>
                   <td width={'100px'}>{item2.amount.toFixed(2)}</td>
                    </tr>
            ))}

            </td>
           
            </tr> 

            <tr>
            <td></td>
            <td></td>
            <td>{item.amount.toFixed(2)}</td>
            </tr>  

            <tr>
            <td height={'25px'}></td>
            <td></td>
            <td></td>
            </tr>  


            <tr>
              <td >{converter.toWords(item.amount)}</td>
              <td></td>
              <td></td>
            </tr>



            </>   
                       

          
           );
          })}
          </tbody>
        </table>
        
      </Box>
    </Flex>
  );
};

export default Print;

// ReactDOM.render(<Print />, document.getElementById('root'));
