import Header from "../../components/GeneralComponents/Header";
import StudentNavbar from "../../components/StudentComponents/StudentNavbar";
import StudentScheduleContent from "../../components/StudentComponents/StudentScheduleContent";


const StudentSchedule = () => {
    return (
        <div>
            <Header />
            <div className="inline-flex">
                <StudentNavbar />
                <StudentScheduleContent />
            </div>

        </div>
    );
}

export default StudentSchedule;