import Header from '../components/Header';
import AdminNavbar from '../components/AdminComponents/AdminNavbar';
import Population from '../components/AdminComponents/AdminContPopulation';
import LiveActivity from '../components/AdminComponents/AdminContLiveActivity';
import Percentage from '../components/AdminComponents/AdminContPercentage';
import { Style } from '../lib/Style';


export default function Home() {

  return (
    <div className={`flex-col ${Style.parentDiv}`}>

      <Header />

      <div className="flex h-full">

        <AdminNavbar />

        <div className="">

          <Population />

          <LiveActivity />

          <Percentage />

        </div>
      </div>
    </div>
  )
}