import AdminContent from "../components/AdminComponents/AdminDashboardContent";
import AdminNavbar from "../components/AdminComponents/AdminNavbar";
import Header from "../components/Header";

export default function AdminDashboard() {


	return (
		<div>
			<div>
				<Header />
				<div className="inline-flex">
					<AdminNavbar />
					<AdminContent />
				</div>

			</div>
		</div>
	);
}