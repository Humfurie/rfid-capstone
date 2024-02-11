import React from "react";
import LiveActivity from "./AdminContLiveActivity";
import Population from "./AdminContPopulation";


export default function Percentage() {
	return (
		<div className="content">

			<div className="activity-live-chart ml-5">

				<div className="bg-blue-100 w-80 inline-block">
					<div>Pie or Doughnut</div>
					<div className="activity grid grid-cols-1 bg-white h-64 w-80 shadow-sm gap-0">
						<div className="rounded bg-green-100 h-64 w-80 shadow-lg">Chart</div>

					</div>
				</div>
			</div>



		</div>


	);
}
