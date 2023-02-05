import Header from "./components/GeneralComponents/Header";
import ParentNavbar from "./components/ParentComponents/ParentNavbar";
import ParentProfileContent from "./components/ParentComponents/ParentProfileContent";

const ParentProfile = () => {
    return (
        <div>
            <Header/>
            <div className="inline-flex">
                <ParentNavbar/>
                <ParentProfileContent/>
            </div>
        </div>
    );
}

export default ParentProfile;