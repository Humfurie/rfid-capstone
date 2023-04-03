import Header from "../../components/GeneralComponents/Header";
import ParentChildrenContent from "../../components/ParentComponents/ParentChildrenContent";
import ParentNavbar from "../../components/ParentComponents/ParentNavbar";

const ParentChildren = () => {
    return (
        <div>
           <Header/>
           <div className="inline-flex">
            <ParentNavbar/>
            <ParentChildrenContent/>
           </div>
        </div>
    );
}

export default ParentChildren;