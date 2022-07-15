import axios from "axios";

export async function getShips(){
    let response = await axios.get("https://swapi.dev/api/starships/")
    console.log(response.data.results)
    return response.data.results
}