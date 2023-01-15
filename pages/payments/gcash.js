import { gcashurl } from "../../axios/gcash_request";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";



const Gcashpayment = () => {

    const [amount, setAmount] = useState(3300);


    
    const handleClick = () => {
        setAmount(222);
    }

return (
    <div>

 <button onClick={handleClick}> Update Amount </button>

<a 
        href={`https://getpaid.gcash.com/paynow?public_key=pk_c44cff53179adeee2c16cba56faa2e0d&amount=${amount}&fee=0&expiry=6&description=Payment for services rendered`} target="_blank" class="x-getpaid-button">
            <img src="https://getpaid.gcash.com/assets/img/paynow.png" alt="Pay Now"/>
        </a>
    </div>
)

}

export default Gcashpayment;