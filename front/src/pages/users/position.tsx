import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useContext } from "react";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import PositionDataTable from "../../components/UsersComponents/DataTable/PositionDataTable";
import { FormContext } from "../../lib/FormContext";
import MyButton from "../../lib/partials/MyButton";

const position = (props: any) => {
    const { positionSubmit, setPosition } = useContext(FormContext)
    const { position } = props
    console.log(position)
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
                <AdminNavbar />
                <div className="flex flex-col w-screen">
                    <div className="flex flex-row top-status-content ml-6 mt-6 w-full">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                positionSubmit()
                            }}
                        >
                            <input
                                type="text"
                                onChange={(e) => {
                                    setPosition(e.target.value)
                                }}
                            />


                            <MyButton
                                type="submit"
                                label="Add Position"
                                className="text-black bg-powderblue-shades10% hover:bg-powderblue-shades20% font-medium rounded-r-lg text-sm px-4 py-2 "
                            />
                        </form>

                    </div>
                    <div className="flex flex-row top-status-content ml-6 mt-6 w-full">
                       
                        <PositionDataTable position={position} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default position;

export const getServerSideProps: GetServerSideProps = async () => {
    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/position`)
    console.log(data)
    return {
        props: {
            position: data.data

        }
    }
}
