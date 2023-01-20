import React from "react";
import LiveActivity from "./AdminContLiveActivity";
import Percentage from "./AdminContPercentage";
import Population from "./AdminContPopulation";
import TestComp from "../testComp";


export default function AdminDashboardContent() {
	return (
		<div className="content">

			<div className="top-status-content ml-5 mt-6">
				<Population />
			</div>
			<div className="ml-1 flex flex-wrap gap- ">
				< LiveActivity />
				<Percentage/>
			</div>
			<div>
				<TestComp/>
			</div>
		</div>


	);
}
