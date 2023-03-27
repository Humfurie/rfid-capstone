import AdminNavbar from "../../../components/AdminComponents/AdminNavbar";
import Header from "../../../components/Header";
import EmployeeRegistration from "../../../components/UsersComponents/Registration/EmployeeRegistration";

const employee = () => {
    return (
        <div>
            <Header />
            <div className="flex">
                <AdminNavbar/>
                <EmployeeRegistration />
            </div>
        </div>
    );
}

export default employee;