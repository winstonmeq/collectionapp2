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

const Printcedula2 = () => {
  const [data, setdata] = useState([]);
  const [userId, setuserId] = useState("635684a1d9f90d0fed02ca51");

  const router = useRouter();

  const { id } = router.query;

  console.log("mao nih id", id);

  useEffect(() => {
    const getListCedula = async (id) => {
      const cedulaId = await getCedulaNo(id);

      if (!cedulaId.hasError == true) {
        console.log(cedulaId.body);

        setdata(cedulaId.body);
      } else {
        console.log("wala data");
      }
    };

    if (router.isReady) {
      getListCedula(id);
    }
  }, [id]);

  const tableRef = useRef(null);

  return (
    <Flex direction={"column"} align={"center"} width={"100vw"}>
      <ReactToPrint
        trigger={() => <Button>Print this out!</Button>}
        content={() => tableRef.current}
      />

      <Box ref={tableRef} align={"left"}>
        <table style={{ width: "500px", marginLeft: "35px", fontSize:'12px' }}>
          {data.map((item, i) => {
            return (
              <tbody>
                <tr key={i}>
                  <td>
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "30px" }}><Box textAlign={'right'} >{item.year}</Box></td>
                  <td colspan="1" style={{ width: "90px" }}>
                  <Box textAlign={'center'} >{item.place_issue}</Box>
                  </td>
                  <td style={{ width: "10px" }}></td>
                  <td style={{ width: "50px" }}><Box textAlign={'left'} >{item.date}</Box></td>
                  <td style={{ width: "50px" }}></td>
                  <td style={{ width: "50px" }}></td>
                </tr>

                
                <tr>                  
                  <td colspan="4" style={{ width: "240px" }}><Box marginLeft={'60px'}>{item.full_name}</Box></td>
                  <td style={{ width: "60px" }}></td>
                  <td style={{ width: "60px" }}></td>
                </tr>
                <tr>                  
                  <td colspan="3" style={{ width: "240px" }}><Box marginLeft={'60px'}>{item.full_add}</Box></td>
                  <td></td>
                  <td style={{ width: "60px" }}><Box  textAlign={'center'}>{item.male}</Box></td>
                  <td style={{ width: "60px" }}><Box  textAlign={'center'}>{item.female}</Box></td>
                 
                </tr>
                <tr>                  
                  <td colspan="2" style={{ width: "120px" }}><Box textAlign={'left'} marginLeft={'50px'}>{item.nationality}</Box></td>
                  <td colspan="3" style={{ width: "180px" }}><Box textAlign={'right'}>{item.place_birth}</Box></td>
                  <td style={{ width: "60px" }}><Box textAlign={'right'}>{item.height}</Box></td>
                </tr>
                <tr>   
                  <td></td>             
                  <td colspan="2" style={{ width: "180px", fontSize:"8px"}}>
                  <Flex direction='row'><Box marginLeft={'30px'}>{item.single}</Box>
                                        <Box marginLeft={'70px'}>{item.widow} </Box></Flex>
                  <Flex direction='row'><Box marginLeft={'30px'}>{item.married}</Box>
                                        <Box marginLeft={'70px'}>{item.divorced} </Box></Flex>
                  </td>
                  <td colspan="2" style={{ width: "120px" }}><Box textAlign={'right'}>{item.date_birth}</Box></td>
                  <td style={{ width: "60px" }}><Box  textAlign={'right'}>{item.weight}</Box></td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan='3'>{item.profession}</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Box textAlign={'right'}>{item.amount1}</Box></td>
                </tr>
                <tr style={{ fontSize:"15px"}}>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>.</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Box textAlign={'center'}>{item.amount2}</Box></td>
                  <td><Box textAlign={'right'}>{item.amount2R}</Box></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Box textAlign={'center'}>{item.amount3}</Box></td>
                  <td><Box textAlign={'right'}>{item.amount3R}</Box></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Box  textAlign={'center'}>{item.amount4}</Box></td>
                  <td><Box  textAlign={'right'}>{item.amount4R}</Box></td>
                </tr>
                <tr style={{ fontSize:"5px"}}>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>.</td>
                </tr>
                <tr >
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Box  textAlign={'right'}>{item.total}</Box></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Box  textAlign={'right'}>{item.interest}</Box></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Box  textAlign={'right'}>{item.total_paid}</Box></td>
                </tr>
                <tr>
                  <td></td>                 
                  <td colspan="2"><Box textAlign={'right'}>MARIA FE. E. DALISAY</Box></td>
                  <td></td>
                  <td colspan="2"><Box textAlign={'right'}>{item.num_word}</Box></td>
                </tr>
          
              </tbody>
            );
          })}
        </table>
      </Box>
    </Flex>
  );
};

export default Printcedula2;
