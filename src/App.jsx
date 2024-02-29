import Header from "./components/Header";
import Card from './components/Card'
import { useEffect, useState } from "react";
import { getAllPokemon, getDetailsById } from "./service/pokeservice";
export default function App() {
  const [offset,setOffset]=useState(0)
  const [limit,setLimit]=useState(35)
  const [pokes,setPokes]=useState([])

  useEffect(()=>{
    getAllPokemon(offset,limit).then(res=>{
      setPokes(res.results)
    })
  },[offset,limit])

  console.log(pokes)
  return (
    <div className='bg-[#444444] w-full h-auto'>
      <Header/>
      <div className="py-12 px-6 w-full items-center justify-center  flex flex-wrap gap-4">
      {pokes&& pokes.map(poke=>(<Card key={poke.name} name={poke.name} url={poke.url}/>))}
      </div>
    </div>
  )
}
