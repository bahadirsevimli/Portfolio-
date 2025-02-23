import axios from "axios";
import { useEffect, useState } from "react"
import database from "../assets/dataBase";




const useFetchData = () => {

    const language = localStorage.getItem("language");

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.post('https://reqres.in/api/workintech', {database})
        .then((response) => language === "english" ? setData(response.data.database.en) : setData(response.data.database.tr)) 
        .catch((err) => console.error(err));
    },[])
    return {data}
}
export default useFetchData;