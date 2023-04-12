import Head from "next/head";
import Tabs from "../../../components/Tabs";
import StudentHeader from "../../../components/StudentComponents/StudentHeader";

const Activities = () => {
   
    return (
        <div className="flex w-full h-screen">
            <Head>
                <title>Your Activities</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>

            <div className="flex flex-col w-full">
                <StudentHeader/>
                <div className="flex flex-col h-full bg-gray-200   ">
                   <div>
                    <Tabs/>
                   </div>
                    <div className="flex flex-col justify items-center pt-10 pr-20 pl-20 ">
                        <div className="w-full bg-white rounded-2xl shadow-xl ">
                            <div className=" text-center">
                                list
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Activities;