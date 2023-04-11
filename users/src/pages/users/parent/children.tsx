import Head from "next/head";
import ParentHeader from "../../../components/ParentComponents/ParentHeader";



const Children = () => {
    return (
        <div className="flex w-full h-screen">
            <Head>
                <title>Your Children</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>

            <div className="flex flex-col w-full">
                <ParentHeader />
                <div className="flex h-full bg-gray-200  ">

                    <div>
                        Children
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Children;