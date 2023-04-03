import { useRouter } from "next/router";
import { useState } from "react";
import { Style } from "../../lib/Style";
import MyButton from "../../lib/partials/MyButton";
import axios from "axios";

const EditPosition = (props: any) => {
    const { position } = props;
    // console.log('this is props', props)
    const router = useRouter()

    const [form, setForm] = useState({
        position: position.position
    })

    const formOnChange = (value: any, column: string) => {
        setForm((prev: any) => {
            return { ...prev, [column]: value }
        })
    }
    console.log("this form in position", form)

    const positionUpdate = async () => {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/position/edit/${position.id}`, {
            position: form.position
        })
        router.push("/users/position/")

    }
    return (
        <div>
            <div>
                <div>

                    {/* // <div className="w-full">
            //     <div className="w-full bg-white rounded-2xl mx-auto shadow-xl p-2">
            //         <div className="w-full p-2 bg-white mx-auto shadow-lg rounded-lg"> */}
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
                        <div className={Style.registerBtn}>
                            <MyButton type="submit" label="Save Changes"  />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default EditPosition;

// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
//     const { params } = context

//     const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/position/${params?.id}`)
//     return {
//         props: {
//             position: data.data

//         }
//     }
// }