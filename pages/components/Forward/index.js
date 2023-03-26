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
  import { useSession } from 'next-auth/react';

  
  const ForwardBal = () => {
   
      
     
      const [datalist, setdatalist] = useState([])
      const [orType, setorType] = useState('');
      const [orFund, setorFund] = useState('');
      const [orGenId, setorGenId] = useState('');
      const [orGenId2, setorGenId2] = useState('');
      const [orNumber, setorNumber] = useState(0);
      const [orTo, setorTo] = useState(0);
      const [userId, setuserId] = useState(null)

      const { data: session} = useSession();

    
      const { isOpen, onOpen, onClose } = useDisclosure()
  
      const router = useRouter();  


      useEffect(() => {
        if (session) {
            setuserId(session.user.id);
        }
    }, [session]);


    
  
      const currentDate = new Date();

      const dateToday = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;


      const ORgenerateId = async () => {
        setorGenId2(`fr${Math.floor(Math.random() * 10000)}`)
      }

      const AutoGen = () => {
        let autoId = `fr${Math.floor(Math.random() * 10000)}`

        return autoId
      }




        
        useEffect(() => {   
  
          async function fetchData() {
              const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/or/fetchORnoUse?userId=${userId}`)
            
              setdatalist(data);

              // if(data[0]!=null){
              //   setorType(data[0].orType)
              //   setorGenId(data[0].orGenId)
              //   setorNumber(data[0].orNumber)
              //   setorTo(data[0].orTo)            
                            
              // } else {
                 
               
              // }
             
          }  

        if(userId) {
          fetchData();

        }
          
         
          }, [userId]);
  

        
     
          
      const saveORreport = async (tdate) => {

       
        for(let i=0; i <= datalist.length; i++ ) {          
     

          try {          
       

            let genId = AutoGen()

            updateORdata(datalist[i].orGenId, genId, datalist[i].orNumber)
        
            const payload = {orGenId:genId, formType:datalist[i].orType, orDate:tdate, qty1:(datalist[i].orTo-datalist[i].orNumber + 1), bgFrom:datalist[i].orNumber, bgTo:datalist[i].orTo, 
                             qty2:null, rcFrom:null, rcTo:null, 
                             qty3:null, isFrom:null, isTo:null, qty4:null, ebFrom:null, ebTo:null, userId}
  
            console.log('orReport', datalist[i].orGenId)         
      
           const response = await axios.post(process.env.NEXTAUTH_URL + '/api/orReport/add_or_report', payload);            

        
        
          } catch (error) {
  
            console.log(error)
  
          }  

          
        }
      

      }



      const updateORdata = async (oldGenId, NewGenId, orNumber) => {
     
            try {
              
              const payload = {orGenId:oldGenId, orBB:1, orGenId2:NewGenId, orFrom:orNumber, userId}

              const response = await axios.put(process.env.NEXTAUTH_URL + '/api/or/updateORForward', payload);
        
              
            } catch (error) {

              console.log(error)


            }

          

      }



     
  
    return (
      <Flex >
        {console.log(datalist)}
        <Button onClick={(e)=>{saveORreport(dateToday)}}>Balance Forward</Button>
     
  
      </Flex>
    )
  
  
  };
  
  export default ForwardBal;
  