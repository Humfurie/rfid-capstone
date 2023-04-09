import axios from "axios"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useEffect, useMemo, useState } from "react"
import useSWR from 'swr'
import ActivityDatatable from "./includes/ActivityDatatable"

const index = () => {

    const fetcher = (url: any) => axios.get(url)
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/rfid/show`, fetcher, { refreshInterval: 1000 })

    console.log(data?.data)
    if (error) return <> ...error </>
    if (isLoading) return <> ...loading </>
    return (
        <>
           <ActivityDatatable data={data?.data} />
        </>
    )
}
export default index