import { useState } from "react";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import AdminProfileContent from "../../components/AdminComponents/AdminProfileContent";
import Header from "../../components/Header";


const profile = () => {
	const [form, setForm] = useState()
    return (
        <div >
			<div>
				<Header />
				<div className="inline-flex">
					<AdminNavbar />
					<AdminProfileContent/>
				</div>

			</div>
		</div>
    );
}

export default profile;