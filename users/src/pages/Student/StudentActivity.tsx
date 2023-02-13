import Header from "../../components/GeneralComponents/Header";
import StudentActivityContent from "../../components/StudentComponents/StudentActivityContent";
import StudentNavbar from "../../components/StudentComponents/StudentNavbar";


const StudentActivity = () => {
    return (
        <div>
        <Header />
        <div className="inline-flex">
            <StudentNavbar />
            <StudentActivityContent />
        </div>

    </div>
    );
}

export default StudentActivity;