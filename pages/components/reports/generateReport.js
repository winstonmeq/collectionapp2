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
  
  
  const GenerateReport = () => {
   
      
     
      const [datalist, setdatalist] = useState([])
      const [datalist2, setdatalist2] = useState([])
      const [datalist4, setdatalist4] = useState([])

      const [reportTag, setreportTag] = useState('');
      const [userId, setuserId] = useState('63e4484b3a663c0b8d277141')

                 
  
   async function fetchData() {
              const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/orReport/fetch_report`)
            
              setdatalist(data);             
              
    } 

   
    async function fetchData2() {
      const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/LCR/fetch_report`)
    
      setdatalist2(data);             
      
   }  


   async function fetchORData2() {
    const { data } = await axios.get( process.env.NEXTAUTH_URL + `/api/ORdata/fetchUseOR`)
  
    setdatalist4(data);             
    
 }  


      
    useEffect(() => {
      if (datalist.length > 0 && reportTag !== '') {
        handleSave()
       
      }
    }, [datalist, reportTag]);

      


          const handleSave = async () => {
            try {
          
                const datalistWithDate = datalist.map((data) => {
                    return {
                      ...data,
                      reportNum: reportTag,
                    };
                  });
                  
             const response = await axios.post(process.env.NEXTAUTH_URL + '/api/Freport/add_FReport', { datalist2: datalistWithDate });     
          
          
        
            } catch (error) {
              console.log(error)
            }


            SaveORdata2();
            SaveLCRdata2();
       

            await axios.get( process.env.NEXTAUTH_URL + `/api/orReport/delete_table`)

          }



          const SaveLCRdata2 = async () => {
            try {
          
                const LCRdatalist = datalist2.map((data) => {
                    return {
                      ...data,
                      reportName: reportTag,

                    };
                  });
                  
                  const response = await axios.post(process.env.NEXTAUTH_URL + '/api/DataReport/addLCRdata2', { datalist3: LCRdatalist });                  
        
            } catch (error) {
              console.log(error)
            }
          }




          const SaveORdata2 = async () => {
            try {
          
                const ORdatalist = datalist4.map((data) => {
                    return {
                      ...data,
                      reportName: reportTag,

                    };
                  });
                  
                  const response = await axios.post(process.env.NEXTAUTH_URL + '/api/ORdata2/addOR', { datalist4: ORdatalist });                  
                  console.log('Success Save ORdata2')

            } catch (error) {
              console.log(error)
            }

          }


       
        
  

     
  
    return (
      <Flex >
        {console.log('datalist4', datalist4)}


        
        <Input type={'text'} value={reportTag} placeholder="Report name" onChange={(e)=>{setreportTag(e.target.value)}} />
        <Button onClick={(e)=>{fetchData(), fetchData2(), fetchORData2()}}>Generate Report</Button>
        
        
     
  
      </Flex>
    )
  
  
  };
  
  export default GenerateReport;
  