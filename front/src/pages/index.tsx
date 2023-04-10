import Header from '../components/Header';
import AdminNavbar from '../components/AdminComponents/AdminNavbar';
import Population from '../components/AdminComponents/AdminContPopulation';
import LiveActivity from '../components/AdminComponents/AdminContLiveActivity';
import Percentage from '../components/AdminComponents/AdminContPercentage';
import { Style } from '../lib/Style';
import Sidebar from '../components/Sidebar';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';


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
      <div className={`${Style.mainContent}`}>
        <div>
          <Header open={open} handleDrawerOpen={handleDrawerOpen} />
        </div>
        <div>
          <Sidebar open={open} theme={theme} handleDrawerClose={handleDrawerClose} />
        </div>
        <div className='pt-12'>
          {/* <DrawerHeader /> */}
          <Population />
          <LiveActivity />
          <Percentage />
        </div>
      </div>
    </div>
  )
}