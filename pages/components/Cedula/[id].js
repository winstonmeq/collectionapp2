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
        <table style={{ width: "500px", marginLeft: "35px" }}>
        {data.map((item,i) => {

        return (

            <tbody>
            <tr key={i}>
              <td>
                <br />
                <br />
              </td>
            </tr>
            <tr>
              <td style={{ width: "8.8994%", fontSize: "13px" }}>
                <Box align={"right"} >
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.year}                  
                    style={{ fontSize: "12px", width: "100%" }}
                  />
                </Box>
              </td>
              <td colspan="2" style={{ width: "10.9765%;", fontSize: "13px" }}>
                <Box align={"center"} >
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.place_issue}
                    style={{ fontSize: "12px", width: "100%" }}
                  />
                </Box>
              </td>
              <td style={{ width: " 16.8439%;", fontSize: "13px" }}>
                <Box align={"center"} >
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.date}
                    style={{ fontSize: "10px", width: "100%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "6.9693%;", fontSize: "13px" }}></td>
              <td style={{ width: "11.9587%;", fontSize: "13px" }}></td>
              <td style={{ width: "17.1854%;", fontSize: "13px" }}></td>
            </tr>
            <tr>
              <td colspan="4" style={{ width: "61.6898%;", fontSize: "13px" }}>
                <Box align={"right"} >
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
              <td colspan="5" style={{ width: " 68.6857%;", fontSize: "13px" }}>
                <Box align={"right"} >
                  <input
                    type="text"
                    value={item.full_add}
                    style={{ width: "80%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "1.9587%;", fontSize: "13px" }}>
                <Box align={"right"} >
                  <input type="text" value={item.male} style={{ width: "60%" }} />
                </Box>
              </td>
              <td style={{ width: "1.1854%;", fontSize: "13px" }}>
                <Box align={"right"} >
                  <input type="text" value={item.female} style={{ width: "80%" }} />
                </Box>
              </td>
            </tr>
            <tr>
              <td colspan="2" style={{ width: "24.0245%;", fontSize: "13px" }}>
                <Box align={"right"} >
                  <input
                    type="text"
                    value={item.nationality}
                    style={{ width: "80%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "19.8214%;", fontSize: "13px" }}>
                <Box align={"right"}>
                  <input type="text" style={{ width: "80%" }} />
                </Box>
              </td>
              <td colspan="3" style={{ width: "38.8315%;", fontSize: "12px" }}>
                <Box align={"right"} >
                  <input
                    type="text"
                    value={item.place_birth}
                    style={{ width: "70%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.height}
                    style={{ fontSize: "10px", width: "45%" }}
                  />
                </Box>
              </td>
            </tr>
            <tr>
              <td
                colspan="3"
                style={{
                  width: "68.6857%;",
                  fontSize: "8px",
                  fontWeight: "bolder",
                }}
              >
                <Flex justify={"center"} direction={"row"}>
                  <Box textAlign={"center"}>
                    <Box marginLeft={10}>
                      <Input
                        type="text"
                        size="xs"
                        variant="none"
                        value={item.single}
                        style={{ height: "40%" }}
                      />
                    </Box>

                    <Box marginLeft={10}>
                      <Input
                        type="text"
                        size="xs"
                        variant="none"
                        value={item.married}
                        style={{ height: "40%" }}
                      />
                    </Box>
                  </Box>

                  <Box textAlign={"center"}>
                    <Box marginLeft={10}>
                      <Input
                        type="text"
                        size="xs"
                        variant="none"
                        value={item.widow}
                        style={{ fontSize: "11px", height: "40%" }}
                      />
                    </Box>

                    <Box marginLeft={10}>
                      <Input
                        type="text"
                        size="xs"
                        variant="none"
                        value={item.divorced}
                        style={{ fontSize: "11px", height: "10%" }}
                      />
                    </Box>
                  </Box>
                </Flex>
              </td>
              <td colspan="3" style={{ width: "13.9587%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.date_birth}
                    style={{ fontSize: "11px", width: "55%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.weight}
                    style={{ fontSize: "10px", width: "45%" }}
                  />
                </Box>
              </td>
            </tr>
            <tr>
              <td colspan="5" style={{ width: "68.6857%;", fontSize: "13px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.profession}
                    style={{ width: "70%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "13.9587%;", fontSize: "13px" }}></td>
              <td style={{ width: "17.1854%;", fontSize: "13px" }}></td>
            </tr>
            <tr>
              <td colspan="5" style={{ width: "68.6857%;", fontSize: "13px" }}>
                .
              </td>
              <td style={{ width: "13.9587%;", fontSize: "13px" }}>.</td>
              <td style={{ width: "17.1854%;", fontSize: "13px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.amount1}
                    style={{ width: "70%" }}
                  />
                </Box>
              </td>
            </tr>
            <tr>
              <td
                colspan="5"
                style={{ width: " 68.6857%;", fontSize: "13px" }}
              ></td>
              <td style={{ width: " 13.9587%;", fontSize: "13px" }}>-</td>
              <td style={{ width: "17.1854%;", fontSize: "13px" }}></td>
            </tr>
            <tr>
              <td
                colspan="5"
                style={{ width: "68.6857%;", fontSize: "13px" }}
              ></td>
              <td style={{ width: "13.9587%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.amount2}
                    style={{ width: "90%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.amount2}
                    style={{ width: "80%" }}
                  />
                </Box>
              </td>
            </tr>
            <tr>
              <td
                colspan="5"
                style={{ width: " 68.6857%;", fontSize: "13px" }}
              ></td>
              <td style={{ width: "13.9587%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.amount3}
                    style={{ width: "90%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.amount3}
                    style={{ width: "80%" }}
                  />
                </Box>
              </td>
            </tr>
            <tr>
              <td
                colspan="5"
                style={{ width: "68.6857%;", fontSize: "13px" }}
              ></td>
              <td style={{ width: " 13.9587%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.amount4}
                    style={{ width: "90%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.amount4}
                    style={{ width: "80%" }}
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
                colspan="3"
                style={{ width: "42.6337%;", fontSize: "13px" }}
              ></td>
              <td style={{ width: "13.9587%;", fontSize: "13px" }}></td>
              <td style={{ width: "17.1854%;", fontSize: "13px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.interest}
                    style={{ width: "90%" }}
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
                colspan="3"
                style={{ width: "42.6337%;", fontSize: "13px" }}
              ></td>
              <td style={{ width: "13.9587%;", fontSize: "13px" }}></td>
              <td style={{ width: "17.1854%;", fontSize: "13px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="none"
                    value={item.total}
                    style={{ width: "90%" }}
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



        )

        })}
          
        </table>
      </Box>
   </Flex>
  );
};

export default Printcedula2;
