"use client"
import { deleteProducts } from "../../../services/productServices"

const Button = () => {
    const deleteAll = async() => await deleteProducts()

    return <button onClick={deleteAll}>Delete</button>
}

export default Button