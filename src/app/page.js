import CSVReader from "../components/CSVReader";
import Collection from "../components/Collection";
import { deleteProducts, getProducts } from "../../services/productServices";
import Button from "@/components/Button";


export default async function Home() {

  return (
    <main>
      <div>
        <span>Welcome Home</span>
      </div>

      {/* <Button /> */}
      {/* <CSVReader /> */}
      {/* <button onClick={await getProducts()}>Load Items</button> */}
      <Collection />
    </main>
  );
}
