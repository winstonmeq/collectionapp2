import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";




const Print = () => {


    const [paymentList, setPaymentList] = useState([]);

    const router = useRouter();

    const { id } = router.query;

    //  const payload = {id }

   
     console.log(id)

   

    useEffect(() => {        
        async function fetchData(id) {
            const { data } = await axios.get(`http://192.168.102.18:3000/api/Payment/${id}`)
            console.log(data)
            setPaymentList(data);
        }
        fetchData(id);
    }, [id]);

    return (
        <div>
            <h1>Payment List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentList.map((item,i) => {
                        return (
                            
                            <tr key={i}>
                            <td>{item.transacId}</td>                            
                            <td>{item.customerName}</td>
                            <td>{item.amount}</td>
                            {/* <td>
                            {item.data2.map((item2)=>(

                                <tr>
                                    <td>{item2.name}</td>
                                    <td>{item2.amount}</td>
                                </tr>

                            ))}                   
                            
                            
                            </td>                               */}
                           </tr>
                         
                        
                        )
                       

                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Print;
