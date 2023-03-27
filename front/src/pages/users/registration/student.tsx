import AdminNavbar from "../../../components/AdminComponents/AdminNavbar";
import Header from "../../../components/Header";
import StudentRegistration from "../../../components/UsersComponents/Registration/StudentRegistration";

const student = () => {
    return (
        <div>
            <Header />
            <div className="flex">
                <AdminNavbar />
                <StudentRegistration />
            </div>
        </div>
    );
}

export default student;