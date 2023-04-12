import EmployeeView from "./includes/EmployeeView"
import StudentView from "./includes/StudentView"
import ViewError from "./includes/ViewError"

const UserView = (props: any) => {
    const { user } = props
     const role = user.role[0].role.toString().toLowerCase()
    

    return (
        <>
            {role === 'employee' ? <EmployeeView user={user} /> : role === 'student' ? <StudentView user={user} /> : <ViewError />}
        </>

    );
}

export default UserView;