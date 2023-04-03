import Head from "next/head";
import Header from "../../../../components/Header";
import AdminNavbar from "../../../../components/AdminComponents/AdminNavbar";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import EditPosition from "../../../../components/Edit/EditPosition";
import { Modal } from "@mantine/core";

const PositionEdit = (props: any) => {

    const { setEditOpen, editOpen, position } = props

    return (
        <Modal key={position.id}
        opened={editOpen}
        onClose={() => setEditOpen(false)}>

        
        {/* <div className="flex h-screen">
            <Head>
                <title>Edit Position</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>
            <div className="flex flex-col max-h-full">
                <Header />
                <div className="flex h-full bg-gray-200">
                    <div className="h-full">
                        <AdminNavbar />
                    </div> */}
                    <div className="flex w-full">
                        <div className={`w-full p-2`}>
                            <EditPosition position={position} />
                        </div>
                    </div>


                {/* </div>

            </div>
        </div> */}
        </Modal>
    );
}

export default PositionEdit;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { params } = context

    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/position/${params?.id}`)
    return {
        props: {
            position: data.data

        }
    }
}