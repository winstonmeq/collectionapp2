import React from 'react';
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import MyPage from './pagePrint';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const PrintButton = ({ contentRef }) => {

    const handlePrint = () => {

      html2canvas(contentRef.current).then((canvas) => {

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
       pdf.addImage(imgData, 'PNG', 10, 10, 0, 0); // A4 size
    
       pdf.save('my-pdf-file.pdf');

      });
    };


    function generatePDF() {
        var doc = new jsPDF();
        doc.autoTable({
          head: [['Name', 'Age', 'City']],
          body: [
            ['John', '25', 'New York'],
            ['Jane', '30', 'London'],
            ['Bob', '35', 'Paris']
          ],
          startY: 20 // Set the start position for the table
        });
        doc.save('table.pdf');
      }
  
    return (
<>
<button onClick={handlePrint}>Save PDF</button>
      

</>
    
    );
  };



const PrintPDF = () => {
  


    const contentRef = React.useRef();

    return (
      <div>
        <MyPage ref={contentRef} />
        <PrintButton contentRef={contentRef} />
      </div>
    );







}

export default PrintPDF;