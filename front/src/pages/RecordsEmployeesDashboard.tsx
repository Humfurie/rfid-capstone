import AdminNavbar from "../components/AdminComponents/AdminNavbar";
import Header from "../components/Header";
import RecordsEmployeesContent from "../components/UsersComponents/RecordsEmployeesContent";

const RecordsEmployeesDashboard = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="inline-flex">
        <AdminNavbar/>
        <RecordsEmployeesContent/>

            </div>
        </div>
    );
}

export default RecordsEmployeesDashboard;