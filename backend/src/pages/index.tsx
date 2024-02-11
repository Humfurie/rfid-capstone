import Header from '../components/Header';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Style } from '../lib/Style';
import Sidebar from '../components/Sidebar';
import { useTheme } from '@mui/material/styles';
import { SetStateAction, useState } from 'react';
import Head from 'next/head';
import { PieChart } from '../components/AdminComponents/PieChart';
import ActivityDatatable from './users/activities/includes/ActivityDatatable';
import axios from 'axios'
import useSWR from 'swr'
import Pagination from "@mui/material/Pagination";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export default function Home() {

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const fetcher = (url: any) => axios.get(url)
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/rfid/show`, fetcher, { refreshInterval: 1000 })

  console.log("act hehe", data?.data)

  const itemsPerPage = 15
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil((data?.data[4] || []).length / itemsPerPage)
  const handleChangePage = (_event: any, newPage: SetStateAction<number>) => {
    setCurrentPage(newPage)
  }

  if (error) return <> ...error </>
  if (isLoading) return <> ...loading </>

  return (
    <div className={`flex-col ${Style.parentDiv}`}>

      <Head>
        <title>Index</title>
        <meta name="description" content="Created by streamline" />
        <link rel="icon" href=".../img/ais-rft-logo.jpg" />
      </Head>

      <div className={`${Style.mainContent}`}>

        <div>
          <Header open={open} handleDrawerOpen={handleDrawerOpen} />
        </div>
        <div>
          <Sidebar open={open} theme={theme} handleDrawerClose={handleDrawerClose} />
        </div>

        <div className='pt-16 w-full h-full'>
          <div className='grid grid-cols-2 gap-3'>

            <div className='grid grid-cols-2 gap-3'>
              <div className={`${Style.employeePopulationBg}`}>

                <div className='flex  justify-center'>
                  <div className='flex flex-col gap-5'>
                    <div>
                      <label htmlFor=" " className={`{${Style.label} font-extrabold text-2xl`}> EMPLOYEES</label>
                    </div>
                    <div>
                      <label htmlFor=" " className={`{${Style.label} font-extrabold text-xl`}>Total : {data?.data[7].length} </label>
                    </div>
                    <div>
                      <label htmlFor=" " className={`{${Style.label} font-extrabold text-xl`}>In :  {data?.data[6].length}</label>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>

              </div >
              <div className={`${Style.studentPopulationBg}`}>
                {/* <StudentPopulation /> */}
                <div className='flex  justify-center'>
                  <div className='flex flex-col gap-5'>
                    <div>
                      <label htmlFor=" " className={`{${Style.label} font-extrabold text-2xl`}> STUDENTS</label>
                    </div>
                    <div>
                      <label htmlFor=" " className={`{${Style.label} font-extrabold text-xl`}>Total : {data?.data[8].length}</label>
                    </div>
                    <div>
                      <label htmlFor=" " className={`{${Style.label} font-extrabold text-xl`}>In : {data?.data[5].length}</label>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${Style.tableBg}`}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-3 sm:h-full sm:w-full'>

            <div className={`${Style.tableBg} `}>
              <PieChart data={data} error={error} isLoading={isLoading} />
            </div>
            <div className={`${Style.tableBg} `}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handleChangePage}
                variant="text"
              />
              <ActivityDatatable data={data?.data[4] || []} totalPages={totalPages} itemsPerPage={itemsPerPage} handleChangePage={handleChangePage} currentPage={currentPage} isLoading={isLoading} error={error} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}