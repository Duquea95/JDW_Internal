import CSVReader from "../components/CSVReader";
import Collection from "../components/Collection";
import { deleteProducts, getProducts } from "../../services/productServices";
import Button from "@/components/Button";
import { useEffect, useState } from "react";


export default async function Home() {
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

  return (
    <main>
      <div>
        <span>Welcome Home</span>
      </div>

      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
    </div>

      {/* <Button /> */}
      {/* <CSVReader /> */}
      {/* <button onClick={await getProducts()}>Load Items</button> */}
      {/* <Collection products={products}/> */}
    </main>
  );
}
