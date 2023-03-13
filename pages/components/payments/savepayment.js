import {
  Flex,
  Box,
  useDisclosure,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { useRouter } from "next/router";


const Savepayment = ({transacId, orFund,orType, cusName, amount, savehandle}) => {
 
    const [paylist, setpaylist] = useState([])
    // const [service_type, setservice_type] = useState('');
    const [customerName, setcustomerName] = useState(cusName);
    const [orFrom, setorFrom] = useState(0);
    const [orTo, setorTo] = useState(0);
    const [orTo2, setorTo2] = useState(0);
    const [orBB, setorBB] = useState(0);
    const [orNumber, setorNumber] = useState(0);
    const [orNumber2, setorNumber2] = useState(0);
    const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')
    const [orGenId, setorGenId] = useState('');
  
 
    const [orUse, setorUse] = useState(1);
    const [or_id, setor_id] = useState('');
   
    const { isOpen, onOpen, onClose } = useDisclosure()

    const router = useRouter();


    const currentDate = new Date();
    const dateToday = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;



      useEffect(() => {   


        //function to get unuse OR with Fund and Type as reference

        async function fetchData() {

          const payload = {orFund,orType, userId}

            const { data } = await axios.post( process.env.NEXTAUTH_URL + `/api/or/fetch_fund`, payload)

            if(data[0]!=null){
              setorFrom(data[0].orFrom)
              setorTo(data[0].orTo)
              setorTo2(data[0].orTo)
              setorBB(data[0].orBB)
              setorNumber(data[0].orNumber)
              setorNumber2(data[0].orNumber < data[0].orTo ? data[0].orNumber + 1 : data[0].orNumber  )  
              setor_id(data[0]._id)
              setorGenId(data[0].orGenId)
            } else {
               
              window.alert('No OR');
              router.push('/components/orDataView/saveORdata');

            }
           
        }

        fetchData();
        }, []);





      const updateORdata = async () => {

              try {
                
                const payload = {or_id, orUse, userId}

                const response = await axios.put(process.env.NEXTAUTH_URL + '/api/ORdata2/updateOR', payload);    
                 
              } catch (error) {
                console.log(error)
              }
      
        }
      





      
        const handleSavePayment = async () => {
          try {
      
            const payload = {transacId,orFund,orType, customerName, amount,orGenId, orNumber, userId}
  
            console.log('browser', payload)         
      
            const response = await axios.post(process.env.NEXTAUTH_URL + '/api/Payment/addPayment', payload);
      
           if(response != null){
          
            //this is a feedback function to save data to LCRdata
           savehandle()
           
           //this function is to update OR data from orUse 0 to orUse 1
           updateORdata()
           
           if(orBB === 0){
            saveORreport(orGenId, orFund, orType, orNumber,orNumber2, dateToday, orFrom, orTo, orTo2 )

           } else {

            saveBeginORreport(orGenId, orFund, orType, orNumber,orNumber2, dateToday, orFrom, orTo, orTo2 )

           }
  
           }
       
           
          } catch (error) {
  
            console.log(error)
  
          }

      
     
        router.push(`/components/payments/${transacId}`);
  
        }
  

    
      
        const saveORreport = async (orGenIdd,orFundV, orTypeV,orNumV,orNum2, tdate,rcFrom,rcTo,rcTo2) => {

          const qtty = 0;

          try {

            if((rcTo-orNumV) === 0){

              rcTo2 = null
              orNum2 = null
              qtty = null
    
            } else {
  
              qtty = rcTo-orNumV
  
  
            }

  
              const payload = {orGenId:orGenIdd, orFund:orFundV, formType:orTypeV, orDate:tdate, 
                               qty1:null, bgFrom:null, bgTo:null, 
                               qty2:(rcTo-rcFrom + 1), rcFrom:rcFrom, rcTo:rcTo, 

                               qty3:(orNumV - rcFrom + 1), isFrom:rcFrom, isTo:orNumV,

                               qty4:qtty, ebFrom:orNum2, ebTo:rcTo2, userId}
    
              console.log('orReport', payload)         
        
              const response = await axios.post(process.env.NEXTAUTH_URL + '/api/orReport/add_or_report', payload);
                 

            } catch (error) {
    
              console.log(error)
    
            }  

    }


       //this function is to save the data in begining balance if the or is orBB is 1 is means that the OR is forwarded
    const saveBeginORreport = async (orGenIdd,orFundV, orTypeV,orNumV,orNum2, tdate,rcFrom,rcTo,rcTo2) => {

      const qtty = 0;

      try {

        if((rcTo-orNumV) === 0){

          rcTo2 = null
          orNum2 = null
          qtty = null

        } else {

          qtty = rcTo-orNumV


        }


          const payload = {orGenId:orGenIdd, orFund:orFundV, formType:orTypeV, orDate:tdate, 
                           qty1:(rcTo-rcFrom + 1), bgFrom:rcFrom, bgTo:rcTo, 
                           qty2:null, rcFrom:null, rcTo:null, 

                           qty3:(orNumV - rcFrom + 1), isFrom:rcFrom, isTo:orNumV,

                           qty4:qtty, ebFrom:orNum2, ebTo:rcTo2, userId}

          console.log('orReport', payload)         
    
          const response = await axios.post(process.env.NEXTAUTH_URL + '/api/orReport/add_or_report', payload);
             

        } catch (error) {

          console.log(error)

        }  

}

   

      
   

  return (
    <Flex >
        
    <Button onClick={onOpen}>Pay</Button>

    {console.log(or_id)}

  <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'xl'}  >
    <ModalOverlay />
    <ModalContent >
      <ModalHeader>Print Payment</ModalHeader>
    
      <ModalBody >  
          <form onSubmit={handleSavePayment}>
          <label>Transaction Id</label>
          <Input type='text' readOnly value={transacId} onChange={e => {}}/>
          <label>OR Text</label>
          <Input type='text' value={orNumber} readOnly required onChange={(e) => {}}  />
          <label >Customer Name</label>
          <Input type='text' value={customerName} autoFocus={true} required onChange={(e) => {setcustomerName(e.target.value)}}  />
         
          <label>Amount</label>
          <Input type='number' value={amount} required onChange={e => {}}  />
         
            {/* <Button type="submit">Save/Print</Button> */}
          </form>
     </ModalBody>
     <Button onClick={(e) => {handleSavePayment()}} >Save</Button>


      <ModalFooter>
      
        <Button size={'sm'} colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>


    </Flex>
  )


};

export default Savepayment;
