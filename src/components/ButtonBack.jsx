import { ChevronLeftIcon } from "lucide-react"

function ButtonBack() {
    return ( 
        <div>
            <button className="p-2 text-white bg-indigo-300 rounded-md">
                <a href="/">
                    <ChevronLeftIcon />
                </a>
            </button>
        </div>
    )
}

export default ButtonBack