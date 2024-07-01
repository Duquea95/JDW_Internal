"use client"
import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productServices";
import Image from "next/image";
import { formatNumberWithCommas } from "../../../lib/hooks";

export default function Collection({products}){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://jdw-api-e99ec4f472ac.herokuapp.com/csv-data'); // replace with your Heroku app URL
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
          } catch (error) {
            setError(error.message);
          }
        };
    
        fetchData();
      }, []);

      if (error) {
        return <div>Error: {error}</div>;
    }

    // function splitAfterDotCom(url) {
    //     const splitString = '.com';
    //     const index = url.indexOf(splitString) + splitString.length;
    //     const partAfterDotCom = url.substring(index);
    //     return partAfterDotCom;
    // }
    console.log(data)

    return(
    <div>
        <div>
            <table> 
                <thead>
                    <tr>
                        <th className={"styled-cell"}>Image</th>
                        <th className={"styled-cell"}>Stock #</th>
                        <th className={"styled-cell"}>Brand</th>
                        <th className={"styled-cell"}>Model</th>
                        <th className={"styled-cell"}>Size / P. Line</th>
                        <th className={"styled-cell"}>Plain / Diamond</th>
                        <th className={"styled-cell"}>Serial No.</th>
                        <th className={"styled-cell"}>Bezel</th>
                        <th className={"styled-cell"}>Case</th>
                        <th className={"styled-cell"}>Dial</th>
                        <th className={"styled-cell"}>Strap/Bracelet</th>
                        <th className={"styled-cell"}>Diamond</th>
                        <th className={"styled-cell"}>Metal type</th>
                        <th className={"styled-cell"}>Papers / Card</th>
                        <th className={"styled-cell"}>Screws</th>
                        <th className={"styled-cell"}>Year</th>
                        <th className={"styled-cell"}>Selling Price</th>
                        <th className={"styled-cell"}>Hi-Res Content</th>

                        {/* 
                        <th>Links</th>
                        <th>Box</th>
                        <th>Notes</th>
                        <th>Assets</th> */}
                    </tr>
                </thead>
                {data.map((item, index) => (
                // <li key={index}>{JSON.stringify(item)}</li>    
                <tr key={`${item['Stock #']}__tableRow`}>
                    <td className="styled-cell">
                        {/* <Image src={splitAfterDotCom(item['Image'])} width={50} height={50} /> */}
                        <Image src={item['Image']} width={150} height={50} />
                    </td>
                    <td className="styled-cell">{item['Stock #']}</td>
                    <td className="styled-cell">{item['Brand']}</td>
                    <td className="styled-cell">{item['Model']}</td>
                    <td className="styled-cell">{item['Size/P. Line']}</td>
                    <td className="styled-cell">{item['Plain / Dia.']}</td>
                    <td className="styled-cell">{item['Serial No.']}</td>
                    <td className="styled-cell">{item['Bezel']}</td>
                    <td className="styled-cell">{item['Case']}</td>
                    <td className="styled-cell">{item['Dial']}</td>
                    <td className="styled-cell">{item['Strap/Bracelet']}</td>
                    <td className="styled-cell">{item['Diamond']}</td>
                    <td className="styled-cell">{item['Metal type']}</td>
                    <td className="styled-cell">{item['Box/Papers']} / {item['Card']}</td>
                    <td className="styled-cell">{item['Screws']}</td>

                    <td className="styled-cell">{item['Year']}</td>
                    <td className="styled-cell">${formatNumberWithCommas(item['Selling Price'])}</td>
                    {/* <td className="styled-cell">{item.status='true'? 'Available' : 'Sold'}</td> */}
                    <td className="styled-cell">
                        <a>Click for Images</a> <br/>
                        <a>Click for Videos</a>
                    </td> 
                </tr>
            ))}</table>
        </div>
    </div>        
)}
            // <table className="product-tables">
            //     <thead>
            //         <tr>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Image</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Stock #</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Brand</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Size</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Model</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Serial No.</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Dial</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Strap/Bracelet</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Metal type</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Bezel</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Diamond</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Case</th>
            //             {/* <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Box</th> */}
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Papers</th>
            //             {/* <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Card</th> */}
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Screws</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Year</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Wholesale Price</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Retail Price</th>
            //             <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Status</th>

            //             {/* 
            //             <th>Links</th>
            //             <th>Box</th>
            //             <th>Notes</th>
            //             <th>Assets</th> */}
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {products.map((product) => {return(
            //             <tr key={`${product._id}__tableRow`}>
            // <td>image</td>
            //                 <td>{product.stockNumber}</td>
            //                 <td>{product.brand}</td>
            //                 <td>{product.reference}</td>
            //                 <td>{product.reference}</td>
            //                 <td>{product.publicSerial}</td>
            //                 <td>{product.dial}</td>
            //                 <td>{product.braceletType}</td>
            //                 <td>{/* Metal */}</td>
            //                 <td>{/* Bezel */}</td>
            //                 <td>{/* Diamond */}</td>
            //                 <td>{/* Case */}</td>
            //                 <td>{product.paper}</td>
            //                 <td>{/* Screw*/}</td>

            //                 <td>{product.paperDate}</td>
            //                 <td>${product.wholesalePrice}</td>
            //                 <td>${product.retailPrice}</td>
            //                 <td>{product.status='true'? 'Available' : 'Sold'}</td>
            //                 <td>
            //                     <a>Click for Images</a> <br/>
            //                     <a>Click for Videos</a>
            //                 </td>
            //             </tr>
            //         )})}
            //     </tbody>
            // </table>