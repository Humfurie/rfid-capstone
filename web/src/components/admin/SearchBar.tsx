import { BsSearch } from "react-icons/bs";
import MyButton from "../lib/partials/MyButton";
import MyInput from "../lib/partials/MyInput";


const SearchBar = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative w-full left-full ml-60 ">
                    <MyInput type="search" onChange={(e: any) => {

                    }} id="search"
                        className=" p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-powderblue-shades10% 
                        focus:outline-none focus:ring focus:ring-powderblue-shades10% 
                         "
                        required
                    />
                    <button type="submit"

                        className="absolute top-0 right-0 p-2.5 text-md font-medium text-white bg-powderblue-shades10% rounded-r-lg border border-powderblue-shades10% hover:bg-powderblue-shades20% focus:ring-4 focus:outline-none focus:ring-powderblue-shades20%  ">
                        <BsSearch
                            className="text-black" />
                    </button>
                </div>
            </form>
            {/* <button type="submit"

className="absolute top-0 right-0 p-1.5 text-md font-medium text-black bg-powderblue-shades10% rounded-r-lg border border-powderblue-shades10% hover:bg-powderblue-shades20% focus:ring-4 focus:outline-none focus:ring-powderblue-shades20%  ">
Filter
</button> */}
        </div>
    );
}

export default SearchBar;