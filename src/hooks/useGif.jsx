import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GIFFY_API_KEY;

export default function useGif(tag){
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    async function fetchApi(tag) {
        setLoading(true);
        try {
            const response = await axios.get(tag ? tagurl : url);
            const imageSource = response.data.data.images.downsized_large.url;
            setGif(imageSource);
        } catch (error) {
            console.error("Error fetching random gif:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchApi('car');
    },[])

    return { gif, loading, fetchApi };
}
