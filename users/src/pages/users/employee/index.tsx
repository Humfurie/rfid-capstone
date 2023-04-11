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
                <EmployeeHeader />
                <div className="flex h-full bg-gray-200  ">

                    <div>
                        content
                    </div>
                </div>
            </div>


        </div>
    );
}

export default EmployeeDashboard;