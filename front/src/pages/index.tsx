import Header from '../components/Header';
import AdminNavbar from '../components/AdminComponents/AdminNavbar';
import Population from '../components/AdminComponents/AdminContPopulation';
import LiveActivity from '../components/AdminComponents/AdminContLiveActivity';
import Percentage from '../components/AdminComponents/AdminContPercentage';
import { Style } from '../lib/Style';
import Sidebar from '../components/Sidebar';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import Head from 'next/head';
import { PieChart } from '../components/AdminComponents/PieChart';
import StudentPopulation from '../components/AdminComponents/StudentPopulation';


export default function Home() {

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



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

        <div className={`pt-16 w-full h-full`}>

          {/* <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-200 p-4">Column 1</div>
            <div className="bg-gray-300 p-4">Column 2</div>
            <div className="bg-gray-400 p-4">Column 3</div>
            <div className="bg-gray-500 p-4">Row 2 Column 1</div>
            <div className="bg-gray-600 p-4">Row 2 Column 2</div>
          </div> */}

          {/* <div className='grid grid-rows-2 gap-3'>

            <div className='grid grid-cols-3 h-40'>
              <div>
                <div className={`h-40  ${Style.employeePopulationBg}`}>
                  employee population
                </div >
              </div>
              <div>
                <div className={`h-40 ${Style.studentPopulationBg}`}>
                  <StudentPopulation />
                </div>
              </div>
              <div>
                <div className={`h-40 ${Style.tableBg}`}>
                  date
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 h-72'>
              <div>
                <div className={`w-72 h-72 mx-auto ${Style.pieChartBg}`}>
                  <PieChart />
                </div>
              </div>
              <div>
                <div className={`${Style.tableBg}`}>
                  live in and out
                </div>
              </div>
            </div>

          </div> */}

          {/* <div className='grid grid-cols-2 gap-3'>
            <div className='grid grid-rows-2 '>
              <div className='grid grid-cols-2 gap-3 h-40'>

                <div className={`h-40  ${Style.employeePopulationBg}`}>
                  employee population
                </div >
                <div className={`h-40 ${Style.studentPopulationBg}`}>
                  <StudentPopulation />
                </div>

              </div>
              <div className=''>
                <div className={`w-60 h-60 mx-auto ${Style.pieChartBg}`}>
                  <PieChart />
                </div>
              </div>

            </div>
            <div className='grid grid-rows-2'>
              <div className='h-40'>
                <div className={`h-40 ${Style.tableBg}`}>
                  date
                </div>
              </div>

              <div className=''>
                live ina nd out
              </div>
            </div>
          </div> */}


          <div className='grid grid-cols-2 gap-3 sm:h-full sm:w-full'>

            <div className='grid grid-cols-2 gap-3 '>
              <div className={`${Style.employeePopulationBg}`}>
                employee population
              </div >
              <div className={`${Style.studentPopulationBg}`}>
                <StudentPopulation />
              </div>
            </div>
            <div className={`${Style.tableBg}`}>
              date
            </div>
          </div>
          <div className='grid grid-cols-2 gap-3 sm:h-full sm:w-full'>

            <div className={`${Style.tableBg} `}>
              <PieChart />
            </div>
            <div className={`${Style.tableBg} `}>
              live in and out
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}