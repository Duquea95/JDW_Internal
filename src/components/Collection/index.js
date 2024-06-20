"use client"
import { getProducts } from "../../../services/productServices";

export default function Collection({products}){
    return(
    <div>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <table className="product-tables">
                <thead>
                    <tr>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Image</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Stock #</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Brand</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Size</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Model</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Serial No.</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Dial</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Strap/Bracelet</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Metal type</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Bezel</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Diamond</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Case</th>
                        {/* <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Box</th> */}
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Papers</th>
                        {/* <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Card</th> */}
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Screws</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Year</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Wholesale Price</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Retail Price</th>
                        <th style={{maxWidth: 200, minWidth: 150, width: '100%'}}>Status</th>

                        {/* 
                        <th>Links</th>
                        <th>Box</th>
                        <th>Notes</th>
                        <th>Assets</th> */}
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {return(
                        <tr key={`${product._id}__tableRow`}>
                            <td>image</td>
                            <td>{product.stockNumber}</td>
                            <td>{product.brand}</td>
                            <td>{product.reference}</td>
                            <td>{product.reference}</td>
                            <td>{product.publicSerial}</td>
                            <td>{product.dial}</td>
                            <td>{product.braceletType}</td>
                            <td>{/* Metal */}</td>
                            <td>{/* Bezel */}</td>
                            <td>{/* Diamond */}</td>
                            <td>{/* Case */}</td>
                            <td>{product.paper}</td>
                            <td>{/* Screw*/}</td>

                            <td>{product.paperDate}</td>
                            <td>${product.wholesalePrice}</td>
                            <td>${product.retailPrice}</td>
                            <td>{product.status='true'? 'Available' : 'Sold'}</td>
                            <td>
                                <a>Click for Images</a> <br/>
                                <a>Click for Videos</a>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    </div>        
)}