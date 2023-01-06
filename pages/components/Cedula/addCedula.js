import {
  Flex,
  Avatar,
  Box,
  Button,
  Text,
  Spacer,
  Input,
  Stack,
  
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { addCedula } from "../../../axios/cedula_request";
import { useState } from "react";
import { useRouter } from "next/router";




// Input.defaultProps = { borderColor: 'gray.300',   };




const Cedula = () => {
  const tableRef = useRef(null);

  const router = useRouter();

  const currentDate = new Date();
  const dateToday = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  const [modalopen, setmodalopen] = useState(false);

  const [cedula_no, setcedula_no] = useState("");
  const [year, setyear] = useState("23");
  const [date, setdate] = useState(dateToday);
  const [place_issue, setplace_issue] = useState("President Roxas, Cotabato");
  const [full_name, setfull_name] = useState("");
  const [full_add, setfull_add] = useState("");
  const [place_birth, setplace_birth] = useState("");
  const [date_birth, setdate_birth] = useState("");
  const [nationality, setnationlity] = useState("");
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [male, setmale] = useState("");
  const [female, setfemale] = useState("");
  const [single, setsingle] = useState("");
  const [married, setmarried] = useState("");
  const [widow, setwidow] = useState("");
  const [divorced, setdivorced] = useState("");
  const [profession, setprofession] = useState("");
  const [amount1, setamount1] = useState(0);
  const [amount2, setamount2] = useState(0);
  const [amount2R, setamount2R] = useState(0);
  const [amount3, setamount3] = useState(0);
  const [amount3R, setamount3R] = useState(0);
  const [amount4, setamount4] = useState(0);
  const [amount4R, setamount4R] = useState(0);
  const [interest, setinterest] = useState(0);
  const [total, settotal] = useState(0);
  const [num_word, setnum_word] = useState("");
  const [res_interest,setres_interest] = useState(0)

  const openmodal = () => {
    setmodalopen(true);
  };



  var converter = require('number-to-words');





const savedata = () => {

  setinterest(((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.01).toFixed(2))

  settotal((((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.01) + 
  Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)).toFixed(2) )


  setnum_word(converter.toWords(((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) * 0.01) + 
                    Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001) ))

}




  const addCedulaHandler = async (e) => {
   
    e.preventDefault()

    const payload = {
      cedula_no,
      date,
      year,
      place_issue,
      full_name,
      full_add,
      place_birth,
      date_birth,
      nationality,     
      height,
      weight,
      male,
      female,
      married,
      single,
      widow,
      divorced,
      profession,
      amount1,
      amount2,
      amount2R,
      amount3,
      amount3R,
      amount4,  
      amount4R,     
      interest,
      total,     
      num_word,
    };

    const result = await addCedula(payload);

    console.log(result);

    if (result.hasError == true) {
      console.log("successfully save!");
    } else {
      router.push("/");
    }
  };

  return (
    <Flex direction={"column"} align={"center"} width={"100vw"}>
 
      <Box>
        <form onSubmit={addCedulaHandler}>
         <Flex justify={'right'}>
         <Box align={"right"}>
            <Input
              type="text"  
              borderColor={'gray.800'}
              placeholder="Cedula Number"
              onChange={(e) => {
                setcedula_no(e.target.value);
              }}
            />
          </Box>
         </Flex>
          <Flex direction={"row"}>
            <Box width={'80px'} align={"right"}>
              <Input
                type="text"
                value="23"
              
                onChange={(e) => {
                  setyear(e.target.value);
                }}
              />
            </Box>
            <Box w={'50%'} align={"right"}>
              <Input
                type="text"
                value="President Roxas, Cotabato"
                onChange={(e) => {
                  setplace_issue(e.target.value);
                }}
              />
            </Box>
            <Box align={"right"}>
              <Input
                type="text"
                value={dateToday}
                onChange={(e) => {
                  setdate(e.target.value);
                }}
              />
            </Box>
          </Flex>

          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Full Name"
              onChange={(e) => {
                setfull_name(e.target.value);
              }}
            />
          </Box>
          <Flex direction={'row'} >
          <Box w={'80%'} align={"right"}>
            <Input
              type="text"
              placeholder="Full Address"
              onChange={(e) => {
                setfull_add(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Male"
              onChange={(e) => {
                setmale(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Female"
              onChange={(e) => {
                setfemale(e.target.value);
              }}
            />
          </Box>
          </Flex>
         <Flex direction={'row'} gridColumn={2}>
         <Box align={"right"}>
            <Input
              type="text"
              value={'Filipino'}
              onChange={(e) => {
                setnationlity(e.target.value);
              }}
            />
          </Box>
          <Box flex='1' align={"right"}>
            <Input
              type="text"
              placeholder="Place of birth"
              onChange={(e) => {
                setplace_birth(e.target.value);
              }}
            />
          </Box>
         </Flex>
         <Flex direction={'row'}>
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Single"
              onChange={(e) => {
                setsingle(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Married"
              onChange={(e) => {
                setmarried(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Widow"
              onChange={(e) => {
                setwidow(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Divorced"
              onChange={(e) => {
                setdivorced(e.target.value);
              }}
            />
          </Box>
          </Flex>
          <Flex direction={'row'}>
          <Box align={"right"}>
            <Input
              type="date"
              placeholder="Date of Birth"
              onChange={(e) => {
                setdate_birth(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Height"
              onChange={(e) => {
                setheight(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Weight"
              onChange={(e) => {
                setweight(e.target.value);
              }}
            />
          </Box>
          </Flex>
         
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Profession"
              onChange={(e) => {
                setprofession(e.target.value);
              }}
            />
          </Box>
          <Flex justify={'right'}>
          <Box>
            <Input
              type="number"
              placeholder="Amount1"
              onChange={(e) => {
                setamount1(e.target.value);
              }}
            />
          </Box>
          </Flex>
         <Flex direction={'row'} justify={'right'}>
         <Box align={"right"}>
            <Input
                type="number"
              placeholder="Amount2"
              onChange={(e) => {
                setamount2(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>
            <Input
              type="number"
              readOnly= {true}
              placeholder="Amount2"
              value={(amount2 * 0.001).toFixed(2)}
              onChange={(e) => {
                setamount2R((amount2 * 0.001).toFixed(2));
              }}
            />
          </Box>
         </Flex>
         <Flex direction={'row'} justify={'right'}>
         <Box align={"right"}>
            <Input
            type="number"
              placeholder="Amount3"
              onChange={(e) => {
                setamount3(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>
            <Input
            type="number"
            readOnly= {true}
              placeholder="Amount3"
              value={(amount3 * 0.001).toFixed(2)}
              onChange={(e) => {
                setamount3R((amount3 * 0.001).toFixed(2));
              }}
            />
          </Box>
         </Flex>
         <Flex direction={'row'} justify={'right'}>
         <Box align={"right"}>
            <Input
              type="number"
              placeholder="Amount4"
              onChange={(e) => {
                setamount4(e.target.value);
              }}
             
            />
          </Box>
          <Box align={"right"}>
            <Input
               type="number"
               readOnly= {true}
              placeholder="Amount4"
              value={(amount4 * 0.001).toFixed(2)}
              onChange={(e) => {
                setamount4R(e.target.value);
              }}
            />
          </Box>
         </Flex>
         <Flex justify={'right'}>
          <Box>
            <Input
                type="number"
                readOnly= {true}
              placeholder="Interest"
              value={((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.01).toFixed(2)}
              onChange={(e) => {
                setinterest(e.target.value);
              }}
            />
          </Box>
          </Flex>
          <Flex justify={'right'}>
          <Box>
            <Input
            type="number"
            readOnly= {true}
              placeholder="Total"
              value={(((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.01) + 
                    Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)).toFixed(2) }
              onChange={(e) => {
                settotal(e.target.value);
              }}
             
              
            />
          </Box>
          </Flex>
         
          <Flex  justify={'right'}>
          <Box w='50%'>
            <Input
              type="text"
              placeholder="In words"
              value={converter.toWords(((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) * 0.01) + 
                    Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001) )}
              onChange={(e) => {
                setnum_word(e.target.value);
              }}
          />
          </Box>
          </Flex>
          <Flex  justify={'right'}>
          <Box>
          <Button onClick={savedata}  type="submit">Save</Button>
          </Box>
          </Flex>
         
        </form>
      </Box>
    </Flex>
  );
};

export default Cedula;
