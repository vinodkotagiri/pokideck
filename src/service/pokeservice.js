import axios from "axios"
const baseUrl=`https://pokeapi.co/api/v2`


export function getDetailsById(id){
    return new Promise((resolve,reject)=>{
        let url=`${baseUrl}/pokemon/${id}`
        axios.get(url)
        .then(res=>resolve(res.data))
        .catch(err=>{
            reject(err.message)})
    })
}

export function getAllPokemon(offset=0,limit=100){
    return new Promise((resolve,reject)=>{
        let url=`${baseUrl}/pokemon/`
        if(offset){
            url=`${url}?offset=${offset}`
        }
        url=`${url}?limit=${limit}`
        axios.get(url)
        .then(res=>resolve(res.data))
        .catch(err=>{
            reject(err.message)})
    })
}