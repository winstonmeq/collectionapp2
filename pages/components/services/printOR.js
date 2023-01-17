import {
    Flex,
    Avatar,
    Box,
    Button,
    Text,
    Input,
    Spacer,
  } from "@chakra-ui/react";
  
  import { useRef } from "react";
  import ReactToPrint from "react-to-print";
  import { getCedulaNo } from "../../../axios/cedula_request";
  import { useState } from "react";
  import { useEffect } from "react";
  import { useRouter } from "next/router";


  const PrintOR = () => {



    const tableRef = useRef(null);


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
<tr>
    <td colspan="2"><Box textAlign={'center'} >12/12/2000</Box></td>
    <td><Box textAlign={'center'} ></Box></td>
</tr>
<tr>
    <td style={{ width: "200px" }}>.</td>
    <td style={{ width: "50px" }}></td>
    <td style={{ width: "150px" }}></td>
</tr>
<tr>
    <td colspan="2"><Box textAlign={'center'} >MTO</Box></td>
    <td><Box textAlign={'center'} ></Box></td>
</tr>
<tr style={{ height: "16px" }}>
    <td style={{ width: "200px" }}></td>
    <td style={{ width: "50px" }}></td>
    <td style={{ width: "150px" }}></td>
</tr>
<tr>
    <td colspan="2"><Box textAlign={'center'} >MEQUILA WINSTON</Box></td>
    <td><Box textAlign={'center'} ></Box></td>
</tr>
<tr style={{ height: "40px" }}>
    <td style={{ width: "200px" }}></td>
    <td style={{ width: "50px" }}></td>
    <td style={{ width: "150px" }}></td>
</tr>
<tr>
    <td colspan="2"><Box textAlign={'center'} >Business Tax</Box></td>
    <td><Box textAlign={'center'} >120.00</Box></td>
</tr>

<tr>
    <td colspan="2"><Box textAlign={'center'} >Mayors Fee</Box></td>
    <td><Box textAlign={'center'} >150.00</Box></td>
</tr>
<tr>
    <td colspan="2"><Box textAlign={'center'} >Garbage Fee</Box></td>
    <td><Box textAlign={'center'} >100.00</Box></td>
</tr>
<tr>
    <td colspan="2"><Box textAlign={'center'} >Location Fee</Box></td>
    <td><Box textAlign={'center'} >30.00</Box></td>
</tr>
<tr>
    <td colspan="2"><Box textAlign={'center'} >4th Qtr. Fee</Box></td>
    <td><Box textAlign={'center'} >1020.00</Box></td>
</tr>
<tr>
    <td colspan="2"><Box textAlign={'center'} >Sanitary Fee</Box></td>
    <td><Box textAlign={'center'} >1300.00</Box></td>
</tr>
<tr>
    <td colspan="2"><Box textAlign={'center'} >Building Permit Fee</Box></td>
    <td><Box textAlign={'center'} >120.00</Box></td>
</tr>
<tr>
    <td colspan="2"><Box textAlign={'center'} >Gravel Fee</Box></td>
    <td><Box textAlign={'center'} >300.00</Box></td>
</tr>

<tr>
    <td colspan="2"><Box textAlign={'center'} ></Box></td>
    <td><Box textAlign={'center'} >5700.00</Box></td>
</tr>

<tr>
    <td colspan="3"><Box textAlign={'center'} >Five Thousand Three hundred fourty one</Box></td>
</tr>
<tr>
    <td ><Box textAlign={'left'} >/</Box></td>
    <td><Box textAlign={'center'} ></Box></td>
    <td><Box textAlign={'center'} ></Box></td>

</tr>


</table>


</Box>



    </Flex>
 )


  }

  export default PrintOR;