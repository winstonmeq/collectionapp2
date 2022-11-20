
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
    
<table  ref={tableRef} style={{ margin:'10px'}} >
   
   <tbody>
       <tr>
       <td style={{width: "6.8994%;"}}>2022</td>
       <td colspan="2" style={{width: "10.9765%;"}}>Poblacion, President Roxas</td>
       <td style={{width: " 16.8439%;"}}>2022-11-18</td>
       <td style={{width: "6.9693%;"}}></td>
       <td style={{width: "13.9587%;"}}></td>
       <td style={{width: "17.1854%;"}}></td>
       </tr>
       <tr>
           <td colspan="4" style={{width: "61.6898%;"}}>MEQUILA &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WINSTON &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; DIAZ</td>
           <td style={{width: "6.9693%;"}}></td>
           <td style={{width: "13.9587%;"}}></td>
           <td style={{width: "17.1854%;"}}></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: " 68.6857%;"}}>DEL CARMEN, PRESIDENT ROXAS, COTABATO &nbsp;</td>
           <td style={{width: "13.9587%;"}}>&nbsp; &nbsp; /</td>
           <td style={{width: "17.1854%;"}}></td>
       </tr>
       <tr>
           <td colspan="2" style={{width: "26.0245%;"}}>Filipino</td>
           <td style={{width: "21.8214%;"}}>&nbsp; &nbsp; &nbsp; &nbsp;No.</td>
           <td colspan="3" style={{width: "34.8315%;"}}>&nbsp; &nbsp;Del Carmen, President Roxas</td>
           <td style={{width: "17.1854%;"}}>1.6 M</td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;"}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
           <td style={{width: "13.9587%;"}}>12-05-1979</td>
           <td style={{width: "17.1854%;"}}>79 kls</td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;"}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Teacher 1</td>
           <td style={{width: "13.9587%;"}}></td>
           <td style={{width: "17.1854%;"}}></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;"}}></td>
           <td style={{width: "13.9587%;"}}></td>
           <td style={{width: "17.1854%;"}}>100.00</td>
       </tr>
       <tr>
           <td colspan="5" style={{width: " 68.6857%;"}}></td>
           <td style={{width: " 13.9587%;"}}></td>
           <td style={{width: "17.1854%;"}}></td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;"}}></td>
           <td style={{width: "13.9587%;"}}></td>
           <td style={{width: "17.1854%;"}}>50.00</td>
       </tr>
       <tr>
           <td colspan="5" style={{width: " 68.6857%;"}}></td>
           <td style={{width: "13.9587%;"}}></td>
           <td style={{width: "17.1854%;"}}>20.00</td>
       </tr>
       <tr>
           <td colspan="5" style={{width: "68.6857%;"}}></td>
           <td style={{width: " 13.9587%;"}}></td>
           <td style={{width: "17.1854%;"}}>10.00</td>
       </tr>
       <tr>
           <td colspan="2" rowspan="4" style={{width: "26.0245%;"}}></td>
           <td colspan="3" rowspan="2" style={{width: "42.6337%;"}}></td>
           <td style={{width: "13.9587%;"}}></td>
           <td style={{width: "17.1854%;"}}>180.00</td>
       </tr>
       <tr>
           <td style={{width: "13.9587%;"}}></td>
           <td style={{width: "17.1854%;"}}>15.00</td>
       </tr>
       <tr>
           <td colspan="3" rowspan="2" style={{width: "42.6337%;"}}></td>
           <td style={{width: "13.9587%;"}}></td>
           <td style={{width: "7.1854%;"}}>195.00</td>
       </tr>
       <tr>
           <td colspan="2" style={{width: "31.1771%;"}}>One hundred ninety five pesos</td>
       </tr>
   </tbody>
  
</table>
</Box>


    </Flex>
)



}

export default Cedula;