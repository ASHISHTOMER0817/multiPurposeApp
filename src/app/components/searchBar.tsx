import fetchedData from "./fechData"
import Input from "./input"


export default async function SearchBar (values:string) {
      const data = await fetchedData(
		"https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json"            
	)
      if(values.toLowerCase === data.name.toLowerCase) {
            return (
                  
            )
      }

}