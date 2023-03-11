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

    const addCard = async () => {
        response = await axios.get(baseUrl)
        setResponses(responses => [...responses, { ...response.data, id: uuid() }]);

    }

    const addCardWithPath = async (urlPath) => {
        response = await axios.get(`${baseUrl}${urlPath}`);
        setResponses(responses => [...responses, { ...response.data, id: uuid() }]);
    }
    return [responses, addCard, addCardWithPath]
}


export { useFlip, useAxios }





