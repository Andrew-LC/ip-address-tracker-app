import { FaGreaterThan } from "react-icons/fa"
import { useState } from "react"
import { getGeoData } from "../utils/api"
import { mapState, positionState } from "../recoil/states"
import { useRecoilState } from 'recoil';


export default function SearchBar() {
    const [temp, setTemp] = useState("")
    const [data, setData] = useRecoilState(mapState)
    const [position, setPosition] = useRecoilState(positionState)

    const handleChange = (e: any) => {
        setTemp(e.currentTarget.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        getGeoData(temp).then((response: Promise<unknown>) => {
            if (response == false) {
                window.alert("Wrong Input");
            } else {
                setData(response)
                console.log(response)
                const position = [response.lat, response.lng];
                setPosition(position)
            }
        })
    }

    return (
        <div className="w-[90%] flex lg:w-[50%]">
            <input className="rounded-l-lg w-[90%] p-3 pl-4 text-gray-dark cursor-pointer focus:outline-0"
                onChange={handleChange}
                placeholder="Search for any IP address or domains" />
            <button
                className="w-[10%] rounded-r-lg bg-black text-white p-2 font-extrabold text-xl flex justify-center items-center hover:bg-gray-dark"
                onClick={handleSubmit}>
                <FaGreaterThan />
            </button>
        </div>
    );
}
