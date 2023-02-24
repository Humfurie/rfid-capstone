import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Link from "next/link";
import AdminNavbar from "../../../../components/AdminComponents/AdminNavbar";
import UsersDataTable from "../../../../components/DataTable/UsersDataTable";
import Header from "../../../../components/Header";
import SearchBar from "../../../../components/SearchBar";
import DisplayInformationContent from "../../../../components/ViewsComponents/UserView";

const index = (props: any) => {
    const { users } = props

    return (
        <div>
            <div >
                <Header />
                <div className="flex max-h-full w-screen">
                    <div>
                        <AdminNavbar />
                    </div>
                    <DisplayInformationContent users={users}/>
                </div>

            </div>
        </div>
    );
}

export default index;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { params } = context

    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/employee/${params?.id}`)

    return {
        props: {
            users: data.data
        }
    }
}