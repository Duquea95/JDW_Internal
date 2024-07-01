"use server"
import CSVReader from "../components/CSVReader";
import Collection from "../components/Collection";
import Logo from "../../public/Logo-PNG.png";
import { deleteProducts, getProducts } from "../../services/productServices";
import Button from "@/components/Button";
import Image from "next/image";


export default async function Home() {

  return (
    <main>
      <div>
        <Image src={Logo.src} width={150} height={150}/>
        <span>Welcome To JD Watch</span>
      </div>

      {/* <Button /> */}
      {/* <CSVReader /> */}
      {/* <button onClick={await getProducts()}>Load Items</button> */}
      <Collection />
    </main>
  );
}
