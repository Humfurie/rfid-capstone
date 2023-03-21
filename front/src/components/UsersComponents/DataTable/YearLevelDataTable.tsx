import * as React from "react";
import Link from "next/link";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import { Style } from "../../../lib/Style";

export default function YearLevelDataTable(props: any) {
  const { yearLevel } = props

  return (
    <div className="w-full">
      <table className="table-fixed bg-white-smoke w-full rounded-lg">
        <thead className={`${Style.toLeft}`}>
          <tr className="border-collapse ">
            <th className={`${Style.tableBorder}`}>ID</th>
            <th className={`${Style.tableBorder}`}>Name</th>
            <th className={`${Style.tableBorder}`}>Action</th>
          </tr>
        </thead>
        <tbody>
          {yearLevel.map((yearLevel: any, id: number) => {

            return (
              <tr key={id} className="border-collapse even:bg-white odd:bg-white-smoke hover:bg-gray-200">
                <td className={`${Style.tableBorder}`}>
                  {yearLevel.id}
                </td>
                <td className={`${Style.tableBorder}`}>
                  {yearLevel.year}
                </td>
                <td className={`${Style.tableBorder}`}>
                  <div className="flex gap-3 items-center">
                    <Link href={`/users/yearLevel/${yearLevel.id}`}>
                      <BsEye className="hover:text-blue-600" />
                    </Link>
                    <Link href={`/users/yearLevel/${yearLevel.id}/edit`}>
                      <BsPencil className="hover:text-green-600" />
                    </Link>
                    <Link href={`/users/yearLevel/${yearLevel.id}/delete`}>
                      <BsTrash className="hover:text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

