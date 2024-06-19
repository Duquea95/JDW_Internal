import CSVReader from "../components/CSVReader";
import Collection from "../components/Collection";
import { getProducts } from "../../services/productServices";

export default async function Home() {
  const products = await getProducts()

  console.log(products)

  return (
    <main>
      <div>
        <span>Welcome Home</span>
      </div>
      <div>
        <CSVReader />
        {/* <button onClick={await getProducts()}>Load Items</button> */}
      </div>
      <Collection products={products}/>
    </main>
  );
}
