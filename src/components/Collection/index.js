"use client"
import { getProducts } from "../../../services/productServices";

export default function Collection({products}){
    return(
    <div>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <table className="product-tables">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Image</th>
                        <th>Stock #</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Serial No.</th>
                        <th>Dial</th>
                        <th>Bracelet</th>
                        <th>Links</th>
                        <th>Papers</th>
                        <th>Date</th>
                        <th>Box</th>
                        <th>Wholesale Price</th>
                        <th>Notes</th>
                        <th>Assets</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {return(
                        <tr key={`${product._id}__tableRow`}>
                            <td>{product.status='true'? 'Available' : 'Sold'}</td>
                            <td>image</td>
                            <td>{product.stockNumber}</td>
                            <td>{product.brand}</td>
                            <td>{product.reference}</td>
                            <td>{product.publicSerial}</td>
                            <td>{product.dial}</td>
                            <td>{product.braceletType}</td>
                            <td></td>
                            <td>{product.paper}</td>
                            <td>{product.paperDate}</td>
                            <td>N/A</td>
                            <td>${product.wholesalePrice}</td>
                            <td></td>
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