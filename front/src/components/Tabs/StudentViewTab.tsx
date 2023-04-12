import { Style } from "../../lib/Style";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import DestroyParent from "../../pages/users/parent/[id]/destroy";
import Destroy from "../../pages/users/destroy";

const StudentViewTab = (props: any) => {
  const { user } = props

  console.log("this is usesr", user)

  const [deleteOpen, setDeleteOpen] = useState({
    [user.id]: false
  })

  const handleDelete = (positionId: any) => {
    setDeleteOpen({ [positionId]: true })
  }

  const handleClosePosition = (positionId: any) => {
    setDeleteOpen({ [positionId]: false })
  }
   const role = user.role[0].role.toLowerCase()
  return (
    <div className={`flex-col ${Style.parentDiv}`}>
      <div className={`pt-3`}>
        <div className={`${Style.menuTab}`}>
          <div className={`flex`}>
            <div className={`flex justify-end`}>

              <Button
                className={`${Style.textColor}`}
                href={"/users/student"}
              
              >
                Back
              </Button>
              <Divider
                flexItem
                orientation="vertical"
              />

              <Button
                href={"/users/registration/student"}
                className={`${Style.textColor}`}>
                Add New
              </Button>
              <Divider
                flexItem
                orientation="vertical"
              />

              <Button
                href={`/users/${role}/${user.id}/edit`}
                className={`${Style.textColor}`}>
                Edit
              </Button>
              <Divider
                flexItem
                orientation="vertical"
              />

              <Button

                className={`${Style.textColor}`}
                onClick={e => {
                  handleDelete(user.id)
                }}
              >
                Delete
                <Destroy setOpen={handleClosePosition} open={deleteOpen[user.id]} userRole={role} user={user} />
              </Button>

              <Divider
                flexItem
                orientation="vertical"
              />
              <Button
                href={""}
                className={`${Style.textColor}`}>
                Export
              </Button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentViewTab;