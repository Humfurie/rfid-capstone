import LiveActivity from "../../components/AdminComponents/AdminContLiveActivity";
import Percentage from "../../components/AdminComponents/AdminContPercentage";
import Population from "../../components/AdminComponents/AdminContPopulation";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import Header from "../../components/Header";

export default function dashboard() {


	return (
		<div >
			<div>
				<Header />
				<div className="inline-flex bg-white-smoke">
					<AdminNavbar />
					<div className="top-status-content ml-5 mt-6">
						<Population />
					</div>
					<div className="ml-1 flex flex-wrap  ">
						
						<Percentage />
						< LiveActivity />
					</div>
				</div>

			</div>
		</div>
	);
}