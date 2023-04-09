import axios from "axios"
import { GetStaticProps } from "next"
import { useEffect, useState } from "react"

const Arduino = (props: any) => {

    const { data } = props

    return (
        <>
        </>
    )
}
export default Arduino

export const getStaticProps: GetStaticProps = async () => {
    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rfid`)
    return {
        props: {
            data: data.data
        }
    }
}