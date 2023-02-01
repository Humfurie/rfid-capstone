import Header from "./components/GeneralComponents/Header";
import ParentNavbar from "./components/ParentComponents/ParentNavbar";

const ParentDashboard = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <ParentNavbar/>
            </div>
        </div>
    );
}

export default ParentDashboard;