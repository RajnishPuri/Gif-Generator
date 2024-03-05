import Spinner from "./spinner";
import useGif from "../hooks/useGif";

export default function Randomgif() {

    const {gif, loading, fetchApi} = useGif();

    return (
        <div className="w-[850px] bg-green-500 mt-10 rounded-lg">
            <h1 className="w-full text-center p-3 text-3xl font-bold underline">A Random Gif</h1>
            <div className="flex justify-center mb-4">
                {loading ? <Spinner/> : <img src={gif} alt="Random Gif" />}
            </div>
            <div className="flex justify-center">
                <button className="text-lg font-medium w-10/12 bg-orange-400 text-center mb-5" onClick={()=>fetchApi()}>
                    Generate
                </button>
            </div>
        </div>
    );
}
