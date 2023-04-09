import axios from "axios"
import { useEffect, useState } from "react"

const Arduino = () => {
    const [data, setData] = useState<any>(null)
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rfid`).then(res => setData(res))
        }
        fetchData()
    }, [])

    return (
        <>
        </>
    )
}
export default Arduino