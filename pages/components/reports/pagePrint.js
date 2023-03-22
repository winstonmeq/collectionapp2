import React from 'react';

const MyPage = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
     

     <div className="receipt-details">
              <h1>Receipt</h1>
                <div className="receipt-detail">
                  <span className="label">Date:</span>
                  <span className="value">10/23/2023</span>
                </div>
                <div className="receipt-detail">
                  <span className="label">Total:</span>
                  <span className="value">500.00</span>
                </div>
              </div>
              <style jsx>{`
        @media print {
            /* Add your print styles here */
            body {
              font-size: 1.4vw; /* responsive font size */
            }
            h1 {
              font-size: 2vw; /* responsive font size */
              text-align: center;
            }
            table {
              width: 90vw; /* responsive table width */
            }
            td {
              font-size: 1.2vw; /* responsive font size */
            }
            /* ... */
          }

          // .receipt {
          //   display: flex;
          //   flex-direction: column;
          //   align-items: center;
          // }
          // .receipt-details {
          //   margin-top: 120px;
          //   border: 1px solid #000;
          //   padding: 20px;
          //   width: 80%;
          //   max-width: 600px;
          // }
          // .receipt-detail {
          //   display: flex;
          //   justify-content: space-between;
          //   margin-bottom: 10px;
          // }
          // .label {
          //   font-weight: bold;
          // }
          // .value {
          //   text-align: right;
          // }

      `}</style>



    </div>
  );
});

export default MyPage;