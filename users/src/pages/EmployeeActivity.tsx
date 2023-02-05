import EmployeeActivityContent from "./components/EmployeeComponents/EmployeeActivityContent";
import EmployeeNavbar from "./components/EmployeeComponents/EmployeeNavbar";
import Header from "./components/GeneralComponents/Header";

const EmployeeActivity = () => {
    return (
        <div>
           <Header/>
           <div className="inline-flex">
            <EmployeeNavbar/>
            <EmployeeActivityContent/>
           </div>
        </div>
    );
}

export default EmployeeActivity;