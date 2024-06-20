import { createAuthHeader } from "../lib/createAuthHeader"

export async function getProducts(){
    console.log('calling getProduct')
    const options = createAuthHeader('GET', null, null)
    const res = await fetch('http://localhost:8001/products/getProducts', options)

    if(res.status == 200) return  await res.json()
    else return null
}

export async function deleteProducts(){
    const options = createAuthHeader('Delete', null, null)
    const res = await fetch('http://localhost:8001/products/deleteProducts', options)

    return
}