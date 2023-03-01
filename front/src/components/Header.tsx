import React from "react";
import { Style } from "../lib/Style";
import CurrentDate from "./Date";

// Rearrange date value to get the order you want... also replace / with a cooler separator like ⋅
export default function Header() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="header">
				<div >
					<div className={`${Style.toRight} p-4 inline-flex w-full border-b-[1px] border-teal-blue2 shadow-lg`}>
						<img alt="profile" className="mr-4" />
						<h2>
							HWDYD, <span>Admin</span>
						</h2>
					
						<CurrentDate />
					</div>
				</div>
			</div>
  );
}