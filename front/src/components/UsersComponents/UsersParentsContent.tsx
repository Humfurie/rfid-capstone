import { useContext } from "react";
import { FormContext } from "../../lib/FormContext";
import MyButton from "../../lib/partials/MyButton";
import UsersDataTable from "../DataTable/UsersDataTable";
import ParentRegistration from "../UsersRegistrationComponents/ParentRegistration";
import SearchBar from "../SearchBar";

const UsersParentsContent = (props: any) => {
  const { users } = props
  const { setRegistration } = useContext(FormContext)
  return (

    <div className="flex flex-col w-screen">
      <div className="flex flex-row top-status-content ml-6 mt-6 w-full">
        <div>
          <MyButton
            type="button"
            label="Add Parent"
            onClick={(e: any) => {
              setRegistration(true);
            }}
            className="text-black bg-powderblue-shades10% hover:bg-powderblue-shades20%  font-medium rounded-lg text-sm px-4 py-2 "
          />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="flex ml-6 mt-6 max-w-full min-w-min ">
        <UsersDataTable />
      </div>
      <ParentRegistration />
    </div>
  );
};

export default UsersParentsContent;


