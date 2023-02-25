import Header from '../components/Header';
import AdminNavbar from '../components/AdminComponents/AdminNavbar';
import Population from '../components/AdminComponents/AdminContPopulation';
import LiveActivity from '../components/AdminComponents/AdminContLiveActivity';
import Percentage from '../components/AdminComponents/AdminContPercentage';


export default function Home() {

  return (
    <div>
    <div>
      <Header />
      <div className="inline-flex">
        <AdminNavbar />
        <div className="top-status-content ml-5 mt-6">
          <Population />
        </div>
        <div className="ml-1 flex flex-wrap gap- ">
          < LiveActivity />
          <Percentage />
        </div>
      </div>

    </div>
  </div>
  )
}