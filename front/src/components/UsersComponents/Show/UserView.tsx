import EmployeeView from "./includes/EmployeeView"
import StudentView from "./includes/StudentView"
import ViewError from "./includes/ViewError"

const UserView = (props: any) => {
    const { user } = props
    const role = user[0].role[0].role.toString().toLowerCase()
    console.log()
    const currentUser = user[0]

    return (
        <>
            {role === 'employee' ? <EmployeeView user={currentUser} /> : role === 'student' ? <StudentView user={currentUser} /> : <ViewError />}
        </>

    );
}

export default UserView;