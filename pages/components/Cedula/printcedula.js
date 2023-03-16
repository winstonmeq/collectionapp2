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
        documentTitle='Cedula'
        onAfterPrint={'Print Success'}
        pageStyle="@page { size: portrait; }"
      />

      <Box ref={tableRef} align={"left"} fontFamily={'Google Sans'}>
        <table style={{ width: "500px", marginLeft: "35px",}}>
        {data.map((item,i) => {

        return (
            <>
            <tbody>
            <tr key={i}>
              <td>
                <br />
                <br />
              </td>
            </tr>
            <tr>
              <td style={{ width: "4.8994%"}}>
                <Box>
                  <input
                    type="text"                 
                    value={item.year}                  
                    style={{ fontSize: "13px", width: "100%" }}
                  />
                </Box>
              </td>
              <td colspan='3' style={{ width: "10.9765%;"}}>
                <Box border={'1px'}>
                  <input
                    type="text"
                    value={item.place_issue}
                    style={{ fontSize: "13px", width: "100%", textAlign:'left' }}
                  />
                </Box>
              </td>
              <td style={{ width: " 16.8439%;"}}>
                <Box>
                  <input
                    type="text"
                    value={item.date}
                    style={{ fontSize: "13px", width: "100%", textAlign:'right' }}
                  />
                </Box>
              </td>
              <td style={{ width: "6.9693%;", fontSize: "13px" }}></td>
          
            </tr>
            <tr>
              <td colspan="3" style={{ width: "61.6898%;", fontSize: "13px" }}>
                <Box>
                  <input
                    type="text"
                    value={item.full_name}
                    style={{ width: "80%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "6.9693%;", fontSize: "13px" }}></td>
              <td style={{ width: "13.9587%;", fontSize: "13px" }}></td>
              <td style={{ width: "17.1854%;", fontSize: "13px" }}></td>
            </tr>
            <tr>
              <td colspan="4" style={{ width: " 68.6857%;", fontSize: "13px" }}>
                <Box >
                  <input
                    type="text"
                    value={item.full_add}
                    style={{ width: "80%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "10.9587%;", fontSize: "13px" }}>
                <Box align={"right"} >
                  <input type="text"                 
                  value={item.male} style={{ width: "60%" }} />
                </Box>
              </td>
              <td style={{ width: "1.1854%;", fontSize: "13px" }}>
                <Box align={"right"} >
                  <input type="text" 
                  value={item.female} 
                  style={{ width: "80%" }} />
                </Box>
              </td>
            </tr>

            <tr>
              <td colspan="2" style={{ width: "2.0245%;"}}>
                <Box align={"right"} >
                  <input
                    type="text"
                    value={item.nationality}
                    style={{ fontSize: "12px", width: "80%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "1.8214%;" }}> </td>
              <td colspan="2" style={{ width: "38.8315%;"}}>
                <Box align={"center"} >
                  <input
                    type="text"
                    value={item.place_birth}
                    style={{ fontSize: "12px", width: "100%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;"}}>
                <Box align={"right"}>
                  <input
                    type="text"
                    value={item.height}
                    style={{ fontSize: "13px", width: "45%" }}
                  />
                </Box>
              </td>
            </tr>


            <tr>
              <td colspan="3"  style={{width: "68.6857%;"}}>
                <Flex justify={"center"} direction={"row"} >
                <Box textAlign={"center"} border={'1px'}>
                    <Flex border={'1px'} >
                      <input
                        type="text"
                        value={item.single}
                        style={{ fontSize: "10px", width: "10%" }}
                      />
                    </Flex>

                    <Flex  border={'1px'} >
                      <input
                        type="text"
                        value={item.married}
                        style={{  fontSize: "10px", width: "10%" }}
                      />
                    </Flex>
                  </Box>

                  <Box textAlign={"center"}>
                    <Flex  >
                      <input
                        type="text"
                        value={item.widow }
                        style={{ fontSize: "10px", textAlign:'center'}}
                      />
                    </Flex>

                    <Flex >
                      <input
                        type="text"
                        value={item.divorced}
                        style={{ fontSize: "10px", textAlign:'center'}}
                      />
                    </Flex>
                  </Box>
                </Flex>
              </td>
              <td colspan="2" style={{ width: "13.9587%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <input
                    type="text"
                    value={item.date_birth}
                    style={{ fontSize: "12px", width: "55%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <input
                    type="text"
                    value={item.weight}
                    style={{ fontSize: "12px", width: "45%" }}
                  />
                </Box>
              </td>
            </tr>


            <tr>
              <td colspan="4" style={{ width: "68.6857%;", fontSize: "13px" }}>
                <Box align={"right"}>
                  <input
                    type="text"
                    value={item.profession}
                    style={{ width: "70%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "13.9587%;", fontSize: "13px" }}></td>
              <td style={{ width: "17.1854%;", fontSize: "13px" }}></td>
            </tr>
            <tr>
              <td colspan="4" style={{ width: "68.6857%;", fontSize: "13px" }}>
                
              </td>
              <td style={{ width: "13.9587%;", fontSize: "13px" }}></td>
              <td style={{ width: "17.1854%;", fontSize: "13px" }}>
                <Box>
                  <input
                    type="text"
                    value={item.amount1}
                    style={{ width: "100%",textAlign:'right' }}
                  />
                </Box>
              </td>
            </tr>
            <tr>
              <td
                colspan="4"
                style={{ width: " 68.6857%;", fontSize: "13px" }}
              ></td>
              <td style={{ width: " 13.9587%;", fontSize: "13px" }}>-</td>
              <td style={{ width: "17.1854%;", fontSize: "13px" }}></td>
            </tr>
            <tr>
              <td
                colspan="4"
                style={{ width: "68.6857%;", fontSize: "13px" }}
              ></td>
              <td style={{ width: "13.9587%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <input
                    type="text"
                    value={item.amount2}
                    style={{ width: "90%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box>
                  <input
                    type="text"
                    value={item.amount2R}
                    style={{ width: "100%",textAlign:'right' }}
                  />
                </Box>
              </td>
            </tr>
            <tr>
              <td
                colspan="4"
                style={{ width: " 68.6857%;", fontSize: "13px" }}
              ></td>
              <td style={{ width: "13.9587%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <input
                    type="text"
                    value={item.amount3}
                    style={{ width: "90%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box>
                  <input
                    type="text"
                    value={item.amount3R}
                    style={{ width: "100%",textAlign:'right' }}
                  />
                </Box>
              </td>
            </tr>
            <tr>
              <td
                colspan="4"
                style={{ width: "68.6857%;", fontSize: "13px" }}
              ></td>
              <td style={{ width: " 13.9587%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <input
                    type="text"
                    value={item.amount4}
                    style={{ width: "90%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box >
                  <input
                    type="text"
                    value={item.amount4R}
                    style={{ width: "100%",textAlign:'right' }}
                  />
                </Box>
              </td>
            </tr>
            <tr>
              <td
                colspan="2"
                style={{ width: "26.0245%;", fontSize: "13px" }}
              ></td>
              <td
                colspan="2"
                style={{ width: "42.6337%;", fontSize: "13px" }}
              ></td>
              <td style={{ width: "13.9587%;", fontSize: "13px" }}></td>
              <td style={{ width: "17.1854%;", fontSize: "13px" }}>
                <Box>
                  <input
                    type="text"
                    value={item.interest}
                    style={{ width: "100%",textAlign:'right' }}
                  />
                </Box>
              </td>
            </tr>
            <tr>
              <td
                colspan="2"
                style={{ width: "26.0245%;", fontSize: "13px" }}
              ></td>
              <td
                colspan="2"
                style={{ width: "42.6337%;", fontSize: "13px" }}
              ></td>
              <td style={{ width: "13.9587%;", fontSize: "13px" }}></td>
              <td style={{ width: "17.1854%;", fontSize: "13px" }}>
                <Box>
                  <input
                    type="text"
                    value={item.total}
                    style={{ width: "100%",textAlign:'right' }}
                  />
                </Box>
              </td>
            </tr>
          
            <tr>
              <td
                colspan="2"
                style={{ width: "10.6337%;", fontSize: "13px" }}
              ></td>
              <td colspan="3" style={{ width: "13.9587%;", fontSize: "13px" }}>
                <Box align={"center"}>MARIA FE. DALISAY</Box>
              </td>
              <td colspan="2" style={{ width: "31.1771%;", fontSize: "13px" }}>
                <input
                  type="text"
                  value={item.num_word}
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
          </tbody>

              </>

        )

        })}
          
        </table>
      </Box>
   </Flex>
  );
};

export default Printcedula2;
