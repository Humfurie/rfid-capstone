import AdminNavbar from "../../../components/AdminComponents/AdminNavbar";
import Header from "../../../components/Header";
import ParentRegistration from "../../../components/UsersRegistrationComponents/ParentRegistration";

const parent = () => {
    return (
        <div>
            <Header />
            <div className="flex">
                <AdminNavbar />
                <ParentRegistration />
            </div>
        </div>
    );
}

export default parent;