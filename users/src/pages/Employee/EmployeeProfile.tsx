import EmployeeNavbar from "../../components/EmployeeComponents/EmployeeNavbar";
import EmployeeProfileContent from "../../components/EmployeeComponents/EmployeeProfileContent";
import Header from "../../components/GeneralComponents/Header";

const EmployeeProfile = () => {
    return (
        <div>
            <Header/>
            <div className="inline-flex">
              <EmployeeNavbar/>
              <EmployeeProfileContent/>
            </div>
        </div>
    );
}

export default EmployeeProfile;