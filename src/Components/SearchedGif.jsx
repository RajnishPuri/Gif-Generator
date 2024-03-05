import Spinner from "./spinner";
import useGif from "../hooks/useGif";
import { useState } from "react";

export default function Searchedgif() {
    const [tag, setTag] = useState('car');
    const { gif, loading, fetchApi } = useGif(tag);

    return (
        <div className="w-[850px] bg-green-500 mt-10 rounded-lg">
            <h1 className="w-full text-center p-3 text-3xl font-bold underline">{tag} Gif</h1>
            <div className="flex justify-center mb-4">
                {loading ? <Spinner/> : <img src={gif} alt="Random Gif" />}
            </div>
            <div className="flex justify-center  items-center mb-5">
                <label htmlFor="search" className=" font-semibold mr-4"> Search Gif</label>
                <input className=" p-1 rounded-md" id="search" type="text" onChange={(e) => setTag(e.target.value)} />
            </div>
            <div className="flex justify-center">
                <button className="text-lg font-medium w-10/12 bg-orange-400 text-center mb-5" onClick={()=>fetchApi(tag)}>
                    Generate
                </button>
            </div>
        </div>
    );
}