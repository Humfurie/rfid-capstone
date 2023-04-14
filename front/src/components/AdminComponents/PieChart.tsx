import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from "axios"
import useSWR from 'swr'


ChartJS.register(ArcElement, Tooltip, Legend);


export function PieChart(props: any) {
    const { data, error, isLoading } = props
    // const fetcher = (url: any) => axios.get(url)
    // const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/rfid/show`, fetcher, { refreshInterval: 1000 })

    if (error) return <> ...error </>
    if (isLoading) return <> ...loading </>

    const chart = {

        labels: data?.data[1],
        datasets: [
            {
                label: '# of Students',
                // data: [grade7, grade8, grade9, grade10, grade11Map.length, grade12],
                data: data?.data[3],
                // data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ maxHeight: '1000px', maxWidth: '1000px', minHeight: '100px', minWidth: '100px' }}>
            <Doughnut
                data={chart}
                options={{
                    responsive: true, // Enable responsiveness
                    maintainAspectRatio: true, // Prevent maintaining aspect ratio
                }}
            />
        </div>
    )
}