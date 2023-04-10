import Header from '../components/Navigation';
import AdminNavbar from '../components/AdminComponents/AdminNavbar';
import Population from '../components/AdminComponents/AdminContPopulation';
import LiveActivity from '../components/AdminComponents/AdminContLiveActivity';
import Percentage from '../components/AdminComponents/AdminContPercentage';
import { Style } from '../lib/Style';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Navigation from '../components/Navigation';


export default function Home() {

  return (
    <div className={`flex-col ${Style.parentDiv}`}>


      <div className={`${Style.mainContent}`}>
        <Navigation />

        {/* <AdminNavbar /> */}

        <Population />

        <LiveActivity />

        <Percentage />


      </div>
    </div>
  )
}