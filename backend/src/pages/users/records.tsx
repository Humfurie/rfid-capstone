import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import Header from "../../components/Header";
import RecordsList from "../../components/UsersComponents/Records/RecordsList";

const records = (props: any) => {
    const { records } = props
    return (
        <div>
            <Head>
                <title>Records-Students</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>
            <div>
                <Header />
            </div>
            <div className="inline-flex">
                <AdminNavbar />
                <RecordsList records={records} />
            </div>
        </div>
    );
}
export default records;

export const getServerSideProps: GetServerSideProps = async () => {

    const data = axios.get(``)

    return {
        props: {
            records: data
        }
    }
}