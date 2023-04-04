import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import { Modal } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { Style } from "../../../../lib/Style";
import MyButton from "../../../../lib/partials/MyButton";

const PositionEdit = (props: any) => {

    const { handleClosePosition, editOpen, position, key } = props

    const router = useRouter()

    const [form, setForm] = useState({
        position: position.position
    })

    const formOnChange = (value: any, column: string) => {
        setForm((prev: any) => {
            return { ...prev, [column]: value }
        })
    }
    // console.log("this form in position", form)

    const positionUpdate = async () => {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/position/edit/${position.id}`, {
            position: form.position
        })
        router.push("/users/position/")

    }

    return (
        <Modal key={key}
            opened={editOpen}
            onClose={() => handleClosePosition(position.id)}>
            <div className="flex w-full">
                <div className={`w-full p-2`}>
                    <h4>Update Position</h4>

                    <form onSubmit={(e) => {
                        e.preventDefault()
                        positionUpdate()
                    }}>
                        <div className={Style.inputDiv}>
                            <label htmlFor="" className={Style.label}>
                                Position:
                            </label>
                            <input
                                type="text"
                                className={Style.inputType}
                                value={form.position}
                                onChange={(e) => {
                                    formOnChange(e.target.value, "position");
                                }}
                            />
                        </div>

                        <div className="flex gap-5">
                            <button
                            onClick={(e) => {
                                handleClosePosition
                            }}
                            >
                                Cancel
                            </button>
                            <div>
                                <MyButton type="submit" label="Save Changes" />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
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