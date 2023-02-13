import EmployeeNavbar from "../../components/EmployeeComponents/EmployeeNavbar";
import Header from "../../components/GeneralComponents/Header";

const EmployeeDashboard = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <EmployeeNavbar/>
            </div>
        </div>
    );
}

export default EmployeeDashboard;