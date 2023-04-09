import Head from "next/head";
import AdminNavbar from "../../../../components/AdminComponents/AdminNavbar";
import axios from "axios";
import { GetServerSideProps } from "next";



const index = (props: any) => {

    // const { yearLevel } = props
    return (
        <div>
            <div>
                <Head>
                    <title>Positions</title>
                    <meta name="description" content="Created by streamline" />
                    <link rel="icon" href=".../img/ais-rft-logo.jpg" />
                </Head>
            </div>
            <div className="inline-flex">
                <AdminNavbar/>
            </div>
        </div>
    );
}

export default index;

// export const getServerSideProps: GetServerSideProps = async () => {

//     const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/year_level`)

//     return {
//         props: {
//             yearLevel: data.data
//         }
//     }
// }