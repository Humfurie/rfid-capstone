import axios from "axios";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import Header from "../../components/Navigation";
import PositionTab from "../../components/Tabs/PositionTab";
import PositionDataTable from "../../components/UsersComponents/DataTable/PositionDataTable";


const position = (props: any) => {

    const { position } = props

    // const data = getPosition()
    // console.log(data)

    return (
        <div className="flex h-screen">
            <Head>
                <title>List of Positions</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>
            <div className="flex flex-col max-h-full">
                <Header />
                <div className="flex h-full bg-white">
                    <div className="h-full">
                        <AdminNavbar />
                    </div>
                    <div className="flex flex-col w-full">
                        <div>
                            <PositionTab />

                        </div>
                        <div className={`w-full p-2`}>
                            <PositionDataTable position={position} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
export default position;


export const getStaticProps: GetStaticProps = async () => {
    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/position`)
    return {
        props: {
            position: data.data

        },
        revalidate: 5
    }
}
