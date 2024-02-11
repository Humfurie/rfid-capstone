import React from "react";

export default function LiveActivity() {
	return (
		<div className="content">
			<div className="activity-live-status ml-1">
				<div className=" inline-block">
					<div  className="w-80 bg-blue-100">Live Activity</div>
					<div className="activity grid grid-cols-2 bg-white h-64 w-80 shadow-sm gap-0">
						<div className="rounded bg-green-100 h-64 w-80 shadow-lg gap-0">Ins</div>
						<div className="rounded bg-yellow-100 h-64 w-80 shadow-lg">Outs</div>
					</div>
				</div>
			</div>
		</div>
	);
}
