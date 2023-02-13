import React from "react";
import CurrentDate from "./Date";

// Rearrange date value to get the order you want... also replace / with a cooler separator like ⋅
export default function Header() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="header">
				<div >
					<div className="p-4 inline-flex bg-white w-screen border-b-[1px] border-powderblue-shades10%">
						<img alt="profile" className="mr-4" />
						<h2>
							HWDYD, <span>User</span>
						</h2>
					
						<CurrentDate />
					</div>
				</div>
			</div>
  );
}