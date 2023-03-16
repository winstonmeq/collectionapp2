import {
  Flex,
  Avatar,
  Box,
  Button,
  Text,
  Select,
  Input,
  Stack,
  Modal,

} from "@chakra-ui/react";

import { useEffect } from "react";

import { addCedula } from "../../../axios/cedula_request";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';
import Savepayment2 from "../payments/savepayment2";




const Cedula = () => {

  const router = useRouter();

  const currentDate = new Date();
  const dateToday = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;


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
  const [amount1, setamount1] = useState(5.00);
  const [amount2, setamount2] = useState(0.00);
  const [amount2R, setamount2R] = useState(0.00);
  const [brgyShare, setbrgyShare] = useState(0.00);
  const [amount3, setamount3] = useState(0.00);
  const [amount3R, setamount3R] = useState(0.00);
  const [amount4, setamount4] = useState(0.00);
  const [amount4R, setamount4R] = useState(0.00);
  const [total, settotal] = useState(0.00);
  const [interest, setinterest] = useState(0.00);
  const [total_paid, settotal_paid] = useState(0.00);
  const [num_word, setnum_word] = useState("");
  const [datalist, setdatalist] = useState([]);
  const [orFund, setorFund] = useState('');
  const [orType, setorType] = useState('');
  const [transId, setTransId] = useState();
  const [orGenId, setorGenId] = useState('');
  const [orUse, setorUse] = useState(1);
  const [or_id, setor_id] = useState('');
  const [orFrom, setorFrom] = useState(0);
  const [orTo, setorTo] = useState(0);
  const [orTo2, setorTo2] = useState(0);
  const [orBB, setorBB] = useState(0);
  const [orNumber, setorNumber] = useState(0);
  const [orNumber2, setorNumber2] = useState(0);
  const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')
  const [customerName, setcustomerName] = useState('');


  const getmonth = currentDate.getMonth() + 1

  function convertToWords(num) {

    var converter = require('number-to-words');

    const wholeNum = Math.floor(num);
    const decimalNum = ((num - wholeNum) * 100).toFixed();


    const wholeNumWords = converter.toWords(wholeNum);

    if (decimalNum == 0) {

      return `${wholeNumWords}`;

    }

    return `${wholeNumWords} and ${decimalNum}/100`;

  }


  useEffect(() => {

    async function fetchData() {

      const { data } = await axios.get(process.env.NEXTAUTH_URL + `/api/Cedula/fetch_cedula`)

      setdatalist(data);

      if (data[0] != null) {
        setor_id(data[0]._id)
        setorGenId(data[0].orGenId)
        setorBB(data[0].orBB)
        setorType(data[0].orType)
        setorFund(data[0].orFund)
        setorNumber(data[0].orNumber)
        setorNumber2(data[0].orNumber < data[0].orTo ? data[0].orNumber + 1 : data[0].orNumber)
        setcedula_no(data[0].orNumber)
        setorFrom(data[0].orFrom)
        setorTo(data[0].orTo)
        setorTo2(data[0].orTo)



      }



    }

    const trasacId = () => {
      setTransId(`T${Math.floor(Math.random() * 1000000)}`)
      console.log(transId)
    }

    trasacId();
    fetchData();

  }, []);







  const savedata = () => {

    setamount2R((amount2 * 0.001).toFixed(2))

    setbrgyShare(((amount2 * 0.001) / 2).toFixed(2))

    setamount3R((amount3 * 0.001).toFixed(2))

    setamount4R((amount4 * 0.001).toFixed(2))

    settotal((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)).toFixed(2))

    setinterest(calculatePenalty(getmonth));

    settotal_paid((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001) + Number(calculatePenalty(getmonth))).toFixed(2))

    setnum_word(convertToWords(((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) + Number(calculatePenalty(getmonth))).toFixed(2)))

    handleSavePayment()

  }


  

  const saveORreport = async (orGenIdd, orFundV, orTypeV, orNumV, orNum2, tdate, rcFrom, rcTo, rcTo2) => {

    const qtty = 0;

    try {

      if ((rcTo - orNumV) === 0) {

        rcTo2 = null
        orNum2 = null
        qtty = null

      } else {

        qtty = rcTo - orNumV

      }

      const payload = {
        orGenId: orGenIdd, orFund: orFundV, formType: orTypeV, orDate: tdate,
        qty1: null, bgFrom: null, bgTo: null,
        qty2: (rcTo - rcFrom + 1), rcFrom: rcFrom, rcTo: rcTo,

        qty3: (orNumV - rcFrom + 1), isFrom: rcFrom, isTo: orNumV,

        qty4: qtty, ebFrom: orNum2, ebTo: rcTo2, userId
      }

      console.log('orReport', payload)

      const response = await axios.post(process.env.NEXTAUTH_URL + '/api/orReport/add_or_report', payload);


    } catch (error) {

      console.log(error)

    }

  }


  //this function is to save the data in begining balance if the or is orBB is 1 is means that the OR is forwarded
  const saveBeginORreport = async (orGenIdd, orFundV, orTypeV, orNumV, orNum2, tdate, rcFrom, rcTo, rcTo2) => {

    const qtty = 0;

    try {

      if ((rcTo - orNumV) === 0) {

        rcTo2 = null
        orNum2 = null
        qtty = null

      } else {

        qtty = rcTo - orNumV


      }


      const payload = {
        orGenId: orGenIdd, orFund: orFundV, formType: orTypeV, orDate: tdate,
        qty1: (rcTo - rcFrom + 1), bgFrom: rcFrom, bgTo: rcTo,
        qty2: null, rcFrom: null, rcTo: null,

        qty3: (orNumV - rcFrom + 1), isFrom: rcFrom, isTo: orNumV,

        qty4: qtty, ebFrom: orNum2, ebTo: rcTo2, userId
      }

      console.log('orReport', payload)

      const response = await axios.post(process.env.NEXTAUTH_URL + '/api/orReport/add_or_report', payload);


    } catch (error) {

      console.log(error)

    }

  }


  
  const updateORdata = async () => {

    try {

      const payload = { or_id, orUse, userId }

      const response = await axios.put(process.env.NEXTAUTH_URL + '/api/ORdata/updateOR', payload);

    } catch (error) {
      console.log(error)
    }

  }





  const handleSavePayment = async () => {


    try {

      const payload = { transacId: transId, orFund, orType, customerName: lname, amount: (Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001) + Number(calculatePenalty(getmonth))).toFixed(2), orGenId, orNumber, userId }

      const response = await axios.post(process.env.NEXTAUTH_URL + '/api/Payment/addPayment', payload);


      if (response != null) {

           //this function is to update OR data from orUse 0 to orUse 1
        updateORdata()

        if (orBB === 0) {
          saveORreport(orGenId, orFund, orType, orNumber, orNumber2, dateToday, orFrom, orTo, orTo2)

        } else {

          saveBeginORreport(orGenId, orFund, orType, orNumber, orNumber2, dateToday, orFrom, orTo, orTo2)

        }

      }






    } catch (error) {

      console.log(error)

    }


  }







  const optionMale = ['Male', ' / '];

  const optionFemale = ['Female', ' / '];

  const optionSingle = ['Single', ' / '];
  const optionMarried = ['Married', ' / '];
  const optionWidow = ['Widow', ' / '];
  const optionDivorced = ['Divorced', ' / '];


  function calculatePenalty(monthno) {



    if (monthno == 1) {


      var intmonth = 0;


      return intmonth;

    }

    if (monthno == 2) {


      var intmonth = 0;


      return intmonth;

    }


    if (monthno == 3) {


      var intmonth = (((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) * 0.06).toFixed(2))


      return intmonth;

    }

    if (monthno == 4) {

      const intmonth = (((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) * 0.08).toFixed(2))


      return intmonth;

    }



    if (monthno == 5) {



      var intmonth = (((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) * 0.10).toFixed(2))


      return intmonth;

    }

    if (monthno == 6) {

      const intmonth = (((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) * 0.12).toFixed(2))


      return intmonth;

    }

    if (monthno == 7) {

      const intmonth = (((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) * 0.14).toFixed(2))


      return intmonth;

    }

    if (monthno == 8) {

      const intmonth = (((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) * 0.16).toFixed(2))


      return intmonth;

    }

    if (monthno == 9) {

      const intmonth = (((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) * 0.18).toFixed(2))


      return intmonth;

    }

    if (monthno == 10) {

      const intmonth = (((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) * 0.20).toFixed(2))


      return intmonth;

    }


    if (monthno == 11) {

      const intmonth = (((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) * 0.22).toFixed(2))


      return intmonth;

    }


    if (monthno == 12) {

      const intmonth = (((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) * 0.24).toFixed(2))


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
      brgyShare,
      amount3,
      amount3R,
      amount4,
      amount4R,
      total,
      interest,
      total_paid,
      num_word,
      userId
    };

    const result = await addCedula(payload);

    console.log(result);

    if (result.hasError == true) {

      router.push("/components/Cedula/listCedula");

    } else {
      router.push("/");
    }
  };

  return (


    <Flex direction={"column"} align={"center"} >

      {console.log('data', datalist)}


      <Box>
        <form onSubmit={addCedulaHandler}>
          <Flex justify={'right'}>
            <Box align={"right"}>
              <Input
                type="text"
                value={cedula_no}
                onChange={(e) => {
                }}
              />
            </Box>
          </Flex>
          <Flex direction={"row"}>
            <Box width={'80px'} align={"right"}>
              <Input
                type="text"
                value={currentDate.getFullYear()}
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
              <Select value={full_add} onChange={e => setfull_add(e.target.value)} style={{ width: "100%" }}>

                <option value=''>Select Barangay</option>
                <option value='Alegria'>Alegria</option>
                <option value='Bato-bato'>Bato-bato</option>
                <option value='Del Carmen'>Del Carmen</option>
                <option value='F. Cajelo'>F. Cajelo</option>
                <option value='Idaoman'>Idaoman</option>
                <option value='Ilustre'>Ilustre</option>
                <option value='Kamarahan'>Kamarahan</option>
                <option value='Camasi'>Camasi</option>
                <option value='Kisupaan'>Kisupaan</option>
                <option value='La Esperanza'>La Esperanza</option>
                <option value='Labu-o'>Labu-o</option>
                <option value='Lama-lama'>Lama-lama</option>
                <option value='Lomonay'>Lomonay</option>
                <option value='New Cebu'>New Cebu</option>
                <option value='Poblacion'>Poblacion</option>
                <option value='Sagcungan'>Sagcungan</option>
                <option value='Salat'>Salat</option>
                <option value='Sarayan'>Sarayan</option>
                <option value='Tuael'>Tuael</option>
                <option value='Greenhill'>Greenhill</option>
                <option value='Cabangbangan'>Cabangbangan</option>
                <option value='Datu Inda'>Datu Inda</option>
                <option value='Datu Sundungan'>Datu Sundungan</option>
                <option value='Kimahuring'>Kimahuring</option>
                <option value='Mabuhay'>Mabuhay</option>



              </Select>
            </Box>
            <Box align={"right"}>
              <Select value={male} onChange={e => setmale(e.target.value)} style={{ width: "100px" }}>

                <option value=''>Male</option>
                <option value='&#10003;'>&#10003;</option>

              </Select>
            </Box>
            <Box align={"right"}>
              <Select value={female} onChange={e => setfemale(e.target.value)} style={{ width: "100px" }}>
                <option value=''>Female</option>
                <option value='&#10003;'>&#10003;</option>
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
              <Select value={single} onChange={e => setsingle(e.target.value)} style={{ width: "100px" }}>
                <option value=''>Single</option>
                <option value='&#10003;'>&#10003;</option>

              </Select>
            </Box>
            <Box align={"right"}>
              <Select value={married} onChange={e => setmarried(e.target.value)} style={{ width: "150px" }}>
                <option value=''>Married</option>
                <option value='&#10003;'>&#10003;</option>

              </Select>
            </Box>
            <Box align={"right"}>
              <Select value={widow} onChange={e => setwidow(e.target.value)} style={{ width: "150px" }}>
                <option value=''>Widow</option>
                <option value='&#10003;'>&#10003;</option>

              </Select>
            </Box>
            <Box align={"right"}>
              <Select value={divorced} onChange={e => setdivorced(e.target.value)} style={{ width: "150px" }}>
                <option value=''>Divorced</option>
                <option value='&#10003;'>&#10003;</option>

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
                readOnly={true}
                value={(amount2 * 0.001).toFixed(2)}
                onChange={(e) => {

                }}
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
                readOnly={true}
                value={(amount3 * 0.001).toFixed(2)}
                onChange={(e) => {

                }}
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
                readOnly={true}
                value={(amount4 * 0.001).toFixed(2)}
                onChange={(e) => {

                }}
              />
            </Box>
          </Flex>
          <Flex justify={'right'}>
            <Box>
              <Input
                type="number"
                readOnly={true}

                placeholder="Total"
                value={(Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)).toFixed(2)}
                onChange={(e) => {

                }}

              />
            </Box>
          </Flex>
          <Flex justify={'right'}>
            <Box>
              <Input
                type="number"
                readOnly={true}

                placeholder="Interest"
                value={calculatePenalty(getmonth)}
                onChange={(e) => {

                }}
              />
            </Box>
          </Flex>
          <Flex justify={'right'}>
            <Box>
              <Input
                type="number"
                readOnly={true}

                placeholder="Total Paid"
                value={((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) + Number(calculatePenalty(getmonth))).toFixed(2)}
                onChange={(e) => {

                }}


              />
            </Box>
          </Flex>

          <Flex justify={'right'}>
            <Box w='50%'>
              <Input
                type="text"
                placeholder="In words"
                //value={converter.toWords(((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001 ) + Number(amount4 * 0.001)) + Number(calculatePenalty(getmonth))).toFixed(2))}
                value={convertToWords(((Number(amount1) + Number(amount2 * 0.001) + Number(amount3 * 0.001) + Number(amount4 * 0.001)) + Number(calculatePenalty(getmonth))).toFixed(2))}

                onChange={(e) => {

                }}
              />
            </Box>
          </Flex>
          <Flex justify={'right'}>
            <Box>
              <Button onClick={savedata} type="submit">Save</Button>



            </Box>
          </Flex>

        </form>
      </Box>
      {console.log(lname)}
    </Flex>

  );
};

export default Cedula;
