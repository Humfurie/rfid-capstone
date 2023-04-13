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

        {/* <div className={`pt-16 w-full`}> */}

          {/* <div className='grid grid-cols-2 gap-3'>
            <div className='grid grid-rows-2 gap-3'>
              <div className='grid grid-cols-2 gap-3'>
                <div className={`${Style.employeePopulationBg}`}>
                  employee population
                </div >
                <div className={`${Style.studentPopulationBg}`}>
                  student population
                </div>
              </div>

              <div className={`p-50 ${Style.pieChartBg}`}> */}
                <PieChart />
              {/* </div>
            </div>
            <div className='grid grid-rows-2 gap-3'>
              <div className={`${Style.tableBg}`}>
                date
              </div>
              <div className={`${Style.tableBg}`}>
                live in and out

              </div>
            </div>


          </div>


        </div> */}
      {/* </div> */}
      </div>
    </div>
  )
}