import React from "react";
import fetchedData from "../components/fechData";
import Header from "../components/header";
import Input from "../components/input";

export default async function UniversityList() {
	const data = await fetchedData(
		"https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json"            
	)
      let values: string;
      const compare = () => {
            if(values.toLowerCase === data.name.toLowerCase) {
            for(let i=0; i<data.length; i++) {
                  
            }   
            }
      }
      
	return (
		<div>
			<Header/>
                  {Input(values)}
                  {data.map(({name }) => {
                        return (
                              <div>
                              {name}
                              </div>
                        )
                  })}
		</div>
	);
}
