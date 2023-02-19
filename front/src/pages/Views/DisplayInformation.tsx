import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import Header from "../../components/Header";
import DisplayInformationContent from "../../components/Views/DisplayInformationContent";

const DisplayInformation = () => {
    return (
        <div>
            <div>
                <Header />
                <div className="inline-flex">
                    <AdminNavbar />
                    <DisplayInformationContent/>
                </div>
            </div>
        </div>
    );
}

export default DisplayInformation;