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


const Savepayment = ({transacId, orFund,orType, amount, savehandle}) => {
 
    const [paylist, setpaylist] = useState([])
    // const [service_type, setservice_type] = useState('');
    const [customerName, setcustomerName] = useState('');
    const [orFrom, setorFrom] = useState(0);
    const [orTo, setorTo] = useState(0);

    const [orNumber, setorNumber] = useState(0);
    const [orNumber2, setorNumber2] = useState(0);
    const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')
    const [orGenId, setorGenId] = useState('');
  
 
    const [orUse, setorUse] = useState(1);
    const [or_id, setor_id] = useState('');
   
    const { isOpen, onOpen, onClose } = useDisclosure()

    const router = useRouter();



      useEffect(() => {   

        async function fetchData() {

          const payload = {orFund,orType, userId}

            const { data } = await axios.post( process.env.NEXTAUTH_URL + `/api/or/fetch_fund`, payload)

            if(data[0]!=null){
              setorFrom(data[0].orFrom)
              setorTo(data[0].orTo)
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


        // useEffect(() => {   

        //   async function fetchData() {
        //       const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/or/getOR`)
  
        //       if(data[0]!=null){
        //         setorFrom(data[0].orFrom)
        //         setorTo(data[0].orTo)
        //         setorNumber(data[0].orNumber)
        //         setorNumber2(data[0].orNumber < data[0].orTo ? data[0].orNumber + 1 : data[0].orNumber  )  
        //         setor_id(data[0]._id)
        //         setorGenId(data[0].orGenId)
        //       } else {
                 
        //         window.alert('No OR');
        //         router.push('/components/orDataView/saveORdata');
  
        //       }
             
        //   }
  
        //   fetchData();
        //   }, []);
  


        const handleSavePayment = async () => {
          try {
      
            const payload = {transacId,orFund, customerName, amount,orGenId, orNumber, userId}
  
            console.log('browser', payload)         
      
            const response = await axios.post(process.env.NEXTAUTH_URL + '/api/Payment/addPayment', payload);
      
           if(response != null){
          
           savehandle()        
           updateORdata()
  
  
           }
       
           
          } catch (error) {
  
            console.log(error)
  
          }
  
          router.push(`/components/payments/${transacId}`);
  
        }
  
      


   
      const updateORdata = async () => {

        try {
          console.log('update OR',or_id)
          
          const payload = {or_id, orUse, userId}
          const response = await axios.put(process.env.NEXTAUTH_URL + '/api/or/updateOR', payload);    
           
        } catch (error) {
          console.log(error)
        }

        updateORreport(orGenId, orFrom,orNumber,orNumber2, orTo)
      }


      
      const updateORreport = async (orGenIdd, orFfrom,orNum,orNum2,orTto) => {

         const qtty = 0;

        try {


          if((orTto-orNum) === 0){

            orNum2 = null
            orTto = null
            qtty = null
  
          } else {

            qtty = orTto-orNum


          }

                    
          const payload = {orGenId:orGenIdd, qty3:(orNum-orFfrom + 1), isFrom:orFfrom,isTo:orNum,
                          qty4:qtty, ebFrom:orNum2,ebTo:orTto, userId}


          console.log('update ORreport',payload)

          const response = await axios.put(process.env.NEXTAUTH_URL + '/api/orReport/update', payload);
    
           
        } catch (error) {

          console.log(error)

        }


      }


  


  


   

  return (
    <Flex >
        
    <Button onClick={onOpen}>Pay</Button>

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
