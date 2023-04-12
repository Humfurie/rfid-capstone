import { Style } from "../../lib/Style";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import DestroyParent from "../../pages/users/parent/[id]/destroy";

const ParentViewTab = (props: any) => {
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
  

  return (
    <div className={`flex-col ${Style.parentDiv}`}>
      <div className={`pt-3`}>
        <div className={`${Style.menuTab}`}>
          <div className={`flex`}>
            <div className={`flex justify-end`}>
              <Button
                className={`${Style.textColor}`}
                href={"/users/parent"}
              >
                Back
              </Button>
              <Divider
                flexItem
                orientation="vertical"
              />
              <Button
                href={"/users/registration/parent"}
                className={`${Style.textColor}`}>
                Add New
              </Button>
              <Divider
                flexItem
                orientation="vertical"
              />
              <Button
                href={`/users/parent/${user.id}/edit`}
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
                <DestroyParent setOpen={handleClosePosition} open={deleteOpen[user.id]} user={user} />
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

export default ParentViewTab;