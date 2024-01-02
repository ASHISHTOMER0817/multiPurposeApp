import axios from "axios";


export default async function fetchedData (url: string) {
      try {
            const res = await axios.get(url)
            const response = res.data
            console.log(response)
            return response
      }catch(error: any){
            console.log(`can't get data: ${error.message}`)
      }
}