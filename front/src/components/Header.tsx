import Link from "next/link";
import React from "react";
import { Style } from "../lib/Style";
import CurrentDate from "./Date";

// Rearrange date value to get the order you want... also replace / with a cooler separator like ⋅
export default function Header() {
	const current = new Date();
	const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

	return (
		<div className="flex w-full">
			<div className={` p-2 inline-flex w-full border-b-[1px] border-teal-blue2 shadow-lg ${Style.toRight}`}>

				<div className="flex">
					<Link href="/" className={`inline-flex pl-4 text-black font-extrabold text-2xl`}> A I S - R F T </Link>
				</div>

				<div className="flex">
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