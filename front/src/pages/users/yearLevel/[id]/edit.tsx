import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import { Modal } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { Style } from "../../../../lib/Style";
import MyButton from "../../../../lib/partials/MyButton";

const YearLevelEdit = (props: any) => {

    const { handleCloseYearLevel, editOpen, yearLevel, key } = props

    const router = useRouter()

    const [form, setForm] = useState({
        yearLevel: yearLevel.year
    })

    const formOnChange = (value: any, column: string) => {
        setForm((prev: any) => {
            return { ...prev, [column]: value }
        })
    }

    const yearlevelUpdate = async () => {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/year_level/edit/${yearLevel.id}`, {
            year: form.yearLevel
        })
        router.push("/users/year_level")

    }

    return (
        <Modal key={key}
            opened={editOpen}
            onClose={() => handleCloseYearLevel(yearLevel.id)}>
            <div className="flex w-full">
                <div className={`w-full p-2`}>
                    <h4>Update Year Level</h4>

                    <form onSubmit={(e) => {
                        e.preventDefault()
                        yearlevelUpdate()
                    }}>
                        <div className={Style.inputDiv}>
                            <label htmlFor="" className={Style.label}>
                                Year Level:
                            </label>
                            <input
                                type="text"
                                className={Style.inputType}
                                value={form.yearLevel}
                                onChange={(e) => {
                                    formOnChange(e.target.value, "yearLevel");
                                }}
                            />
                        </div>

                        <div className="flex gap-5">
                            <button type="button" onClick={e => {
                                handleCloseYearLevel(yearLevel.id)
                            }}>
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

export default YearLevelEdit;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { params } = context

    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/year_level/${params?.id}`)
    return {
        props: {
            yearLevel: data.data

        }
    }
}