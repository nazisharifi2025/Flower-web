import React, { useEffect, useState } from 'react'
const ApiKey = "sk-KYoQ68f356437b43b12624";
const url = `https://perenual.com/api/v2/species/details/1?key=${ApiKey}`;
function Articles() {
    type Articals = [
  id:string,
  title:string,
  description: string,
  content: string,
  url:string,
  publishedAt: string,
]
    const [plant,setPlant] = useState<Articals[]>([]);
    
    useEffect(()=>{
        async function fetchData() {
          const respons= await fetch(url);
          const date = await respons.json();
          setPlant(date);
          console.log(date.results);
        }
        fetchData();
        
    },[])
  return (
    <div>Articles</div>
  )
}

export default Articles