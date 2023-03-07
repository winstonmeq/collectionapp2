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
  
  
  const ForwardBal = () => {
   
      
     
      const [datalist, setdatalist] = useState([])
      const [orType, setorType] = useState('');
      const [orFund, setorFund] = useState('');
      const [orGenId, setorGenId] = useState('');
      const [orGenId2, setorGenId2] = useState('');
      const [orNumber, setorNumber] = useState(0);
      const [orTo, setorTo] = useState(0);
      const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')

    
      const { isOpen, onOpen, onClose } = useDisclosure()
  
      const router = useRouter();  



    
  
      const currentDate = new Date();
      const dateToday = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;


      const ORgenerateId = () => {
        setorGenId2(`fr${Math.floor(Math.random() * 10000)}`)
      }



        
        useEffect(() => {   
  
          async function fetchData() {
              const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/or/fetchORnoUse`)
            

              setdatalist(data);
              // if(data[0]!=null){
              //   setorType(data[0].orType)
              //   setorGenId(data[0].orGenId)
              //   setorNumber(data[0].orNumber)
              //   setorTo(data[0].orTo)            
                            
              // } else {
                 
               
              // }
             
          }  

          ORgenerateId();
          fetchData();
         
          }, []);
  

        
     
          
      const saveORreport = async (orGenIdd, orType, tdate,rcNum,rcTo) => {

          try {

            const payload = {orGenId:orGenIdd, formType:orType, orDate:tdate, qty1:(rcTo-rcNum + 1), bgFrom:rcNum, bgTo:rcTo, 
                             qty2:null, rcFrom:null, rcTo:null, 
                             qty3:null, isFrom:null, isTo:null, qty4:null, ebFrom:null, ebTo:null, userId}
  
            console.log('orReport', payload)         
      
            const response = await axios.post(process.env.NEXTAUTH_URL + '/api/orReport/add_or_report', payload);
               

          } catch (error) {
  
            console.log(error)
  
          }  

        }
      

         updateORdata()
      }



      const updateORdata = async () => {

        for(let i=0; i <= datalist.length; i++ ) {

            try {
              
              const payload = {orGenId,orGenId2,orFrom:datalist[i].orNumber, userId}

              const response = await axios.put(process.env.NEXTAUTH_URL + '/api/or/updateORForward', payload);
        
              
            } catch (error) {

              console.log(error)


            }

        }       

      }



      
      // const handleSaveForwardedOR = async () => {
      //   try {
      
      //     const response = await axios.post(process.env.NEXTAUTH_URL + '/api/forward/add_forward', {datalist});     
    
       
    
      //   } catch (error) {
      //     console.log(error)
      //   }
     
        
      // }

  
     
  
    return (
      <Flex >
        <Button onClick={(e)=>{saveORreport(orGenId2,orType,dateToday,orNumber,orTo)}}>Foward Balances</Button>
     
  
      </Flex>
    )
  
  
  };
  
  export default ForwardBal;
  