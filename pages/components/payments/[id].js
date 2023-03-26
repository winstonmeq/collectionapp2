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
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';





const Print = () => {
  const [paymentList, setPaymentList] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  useEffect(() => {        
    async function fetchData() {
      const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/Payment/${id}`);           
      setPaymentList(data);
    }
    if(id){
      fetchData();
    }
    
  }, [id]);

  const tableRef = useRef(null);
  var converter = require('number-to-words');



  const handlePrint = () => {

    html2canvas(tableRef.current).then((canvas) => {

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
     pdf.addImage(imgData, 'PNG', 10, 10, 0, 0); // A4 size
  
     pdf.save('my-pdf-file.pdf');

    });
  };






  return (
    <Flex  direction={"column"} align={"center"}  fontFamily={'Arial'}>
      <ReactToPrint
        trigger={() => <Button>Print!</Button>}
        content={() => tableRef.current}
        pageStyle={{ size: "A4", orientation: "Portrait" }}
      />


<button onClick={handlePrint}>Print PDF</button>


      <Box ref={tableRef} align={"left"} >
        <table style={{fontSize:'12px'}} width='350px' >
         
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
                <td colspan='3'>
                    <tr>
                      <td width={'180px'} ></td>
                      <td width={'70px'}></td>
                      <td width={'100px'}> {item.amount.toFixed(2)}</td>
                      </tr>
                </td>
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
        <style jsx>{`
        @media print {
            /* Add your print styles here */
            body {
              font-size: 1.4vw; /* responsive font size */
            }
            h1 {
              font-size: 2vw; /* responsive font size */
              text-align: center;
            }
            table {
              width: 90vw; /* responsive table width */
            }
            td {
              font-size: 1.2vw; /* responsive font size */
            }
            /* ... */
          }

        

      `}</style>
      </Box>
    </Flex>
  );
};

export default Print;

// ReactDOM.render(<Print />, document.getElementById('root'));
