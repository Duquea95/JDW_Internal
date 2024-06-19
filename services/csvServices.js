import { createAuthHeader } from "../lib/createAuthHeader"

export async function csvUpload(data){
    const options = createAuthHeader('POST', null, data)
    const res = await fetch('http://localhost:8000/csv/upload', options)

    return 
}