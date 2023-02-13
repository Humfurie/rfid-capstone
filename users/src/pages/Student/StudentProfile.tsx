import Header from "../../components/GeneralComponents/Header";
import StudentNavbar from "../../components/StudentComponents/StudentNavbar";
import StudentProfileContent from "../../components/StudentComponents/StudentProfileContent";

const StudentProfile = () => {
    return (
        <div>
            <Header />
            <div className="inline-flex">
                <StudentNavbar />
                <StudentProfileContent />
            </div>

        </div>
    );
}

export default StudentProfile;