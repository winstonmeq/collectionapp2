
import { Flex, Avatar, Box, Button, Text,Input, Spacer } from '@chakra-ui/react';

import { useRef } from 'react';
import ReactToPrint from 'react-to-print';


const Printcedula = ({year, date, add, fullname,fulladd, nationality, female, male, height, weight,amount1,amount2,amount3,amount4,total,grandtol}) => {


    
const tableRef = useRef(null);


return (
<div>

<ReactToPrint 
       trigger={() => 
        <Button>Print this out!</Button>}
        content={() => tableRef.current}
        
        />

<Box ref={tableRef} align={"left"}>
        <table style={{ width: "500px", marginLeft: "35px" }}>
          <tbody>
            <tr>
              <td>
                <br />
                <br />
              </td>
            </tr>
            <tr>
              <td style={{ width: "8.8994%", fontSize: "13px" }}>
                <Box align={"right"} border={"1px"}>
                  <input
                    type="text"
                    readOnly="true"
                    placeholder="23"
                    onChange={(e) => {
                      setyear(e.target.value);
                    }}
                    style={{ width: "55%" }}
                  />
                </Box>
              </td>
              <td colspan="2" style={{ width: "10.9765%;", fontSize: "13px" }}>
                <Box align={"center"} border={"1px"}>
                  <input
                    type="text"
                    placeholder="LGU-Pres. Roxas, Cot."
                    onChange={(e) => {
                      setadd(e.target.value);
                    }}
                    style={{ width: "100%" }}
                  />
                </Box>
              </td>
              <td style={{ width: " 16.8439%;", fontSize: "13px" }}>
                <Box align={"center"} border={"1px"}>
                  <input
                    type="text"
                    placeholder="2023/12/2"
                    onChange={(e) => {
                      setdate(e.target.value);
                    }}
                    style={{ width: "80%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "6.9693%;", fontSize: "13px" }}></td>
              <td style={{ width: "11.9587%;", fontSize: "13px" }}></td>
              <td style={{ width: "17.1854%;", fontSize: "13px" }}></td>
            </tr>
            <tr>
              <td colspan="4" style={{ width: "61.6898%;", fontSize: "13px" }}>
                <Box align={"right"} border={"1px"}>
                  <input
                    type="text"
                    placeholder="Full Name"
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
                <Box align={"right"} border={"1px"}>
                  <input
                    type="text"
                    placeholder="Full address"
                    style={{ width: "80%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "1.9587%;", fontSize: "13px" }}>
                <Box align={"right"} border={"1px"}>
                  <input type="text" style={{ width: "60%" }} />
                </Box>
              </td>
              <td style={{ width: "1.1854%;", fontSize: "13px" }}>
                <Box align={"right"} border={"1px"}>
                  <input type="text"  placeholder="female" style={{ width: "80%" }} />
                </Box>
              </td>
            </tr>
            <tr>
              <td colspan="2" style={{ width: "24.0245%;", fontSize: "13px" }}>
                <Box align={"right"} border={"1px"}>
                  <input
                    type="text"
                    placeholder="Nationality"
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
                <Box align={"right"} border={"1px"}>
                  <input
                    type="text"
                    placeholder="Place of Birth"
                    style={{ width: "70%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="outline"
                    placeholder="Height"
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
                        variant="outline"
                        placeholder="Single"
                        style={{ height: "40%" }}
                      />
                    </Box>

                    <Box marginLeft={10}>
                      <Input
                        type="text"
                        size="xs"
                        variant="outline"
                        placeholder="Married"
                        style={{ height: "40%" }}
                      />
                    </Box>
                  </Box>

                  <Box textAlign={"center"}>
                    <Box marginLeft={10}>
                      <Input
                        type="text"
                        size="xs"
                        variant="filled"
                        placeholder="Widow"
                        style={{ fontSize: "11px", height: "40%" }}
                      />
                    </Box>

                    <Box marginLeft={10}>
                      <Input
                        type="text"
                        size="xs"
                        variant="outline"
                        placeholder="Divorced"
                        style={{ fontSize: "11px", height: "10%" }}
                      />
                    </Box>
                  </Box>
                </Flex>
              </td>
              <td colspan="3" style={{ width: "13.9587%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="date"
                    size="xs"
                    variant="outline"
                    placeholder="Birth Date"
                    style={{ fontSize: "11px", width: "55%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="outline"
                    placeholder="Weight"
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
                    variant="outline"
                    placeholder="Profession"
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
                    variant="outline"
                    placeholder="Amount 1"
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
                    variant="outline"
                    placeholder="Amount 2"
                    style={{ width: "90%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="outline"
                    placeholder="Amount 3"
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
                    variant="outline"
                    placeholder="Amount 2"
                    style={{ width: "90%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="outline"
                    placeholder="Amount 4"
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
                    variant="outline"
                    placeholder="Amount 2"
                    style={{ width: "90%" }}
                  />
                </Box>
              </td>
              <td style={{ width: "17.1854%;", fontSize: "11px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="outline"
                    placeholder="Amount 5"
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
                    variant="outline"
                    placeholder="Total"
                    style={{ width: "70%" }}
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
                    variant="outline"
                    placeholder="Interest"
                    style={{ width: "70%" }}
                  />
                </Box>
              </td>
            </tr>
            <tr>
              <td
                colspan="5"
                style={{ width: "42.6337%;", fontSize: "13px" }}
              ></td>
              <td style={{ width: "13.9587%;", fontSize: "13px" }}></td>
              <td style={{ width: "7.1854%;", fontSize: "13px" }}>
                <Box align={"right"}>
                  <Input
                    type="text"
                    size="xs"
                    variant="outline"
                    placeholder="Total Amount"
                    style={{ width: "70%" }}
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
                  placeholder="In Words"
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
</div>

)


}

export default Printcedula;