"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { adjustPrice, formatNumberWithCommas } from "../../../lib/hooks";

export default function Collection({}){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [brandFilter, setBrandFilter] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(
                "https://jdw-api-e99ec4f472ac.herokuapp.com/csv-data"
              ); // replace with your Heroku app URL
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              const result = await response.json();
              setData(result);
              setFilteredData(result);
              // Extract unique brands
              const uniqueBrands = [...new Set(result.map((item) => item["Brand"]))];
              setBrands(uniqueBrands);
            } catch (error) {
              setError(error.message);
            }
        };
      
        fetchData();
      }, []);

      useEffect(() => {
        let filtered = [...data];
    
        // Filter by brand
        if (brandFilter) {
          filtered = filtered.filter(
            (item) => item["Brand"].toLowerCase() === brandFilter.toLowerCase()
          );
        }
    
        // Sort data
        if (sortOption) {
          if (sortOption === "alphabetically") {
            filtered.sort((a, b) => a["Brand"].localeCompare(b["Brand"]));
          } else if (sortOption === "price-asc") {
            filtered.sort(
              (a, b) =>
                parseFloat(a["Selling Price"].replace(/,/g, "")) -
                parseFloat(b["Selling Price"].replace(/,/g, ""))
            );
          } else if (sortOption === "price-desc") {
            filtered.sort(
              (a, b) =>
                parseFloat(b["Selling Price"].replace(/,/g, "")) -
                parseFloat(a["Selling Price"].replace(/,/g, ""))
            );
          }
        }
    
        setFilteredData(filtered);
      }, [brandFilter, sortOption, data]);
    

      if (error) {
        return <div>Error: {error}</div>;
    }

    console.log(data)

    return(
    <div>
        <div>
            <div>
                <label> Filter by brand:
                <select
                    value={brandFilter}
                    onChange={(e) => setBrandFilter(e.target.value)}
                >
                    <option value="">All Brands</option>
                    {brands.map((brand) => (
                    <option key={brand} value={brand}>
                        {brand}
                    </option>
                    ))}
                </select>
                </label>
                <label>
                Sort by:
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">None</option>
                    <option value="alphabetically">Alphabetically</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </label>
            </div>
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
                {filteredData.map((item, index) => (
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
                    <td className="styled-cell">${formatNumberWithCommas(adjustPrice(item))}</td>
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

// const imagePreview = () => {
//     return(
//         <div style={{position:}}>

//         </div>
//     )
// }