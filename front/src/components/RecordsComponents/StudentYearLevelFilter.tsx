import { BsSearch } from "react-icons/bs";
import MyButton from "../../lib/partials/MyButton";
import MyInput from "../../lib/partials/MyInput";

const StudentYearLevelFilter = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative w-full inset-y-0 right-40">

                    <select className=" p-2  w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-powderblue-shades10% 
                        focus:outline-none focus:ring focus:ring-powderblue-shades10% "
                        onChange={e => {
                            
                        }}
                        >
                        <option value="">---Select School Year---</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 7">Grade 8</option>
                        <option value="Grade 7">Grade 9</option>
                        <option value="Grade 7">Grade 10</option>
                        <option value="Grade 7">Grade 11</option>
                        <option value="Grade 7">Grade 12</option>
                    </select>
                    <MyButton
                        type="submit"
                        className="absolute top-0 right-0 p-1.5 text-md font-sm text-black bg-powderblue-shades10% rounded-r-lg border border-powderblue-shades10% hover:bg-powderblue-shades20% focus:ring-4 focus:outline-none focus:ring-powderblue-shades20%"
                        label="Filter" />

                </div>

            </form>
        </div>
    );
}

export default StudentYearLevelFilter;