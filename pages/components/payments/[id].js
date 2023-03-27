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
    async function fetchData(id) {
      const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/Payment/${id}`);           
      setPaymentList(data);
    }
    fetchData(id);
  }, []);

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
    <>
      <ReactToPrint
        trigger={() => <Button>Print!</Button>}
        content={() => tableRef.current}
        pageStyle={{ size: "A4", orientation: "Portrait" }}
      />


<button onClick={handlePrint}>Print PDF</button>


      <>
        <table ref={tableRef} style={{fontSize:'14px'}} width='350px' >
         
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
              <td style={{paddingLeft:'40px'}}>{moment(item.createdAt).format('MM/DD/YYYY')}</td>
              <td></td>
              <td></td>            
            </tr>

            <tr>
            <td height={'20px'}></td>
            <td></td>
            <td></td>
            </tr>  

            <tr>
              <td style={{paddingLeft:'40px'}} >MTO</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
            <td height={'20px'}></td>
            <td></td>
            <td></td>
            </tr>  

            <tr>
              <td style={{paddingLeft:'40px'}}>{item.customerName}</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
            <td height={'30px'}></td>
            <td></td>
            <td></td>
            </tr>  
               

            <tr>
            <td height={'200px'} colspan='3'>
            {item.data2.map((item2,j) => (
                     <tr key={j}>
                   <td width={'180px'} >{item2.name}</td>
                   <td width={'60px'}></td>
                   <td width={'100px'}>{item2.amount.toFixed(2)}</td>
                    </tr>
            ))}

            </td>
           
            </tr> 

            <tr>
            <td colspan='3'>
            <tr >
                   <td width={'180px'} ></td>
                   <td width={'60px'}></td>
                   <td width={'100px'}>{item.amount.toFixed(2)}</td>
                    </tr>



            </td>
           
            </tr>  

            <tr>
            <td height={'15px'}></td>
            <td></td>
            <td></td>
            </tr>  


            <tr>
              <td colspan='3'>{converter.toWords(item.amount)}</td>
              
            </tr>



            </>   
                       

          
           );
          })}
          </tbody>
        </table>
 
      </>
      
    </>
  );
};

export default Print;

// ReactDOM.render(<Print />, document.getElementById('root'));
