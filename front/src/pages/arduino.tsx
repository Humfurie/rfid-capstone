import axios from "axios"
import { useEffect } from "react"

const Arduino = () => {
    useEffect(() => {
        (async () => {
            const arduinoData = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/rfid`)
            console.log(arduinoData)
        })
    }, [])

    return (
        <>
            haw
        </>
    )
}
export default Arduino