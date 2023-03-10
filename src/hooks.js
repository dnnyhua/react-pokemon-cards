import { useState } from "react";
import uuid from "uuid";
import axios from "axios";



const useFlip = (initialState) => {
    const [flipped, setFlipped] = useState(initialState);
    const flipCard = () => {
        setFlipped(faceUp => !faceUp)
    }
    return [flipped, flipCard]
}


const useAxios = (baseUrl) => {
    const [responses, setResponses] = useState([]);
    let response
    const addCard = async (urlPath) => {

        if (urlPath) {
            console.log(urlPath)
            response = await axios.get(`${baseUrl}${urlPath}`);
        }
        else {
            response = await axios.get(baseUrl);
        }






        setResponses(responses => [...responses, { ...response.data, id: uuid() }]);

    }
    return [responses, addCard]
}





export { useFlip, useAxios }





