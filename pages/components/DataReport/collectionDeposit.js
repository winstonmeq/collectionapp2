import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRef } from "react";
import ReactToPrint from "react-to-print";
  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr, Flex, Box,Select,
    Th,Text,
    Td,Container,Spacer,
    TableCaption,
    TableContainer, useDisclosure, Button, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter
  } from '@chakra-ui/react'
import AddLCR from '../LCR/addLCR';





const CollectionDeposit = () => {


    const [datalist, setdatalist] = useState([]);    
    const [datalist2, setdatalist2] = useState([]);
    const [datalist3, setdatalist3] = useState([]);
    const [datalist4, setdatalist4] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [reportCode, setreportCode] = useState('');



    const tableRef = useRef(null);


    useEffect(() => {

        async function fetchData() {
            
            const { data} = await axios.get(process.env.NEXTAUTH_URL + '/api/ORdata2/ORfetch');          
            setdatalist(data);
        }

        async function fetchdatareport() {
            const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/Freport/fetch_report`)          
            setdatalist2(data)
           
        }

 
        // async function getORreport() {
        //     const { data } = await axios.get(process.env.NEXTAUTH_URL + '/api/Freport/collectionDeposit');
        //     setdatalist4(data)
           
        // }
  
       // getORreport();
        fetchdatareport()
        fetchData();
      

    }, []);






    const handleSearchButtonClick = async (reportCode) => {
        const {data} = await axios.get( process.env.NEXTAUTH_URL +  `/api/Freport/collectionDeposit?report=${reportCode}`);
        setdatalist4(data);

        

        const response = await axios.get(process.env.NEXTAUTH_URL + `/api/ORdata2/ORfetch?report=${reportCode}`);
        const dd = response.data
        setdatalist(dd);

      };




      
   const handleSelectChange = (e) => {
    const reportCode = e.target.value
    handleSearchButtonClick(reportCode);
  };
  

  const total = 0
  //const total = datalist.reduce((acc, item) => acc + item.totalAmount, 0);


 const ComponentToPrint = () => {

    return (
        <Box ref={tableRef} fontFamily={'Arial'} fontSize={'11px'}>

<Box textAlign={'center'} >Report of Collection and Deposits</Box>
<Box textAlign={'center'}>PRESIDENT ROXAS, COTABATO</Box>
<Box textAlign={'center'}>LGU</Box>

<br></br>
<table style={{ width: "680px", }} >
    <tbody>
        <tr >
            <td style={{border: '1px solid black'}}>Fund</td>
            <td style={{border: '1px solid black'}}>General Fund</td>
            <td style={{ width: "40px" }}></td>
            <td style={{border: '1px solid black'}}>Date:</td>
            <td style={{border: '1px solid black'}}>January 23, 2023</td>
        </tr>
        <tr>
            <td style={{border: '1px solid black'}}>Name of Accountable Officer</td>
            <td style={{border: '1px solid black'}}>HAROLD KIM B. UDANI</td>
            <td style={{ width: "40px" }}></td>
            <td style={{border: '1px solid black'}}>Report No</td>
            <td style={{border: '1px solid black'}}>DTC-2023-01-003</td>
        </tr>
    </tbody>
</table>


<Text>A. Collection</Text>


<table style={{ width: "680px" }} >
    <tbody>
        <tr >
            <td style={{border: '1px solid black'}} >1. For Collectors</td> 
          
        </tr>
        <tr>
            <td style={{border: '1px solid black'}}>OFFICIAL RECEIPT/SERIAL NO.</td>
           
        </tr>   
    
    </tbody>
</table>
<br></br>


<table style={{ width: "680px" }}>
    
    <tbody>
           
        <tr>
            <td style={{border: '1px solid black', width:'200px'}}>Type Form</td>
            <td style={{border: '1px solid black',width:'160px'}}>From</td>
            <td style={{border: '1px solid black',width:'160px'}}>To</td>
            <td style={{border: '1px solid black',width:'160px'}}>Amount</td>
        </tr>
       
  
 { datalist.map((items,i) => {

    return (
  
    <tr key={i}>
    <td style={{border: '1px solid black',width:'60px'}}>{items.orType}</td>
    <td style={{border: '1px solid black',width:'60px'}}>{items.firstORNumber}</td>
    <td style={{border: '1px solid black',width:'100px'}}>{items.lastORNumber}</td>
    <td style={{border: '1px solid black',width:'60px'}}>{items.totalAmount}</td>
    </tr>  
)

}) }


 </tbody>
</table>

<br></br>

<table style={{ width: "300px"}}>
          
<tbody>
<tr>
            <td style={{border: '1px solid black', width:'200px'}}>General Fund</td>
            <td style={{border: '1px solid black',width:'160px'}}>{total}</td>
           
          
 </tr>
 <tr>
            <td style={{border: '1px solid black', height:'20px', width:'200px'}}></td>
            <td style={{border: '1px solid black',width:'160px'}}></td>
          
 </tr>
 <tr>
            <td style={{border: '1px solid black', width:'200px'}}>TOTAL</td>
            <td style={{border: '1px solid black',width:'160px'}}>{total}</td>
          
 </tr>
</tbody>
</table>



<Text>B. Remittance/Deposits</Text>

<table style={{ width: "680px", fontSize:'12px' }}>
<tbody>
              
<tr>
            <td style={{border: '1px solid black', width:'200px'}}>Accountable Officer/Bank</td>
            <td style={{border: '1px solid black',width:'160px'}}>Reference</td>
            <td style={{border: '1px solid black',width:'160px'}}>Amount</td>
           
          
 </tr>
 <tr>
            <td style={{border: '1px solid black', height:'20px', width:'200px'}}></td>
            <td style={{border: '1px solid black',width:'160px'}}></td>
            <td style={{border: '1px solid black',width:'160px'}}></td>
          
 </tr>
</tbody>

</table>

<Text>C. Accountability for Accountables Forms</Text>


<table style={{ width: "670px", fontSize:'10px' }}>
<tbody>   
<tr>
            <td rowSpan='2' style={{border: '1px solid black', width:'20px'}}>Name of Forms and Number</td>
            <td rowSpan='2' style={{border: '1px solid black',width:'20px'}}>Qty.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>Beginning Balance </td>
            <td rowSpan='2' style={{border: '1px solid black',width:'20px'}}>Qty.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>RECEIPTS</td>
            <td rowSpan='2' style={{border: '1px solid black',width:'20px'}}>Qty.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>ISSUED</td>
            <td rowSpan='2' style={{border: '1px solid black',width:'20px'}}>Qty.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>ENDING Balance</td>
           
          
 </tr>
 <tr>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>Inclusive Serial No.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>Inclusive Serial No.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>Inclusive Serial No.</td>
            <td colSpan='2' style={{border: '1px solid black',width:'20px'}}>Inclusive Serial No.</td>
        
          
 </tr>
 <tr>
            <td style={{border: '1px solid black',width:'30px'}}></td>
            <td style={{border: '1px solid black',width:'1px'}}></td>
            <td style={{border: '1px solid black',width:'30px'}}>From</td>
            <td style={{border: '1px solid black',width:'30px'}}>To</td>
            <td style={{border: '1px solid black',width:'1px'}}></td>
            <td style={{border: '1px solid black',width:'30px'}}>From</td>
            <td style={{border: '1px solid black',width:'30px'}}>To</td>
            <td style={{border: '1px solid black',width:'1px'}}></td>
            <td style={{border: '1px solid black',width:'30px'}}>From</td>
            <td style={{border: '1px solid black',width:'30px'}}>To</td>
            <td style={{border: '1px solid black',width:'1px'}}></td>
            <td style={{border: '1px solid black',width:'30px'}}>From</td>
            <td style={{border: '1px solid black',width:'30px'}}>To</td>
          
 </tr>

 {datalist4.map((items,i) => {
   
   return (
    <>

    <tr key={i} style={{ width: "60px", fontSize:'10px' }}>
   <td style={{border: '1px solid black',width:'73px'}}>{items.formType}</td>


   <td style={{border: '1px solid black',width:'39px'}}>{items.qty1}</td>
   <td style={{border: '1px solid black',width:'54px'}}>{items.bgFrom}</td>
   <td style={{border: '1px solid black',width:'56px'}}>{items.bgTo}</td>

   <td style={{border: '1px solid black',width:'39px'}}>{items.qty2}</td>
   <td style={{border: '1px solid black',width:'54px'}}>{items.rcFrom}</td>
   <td style={{border: '1px solid black',width:'56px'}}>{items.rcTo}</td>

   
   
   <td style={{border: '1px solid black',width:'39px'}}>{items.qty3}</td>
   <td style={{border: '1px solid black',width:'54px'}}>{items.isFrom}</td>
   <td style={{border: '1px solid black',width:'56px'}}>{items.isTo}</td>
   
   <td style={{border: '1px solid black',width:'39px'}}>{items.qty4}</td>
   <td style={{border: '1px solid black',width:'54px'}}>{items.ebFrom}</td>
   <td style={{border: '1px solid black',width:'56px'}}>{items.ebTo}</td>
   
   
   
   </tr>
    

    </>
   )})}


 </tbody>
</table>


<table style={{ width: "670px", fontSize:'10px' }}>
    <tbody>
    <tr>
    <td colSpan='3' style={{border: '1px solid black',width:'39px'}}>Beginning Balance ______,2023</td>
    <td  style={{border: '1px solid black',width:'39px'}}>0</td>
    <td colSpan='3' style={{border: '1px solid black',width:'39px'}}>List of Checks</td>

    </tr>
    <tr>
        <td style={{border: '1px solid black',width:'39px'}}>Add</td>
        <td colSpan='2' style={{border: '1px solid black',width:'39px'}}>Collection</td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}>Check No.</td>
        <td style={{border: '1px solid black',width:'39px'}}>Payee</td>
        <td style={{border: '1px solid black',width:'39px'}}>Amount</td>

    </tr>
    <tr>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}>Cash</td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}>{total}</td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>

    </tr>
    <tr>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}>Checks:</td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>

    </tr>
    <tr>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}>Total</td>
        <td style={{border: '1px solid black',width:'39px'}}>{total}</td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>
        <td style={{border: '1px solid black',width:'39px'}}></td>

    </tr>

    <tr>
    <td colSpan='3' style={{border: '1px solid black',width:'39px'}}>Less: Remittance to Cashier/Treasurer/Depository Bank</td>
    <td  style={{border: '1px solid black',width:'39px'}}></td>
    <td colSpan='3' style={{border: '1px solid black',width:'39px'}}></td>

    </tr>

    
    <tr>
    <td colSpan='3' style={{border: '1px solid black',width:'39px'}}>Balance</td>
    <td  style={{border: '1px solid black',width:'39px'}}></td>
    <td colSpan='3' style={{border: '1px solid black',width:'39px'}}></td>

    </tr>



    <tr style={{ width: "670px", fontSize:'10px', textAlign: 'center' }}>
    <td colSpan='4' style={{border: '1px solid black',width:'39px'}}>C E R T I F I C A T I O N</td>
    <td colSpan='3' style={{border: '1px solid black',width:'39px'}}>VERIFICATION AND ACKNOWLEDGEMENT</td>

    </tr>
    
    <tr>
    <td colSpan='4' style={{border: '1px solid black',width:'39px'}}>I HEREBY CERTIFY the foregoing report of collections and</td>
    <td colSpan='3' style={{border: '1px solid black',width:'39px'}}>I HEREBY CERTIFY the foregoing report of collections</td>

    </tr>

    <tr>
    <td colSpan='4' style={{border: '1px solid black',width:'39px'}}>deposits, & accountability for accountable forms is true and correct</td>
    <td colSpan='3' style={{border: '1px solid black',width:'39px'}}>has been verified and acknowledge receipt of...</td>

    </tr>
    <tr>
    <td colSpan='4' style={{border: '1px solid black',width:'39px', height:'50px'}}></td>
    <td colSpan='3' style={{border: '1px solid black',width:'39px', fontSize:'14px'}}>{total.toFixed(2)}</td>

    </tr>

    <tr style={{ textAlign: 'center' }}>
    <td colSpan='2' style={{border: '1px solid black',width:'39px'}}>HAROLD KIM B. UDANI</td>
    <td colSpan='2'style={{border: '1px solid black',width:'39px'}}>FEB. 14, 2023</td>
    <td colSpan='2' style={{border: '1px solid black',width:'39px'}}>MARIA FE E. DALISAY</td>
    <td style={{border: '1px solid black',width:'39px'}}>FEB. 14, 2023</td>

    </tr>
    <tr style={{ textAlign: 'center' }}>
    <td colSpan='2' style={{border: '1px solid black',width:'39px'}}>Name & Signature</td>
    <td colSpan='2'style={{border: '1px solid black',width:'39px'}}>Date</td>
    <td colSpan='2'style={{border: '1px solid black',width:'39px'}}>Name & Signature</td>
    <td style={{border: '1px solid black',width:'39px'}}>FEB. 14, 2023</td>

    </tr>

    <tr style={{ width: "670px", fontSize:'10px', textAlign: 'center' }}>
    <td colSpan='2' style={{border: '1px solid black',width:'39px'}}>Accountable Officer</td>
    <td colSpan='2' style={{border: '1px solid black',width:'39px'}}></td>
    <td colSpan='2' style={{border: '1px solid black',width:'39px'}}>Cashier/Treasurer</td>
    <td style={{border: '1px solid black',width:'39px'}}></td>

    </tr>



    </tbody>
   
   </table>


</Box>
    )



 }


    return (
        

<Flex  direction={"column"} align={"center"} >
{console.log('datalist',datalist)}   


<Box width={'30%'} align={'left'}>
            <Select value={'reportCode'} onChange={handleSelectChange} >
            <option  value=''>Select</option>
            {datalist2.map((item,index) => (
                    <>
        
            <option key={index}  value={item.reportNum}>{item.reportNum}</option>
            

                    </>
          


            ))}
         
          
          </Select>
</Box>

<Box>
<ReactToPrint
        trigger={() => <Button>Print this out!</Button>}
        content={() => tableRef.current}
        pageStyle={{ size: "A4", orientation: "portrait" }}

      />

      {/* mao nih code sa pag hide sa imuha eh print dile na nimu makita ky ang display is none... */}
       {/* <div style={{ display: 'none' }}>
        <ComponentToPrint ref={tableRef} />
      </div> */}

        <ComponentToPrint ref={tableRef} />

</Box>

  
 

</Flex>
      

       
    );
};

export default CollectionDeposit;