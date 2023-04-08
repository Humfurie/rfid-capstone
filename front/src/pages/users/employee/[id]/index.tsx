import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import AdminNavbar from "../../../../components/AdminComponents/AdminNavbar";
import Header from "../../../../components/Header";
import UserView from "../../../../components/UsersComponents/Show/UserView";

const index = (props: any) => {
    const { user } = props

    return (
        <div className="flex h-screen w-screen bg-white">
            <div className="flex flex-col h-full w-full" >
                <Header />
                <div className="flex h-full w-full">
                    <div>
                        <AdminNavbar />
                    </div>
                    <UserView user={user}/>
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
            user: data.data
        }
    }
}