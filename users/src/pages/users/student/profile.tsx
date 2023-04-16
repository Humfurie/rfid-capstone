import Head from "next/head";
import StudentHeader from "../../../components/StudentComponents/StudentHeader";
import ParentHeader from "../../../components/ParentComponents/ParentHeader";
import Welcome from "../../../components/Welcome";
import StudentProfileContent from "../../../components/StudentComponents/StudentProfileContent";

const Profile = () => {
    return (
        <div className="flex w-full h-screen">
            <Head>
                <title>Profile</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>

            <div className="flex flex-col w-full">
                <StudentHeader />
                <div className="flex flex-col h-full bg-gray-200   ">
                    <div className="flex flex-col justify items-center h-full w-full pr-20 pl-20 pt-10 ">
                        <div className="w-full bg-white rounded-2xl shadow-xl ">
                            <div className=" text-center ">
                                <StudentProfileContent />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Profile;