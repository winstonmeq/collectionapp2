
import { Flex, Avatar, Box, Button, Spacer } from '@chakra-ui/react';
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
    
<table  ref={tableRef} style={{ width:'500px', margin:'10px'}} >
   
   <tbody>
       <tr>
       <td style={{width: "8.8994%;"}}><input type="text" value={'2022'} placeholder='Year' style={{width: "100%"}} /></td>
       <td colspan="2" style={{width: "10.9765%;"}}><input type="text" value={'Poblacion, Pres. Roxas, Cot.'}  style={{width: "100%"}} /></td>
       <td style={{width: " 16.8439%;"}}><input type="text" value={'2022-11-12'}  placeholder='Date' style={{width: "100%"}} /></td>
       <td style={{width: "6.9693%;"}}>.</td>
       <td style={{width: "11.9587%;"}}>.</td>
       <td style={{width: "17.1854%;"}}>.</td>
       </tr>
       <tr>
           <td colspan="4" style={{width: "61.6898%;"}}><br/><input type="text" placeholder='Full name' style={{width: "100%"}} /></td>
           <td style={{width: "6.9693%;"}}>.</td>
           <td style={{width: "13.9587%;"}}>.</td>
           <td style={{width: "17.1854%;"}}>.</td>
       </tr>
       <tr>
           <td colspan="5" style={{width: " 68.6857%;"}}><input type="text" placeholder='Full Address' style={{width: "100%"}} /></td>
           <td style={{width: "13.9587%;"}}>&nbsp; &nbsp; /</td>
           <td style={{width: "17.1854%;"}}></td>
       </tr>
       <tr>
           <td colspan="2" style={{width: "24.0245%;"}}><input type="text" placeholder='Nationality' style={{width: "100%"}} /></td>
           <td style={{width: "19.8214%;"}}>&nbsp; &nbsp; &nbsp; &nbsp;No.</td>
           <td colspan="3" style={{width: "38.8315%;"}}><input type="text" placeholder='Place of birth' style={{width: "100%"}} /></td>
           <td style={{width: "17.1854%;"}}><input type="text" placeholder='Height' style={{width: "100%"}} /></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;"}}><input type="text" placeholder='Status' style={{width: "100%"}} /></td>
           <td style={{width: "13.9587%;"}}><input type="text" placeholder='Birth Date' style={{width: "100%"}} /></td>
           <td style={{width: "17.1854%;"}}><input type="text" placeholder='Weight' style={{width: "100%"}} /></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;"}}><input type="text" placeholder='Profession' style={{width: "100%"}} /></td>
           <td style={{width: "13.9587%;"}}></td>
           <td style={{width: "17.1854%;"}}></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;"}}>.</td>
           <td style={{width: "13.9587%;"}}>.</td>
           <td style={{width: "17.1854%;"}}><input type="text" placeholder='Amount 1' style={{width: "100%"}} /></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: " 68.6857%;"}}></td>
           <td style={{width: " 13.9587%;"}}>-</td>
           <td style={{width: "17.1854%;"}}><input type="text" placeholder='Amount 2' style={{width: "100%"}} /></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;"}}></td>
           <td style={{width: "13.9587%;"}}>-</td>
           <td style={{width: "17.1854%;"}}><input type="text" placeholder='Amount 3' style={{width: "100%"}} /></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: " 68.6857%;"}}></td>
           <td style={{width: "13.9587%;"}}>-</td>
           <td style={{width: "17.1854%;", fontSize:"15px" }}>.<input type="text" placeholder='Amount 4' style={{width: "100%"}} /></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;"}}></td>
           <td style={{width: " 13.9587%;"}}>-</td>
           <td style={{width: "17.1854%;", fontSize:"15px"}}>.<input type="text" placeholder='Amount 5' style={{width: "100%"}} /></td>
       </tr>
       <tr>
           <td colspan="2" rowspan="4" style={{width: "26.0245%;"}}>-</td>
           <td colspan="3" rowspan="2" style={{width: "42.6337%;"}}>-</td>
           <td style={{width: "13.9587%;"}}>-</td>
           <td style={{width: "17.1854%;", fontSize:"14px"}}><input type="text" placeholder='Total' style={{width: "100%"}} /></td>
       </tr>
       <tr>
           <td style={{width: "13.9587%;"}}>.</td>
           <td style={{width: "17.1854%;"}}><input type="text" placeholder='Interest' style={{width: "100%"}} /></td>
       </tr>
       <tr>
           <td colspan="3" rowspan="2" style={{width: "42.6337%;"}}></td>
           <td style={{width: "13.9587%;"}}></td>
           <td style={{width: "7.1854%;"}}><input type="text" placeholder='Total Amount' style={{width: "100%"}} /></td>
       </tr>
       <tr>
           <td colspan="2" style={{width: "31.1771%;"}}><input type="text" placeholder='In Words' style={{width: "100%"}} /></td>
       </tr>
   </tbody>
  
</table>
</Box>


    </Flex>
)



}

export default Cedula;