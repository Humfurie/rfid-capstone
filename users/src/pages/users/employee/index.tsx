import Head from "next/head";
import EmployeeHeader from "../../../components/EmployeeComponents/EmployeeHeader";


const EmployeeDashboard = () => {
    return (
        <div className="flex w-full h-screen">
            <Head>
                <title>Employee</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>

            <div className="flex flex-col w-full">
                <EmployeeHeader/>
                <div className="flex flex-col h-full bg-gray-200   ">
                    <div className="flex flex-col justify items-center pt-10 pr-20 pl-20 ">
                        <div>
                            Your recent activities
                        </div>
                        <div className="w-full bg-white rounded-2xl shadow-xl ">
                            <div className="grid grid-cols-2 text-center">
                                <div className="">
                                    INS
                                    <div className="border border-spacing-1">  
                                        in
                                    </div>
                                </div>
                                <div>
                                    OUTS
                                    <div className="border border-spacing-1">  
                                        out
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default EmployeeDashboard;