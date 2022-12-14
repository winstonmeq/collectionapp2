import {
  Flex,
  Avatar,
  Box,
  Button,
  Text,
  Select,
  Input,
  Stack,
  
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { addCedula } from "../../../axios/cedula_request";
import { useState } from "react";
import { useRouter } from "next/router";








const Cedula = () => {
  const tableRef = useRef(null);

  const router = useRouter();

  const currentDate = new Date();
  const dateToday = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  const [modalopen, setmodalopen] = useState(false);

  const [cedula_no, setcedula_no] = useState("");
  const [year, setyear] = useState("23");
  const [date, setdate] = useState(dateToday);
  const [place_issue, setplace_issue] = useState("President Roxas, Cotabato");
  const [lname, setlname] = useState("");
  const [fname, setfname] = useState("");
  const [mname, setmname] = useState("");
  const [full_add, setfull_add] = useState("");
  const [place_birth, setplace_birth] = useState("");
  const [date_birth, setdate_birth] = useState("");
  const [nationality, setnationlity] = useState("Filipino");
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [male, setmale] = useState("");
  const [female, setfemale] = useState("");
  const [single, setsingle] = useState("`");
  const [married, setmarried] = useState("`");
  const [widow, setwidow] = useState("`");
  const [divorced, setdivorced] = useState("`");
  const [profession, setprofession] = useState("");
  const [amount1, setamount1] = useState(0.00);
  const [amount2, setamount2] = useState(0.00);
  const [amount2R, setamount2R] = useState(0.00);
  const [amount3, setamount3] = useState(0.00);
  const [amount3R, setamount3R] = useState(0.00);
  const [amount4, setamount4] = useState(0.00);
  const [amount4R, setamount4R] = useState(0.00);
  const [total, settotal] = useState(0.00);
  const [interest, setinterest] = useState(0.00);
  const [total_paid, settotal_paid] = useState(0.00);
  const [num_word, setnum_word] = useState("");



  var converter = require('number-to-words');


   const getmonth = currentDate.getMonth() + 1




const savedata = () => {

  setamount2R((amount2 * 0.001).toFixed(2))
  
  setamount3R((amount3 * 0.001).toFixed(2))
  
  setamount4R((amount4 * 0.001).toFixed(2))

  settotal((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)).toFixed(2))

  setinterest(calculatePenalty(getmonth));
  
  settotal_paid((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001) + Number(calculatePenalty(getmonth))).toFixed(2))


 

  setnum_word(converter.toWords((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) + Number(calculatePenalty(getmonth))))

}


const optionMale = ['Male', ' / '];

const optionFemale = ['Female', ' / '];

const optionSingle = ['Single', ' / '];
const optionMarried = ['Married', ' / '];
const optionWidow = ['Widow', ' / '];
const optionDivorced = ['Divorced', ' / '];


function calculatePenalty(monthno) {
   

  if(monthno == 1){
    
    
    var intmonth = 0;
  
   
   return intmonth;
    
  }  

  if(monthno == 2){
    
    
    var intmonth = 0;
  
   
   return intmonth;
    
  }  


  if(monthno == 3){
    
    
    var intmonth = (((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.06).toFixed(2))
  
   
   return intmonth;
    
  }  

  if(monthno == 4){

    const intmonth = (((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.08).toFixed(2))

   
   return intmonth;
    
  }  

  if(monthno == 3){

    
    
    var intmonth = (((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.06).toFixed(2))
  
   
   return intmonth;
    
  }  

  if(monthno == 4){

    const intmonth = (((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.08).toFixed(2))

   
   return intmonth;
    
  }  

  if(monthno == 5){

    
    
    var intmonth = (((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.10).toFixed(2))
  
   
   return intmonth;
    
  }  

  if(monthno == 6){

    const intmonth = (((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.12).toFixed(2))

   
   return intmonth;
    
  }  

  if(monthno == 7){

    const intmonth = (((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.14).toFixed(2))

   
   return intmonth;
    
  }  

  if(monthno == 8){

    const intmonth = (((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.16).toFixed(2))

   
   return intmonth;
    
  }  

  if(monthno == 9){

    const intmonth = (((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.18).toFixed(2))

   
   return intmonth;
    
  }  

  if(monthno == 10){

    const intmonth = (((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.20).toFixed(2))

   
   return intmonth;
    
  } 
  
  
  if(monthno == 11){

    const intmonth = (((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.22).toFixed(2))

   
   return intmonth;
    
  }  

  
  if(monthno == 12){

    const intmonth = (((Number(amount1) + Number(amount2 * 0.001 ) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) * 0.24).toFixed(2))

   
   return intmonth;
    
  }  

 
}





  const addCedulaHandler = async (e) => {
   
    e.preventDefault()

    const payload = {
      cedula_no,
      date,      
      year,
      place_issue,
      lname,
      fname,
      mname,
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
      total,   
      interest,
      total_paid,   
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
              placeholder="Cedula Number"
              required
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
                required
                onChange={(e) => {
                  setyear(e.target.value);
                }}
              />
            </Box>
            <Box w={'50%'} align={"right"}>
              <Input
                type="text"
                value="President Roxas, Cotabato"
                required
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
          <Flex direction={'row'}>
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Last Name"
              required
              onChange={(e) => {
                setlname(e.target.value);
              }}
            />            
          </Box>
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="First Name"
              required
              onChange={(e) => {
                setfname(e.target.value);
              }}
            />            
          </Box>
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Middle Initial"
              required
              onChange={(e) => {
                setmname(e.target.value);
              }}
            />            
          </Box>
          </Flex>
       
          <Flex direction={'row'} >
          <Box w={'80%'} align={"right"}>
            <Input
              type="text"
              placeholder="Full Address"
              required  
              onChange={(e) => {
                setfull_add(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>  
          <Select value={male} onChange={e => setmale(e.target.value)} style={{width:"100px"}}>
            
              <option  value=''>Male</option>
              <option  value='&#10003;'>&#10003;</option>
        
            </Select>
          </Box>
          <Box align={"right"}>
          <Select value={female} onChange={e => setfemale(e.target.value)} style={{width:"100px"}}>
              <option  value=''>Female</option>
              <option  value='&#10003;'>&#10003;</option>
            </Select>
          </Box>
          </Flex>
         <Flex direction={'row'} gridColumn={2}>
         <Box align={"right"}>
            <Input
              type="text"
              value={'FILIPINO'}
              onChange={(e) => {
                setnationlity('FILIPINO');
              }}
            />
          </Box>
          <Box flex='1' align={"right"}>
            <Input
              type="text"
              placeholder="Place of birth"
              required
              onChange={(e) => {
                setplace_birth(e.target.value);
              }}
            />
          </Box>
         </Flex>
         <Flex direction={'row'}>
          <Box align={"right"}>
          <Select value={single} onChange={e => setsingle(e.target.value)} style={{width:"100px"}}>
             <option  value=''>Single</option>
              <option  value='&#10003;'>&#10003;</option>
          
            </Select>
          </Box>
          <Box align={"right"}>
          <Select value={married} onChange={e => setmarried(e.target.value)} style={{width:"150px"}}>
          <option  value=''>Married</option>
              <option  value='&#10003;'>&#10003;</option>
          
            </Select>
          </Box>
          <Box align={"right"}>
          <Select value={widow} onChange={e => setwidow(e.target.value)} style={{width:"150px"}}>
          <option  value=''>Widow</option>
              <option  value='&#10003;'>&#10003;</option>
          
            </Select>
          </Box>
          <Box align={"right"}>
          <Select value={divorced} onChange={e => setdivorced(e.target.value)} style={{width:"150px"}}>
          <option  value=''>Divorced</option>
              <option  value='&#10003;'>&#10003;</option>
          
            </Select>
          </Box>
          </Flex>
          <Flex direction={'row'}>
          <Box align={"right"}>
            <Input
              type="date"
              placeholder="Date of Birth"
              required
              onChange={(e) => {
                setdate_birth(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Height"
              required
              onChange={(e) => {
                setheight(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>
            <Input
              type="text"
              placeholder="Weight"
              required
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
              required
              onChange={(e) => {
                setprofession(e.target.value);
              }}
            />
          </Box>
          <Flex justify={'right'}>
          <Box>
            <Input
              type="number"
              value={amount1}
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
                value={amount2}
              onChange={(e) => {
                setamount2(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>
            <Input
              type="number"
              readOnly= {true}
              defaultValue={(amount2 * 0.001).toFixed(2)}
             
            />
          </Box>
         </Flex>
         <Flex direction={'row'} justify={'right'}>
         <Box align={"right"}>
            <Input
            type="number"
            value={amount3}              
              onChange={(e) => {
                setamount3(e.target.value);
              }}
            />
          </Box>
          <Box align={"right"}>
            <Input
            type="number"
            readOnly= {true}
              defaultValue={(amount3 * 0.001).toFixed(2)}
              
            />
          </Box>
         </Flex>
         <Flex direction={'row'} justify={'right'}>
         <Box align={"right"}>
            <Input
              type="number"
              value={amount4}
              onChange={(e) => {
                setamount4(e.target.value);
              }}
             
            />
          </Box>
          <Box align={"right"}>
            <Input
               type="number"
               readOnly= {true}
              defaultValue={(amount4 * 0.001).toFixed(2)}
            />
          </Box>
         </Flex>
         <Flex justify={'right'}>
          <Box>
            <Input
            type="number"
            readOnly= {true}
          
              placeholder="Total"
              defaultValue={(Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)).toFixed(2) }
                        
              
            />
          </Box>
          </Flex>
         <Flex justify={'right'}>
          <Box>
            <Input
                type="number"
                readOnly= {true}
                
              placeholder="Interest"
              defaultValue={calculatePenalty(getmonth)}
             
            />
          </Box>
          </Flex>
          <Flex justify={'right'}>
          <Box>
            <Input
            type="number"
            readOnly= {true}
           
              placeholder="Total Paid"
              defaultValue={((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) + Number(calculatePenalty(getmonth))).toFixed(2) }
              
             
              
            />
          </Box>
          </Flex>
         
          <Flex  justify={'right'}>
          <Box w='50%'>
            <Input
              type="text"
              placeholder="In words"
              defaultValue={converter.toWords((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) + Number(calculatePenalty(getmonth)))}
              
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
