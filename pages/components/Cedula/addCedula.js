
import { Flex, Avatar, Box, Button, Text, Spacer } from '@chakra-ui/react';
import Link from 'next/link';

import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Print_cedula from './printcedula';
import { useState } from 'react';


const Cedula = () => {

    const [modalopen, setmodalopen] = useState(false);




    const openmodal = () => {
        setmodalopen(true);      

    }




    const tableRef = useRef(null);

return (
    <Flex direction={'column'} align={'center'} width={"100vw"}>

<Box>
<ReactToPrint 
       trigger={() => 
        <Button >Print this out!</Button>}
        content={() => tableRef.current}
        />
</Box>

<Box bg={'red'}>
    
<table  ref={tableRef} style={{ width:'500px', marginLeft:'40px'}} >
   
   <tbody>
   <tr>
        <td><br/><br/></td>
       
    </tr>
       <tr>
       <td style={{width: "8.8994%" , fontSize:"13px"}}><input type="text" value={'2022'} placeholder='Year' style={{width: "100%"}} /></td>
       <td colspan="2" style={{width: "10.9765%;" , fontSize:"13px"}}><input type="text" value={'Poblacion, Pres. Roxas, Cot.'}  style={{width: "100%"}} /></td>
       <td style={{width: " 16.8439%;" , fontSize:"13px"}}><input type="text" value={'2022-11-12'}  placeholder='Date' style={{width: "100%"}} /></td>
       <td style={{width: "6.9693%;" , fontSize:"13px"}}></td>
       <td style={{width: "11.9587%;" , fontSize:"13px"}}></td>
       <td style={{width: "17.1854%;" , fontSize:"13px"}}></td>
       </tr>
       <tr>
           <td colspan="4" style={{width: "61.6898%;" , fontSize:"13px"}}><input type="text" placeholder='Full name' style={{width: "100%"}} /></td>
           <td style={{width: "6.9693%;" , fontSize:"13px"}}></td>
           <td style={{width: "13.9587%;" , fontSize:"13px"}}></td>
           <td style={{width: "17.1854%;" , fontSize:"13px"}}></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: " 68.6857%;" , fontSize:"13px"}}><input type="text" placeholder='Full Address' style={{width: "100%"}} /></td>
           <td style={{width: "1.9587%;" , fontSize:"13px"}}><input type="text"  value='/' style={{width: "10%"}} /></td>
           <td style={{width: "1.1854%;" , fontSize:"13px"}}><input type="text" placeholder='//' style={{width: "20%"}} /></td>
       </tr>
       <tr>
           <td colspan="2" style={{width: "24.0245%;" , fontSize:"13px"}}><input type="text" placeholder='Nationality' style={{width: "100%"}} /></td>
           <td style={{width: "19.8214%;" , fontSize:"13px"}}>&nbsp; &nbsp; &nbsp; &nbsp;No.</td>
           <td colspan="3" style={{width: "38.8315%;" , fontSize:"13px"}}><input type="text" placeholder='Place of birth' style={{width: "100%"}} /></td>
           <td style={{width: "17.1854%;" , fontSize:"13px"}}><Box align={'right'}><input type="text" placeholder='Height' style={{width: "50%"}} /></Box></td>
       </tr>
       <tr>
           <td colspan="3" style={{width: "68.6857%;" , fontSize:"13px"}}><input type="text" placeholder='Status' style={{width: "100%"}} /></td>
           <td colspan="3" style={{width: "13.9587%;" , fontSize:"13px"}}><Box align={'right'}><input type="text" placeholder='Birth Date' style={{width: "80%"}} /></Box></td>
           <td style={{width: "17.1854%;" , fontSize:"13px"}}><Box align={'right'}><input type="text" placeholder='Weight' style={{width: "50%"}} /></Box></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;" , fontSize:"13px"}}><input type="text" placeholder='Profession' style={{width: "100%"}} /></td>
           <td style={{width: "13.9587%;" , fontSize:"13px"}}></td>
           <td style={{width: "17.1854%;" , fontSize:"13px"}}></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;" , fontSize:"13px"}}>.</td>
           <td style={{width: "13.9587%;" , fontSize:"13px"}}>.</td>
           <td style={{width: "17.1854%;" , fontSize:"13px"}}><Box align={'right'}><input type="text" placeholder='Amount 1' style={{width: "70%"}} /></Box></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: " 68.6857%;" , fontSize:"13px"}}></td>
           <td style={{width: " 13.9587%;" , fontSize:"13px"}}>-</td>
           <td style={{width: "17.1854%;" , fontSize:"13px"}}><Box align={'right'}><input type="text" placeholder='Amount 2' style={{width: "70%"}} /></Box></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;" , fontSize:"13px"}}></td>
           <td style={{width: "13.9587%;" , fontSize:"13px"}}>-</td>
           <td style={{width: "17.1854%;" , fontSize:"13px"}}><Box align={'right'}><input type="text" placeholder='Amount 3' style={{width: "70%"}} /></Box></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: " 68.6857%;" , fontSize:"13px"}}></td>
           <td style={{width: "13.9587%;" , fontSize:"13px"}}>-</td>
           <td style={{width: "17.1854%;", fontSize:"13px" }}><Box align={'right'}><input type="text" placeholder='Amount 4' style={{width: "70%"}} /></Box></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;" , fontSize:"13px"}}></td>
           <td style={{width: " 13.9587%;" , fontSize:"13px"}}>-</td>
           <td style={{width: "17.1854%;", fontSize:"13px"}}><Box align={'right'}><input type="text" placeholder='Amount 5' style={{width: "70%"}} /></Box></td>
       </tr>
       <tr>
           <td colspan="2" rowspan="4" style={{width: "26.0245%;" , fontSize:"13px"}}>-</td>
           <td colspan="3" rowspan="2" style={{width: "42.6337%;" , fontSize:"13px"}}>-</td>
           <td style={{width: "13.9587%;", fontSize:"13px" }}>-</td>
           <td style={{width: "17.1854%;", fontSize:"13px"}}><Box align={'right'}><input type="text" placeholder='Total' style={{width: "70%"}} /></Box></td>
       </tr>
       <tr>
           <td style={{width: "13.9587%;" , fontSize:"13px"}}>.</td>
           <td style={{width: "17.1854%;" , fontSize:"13px"}}><Box align={'right'}><input type="text" placeholder='Interest' style={{width: "70%"}} /></Box></td>
       </tr>
       <tr>
           <td colspan="3" rowspan="2" style={{width: "42.6337%;" , fontSize:"13px"}}></td>
           <td style={{width: "13.9587%;" , fontSize:"13px"}}></td>
           <td style={{width: "7.1854%;" , fontSize:"13px"}}><Box align={'right'}><input type="text" placeholder='Total Amount' style={{width: "70%"}} /></Box></td>
       </tr>
       <tr>
           <td colspan="2" rowspan={"2"} style={{width: "31.1771%;" , fontSize:"13px"}}><input type="text" placeholder='In Words' style={{width: "100%"}} /></td>
           <td></td>
       </tr>
   </tbody>
  
</table>
</Box>


    </Flex>
)



}

export default Cedula;