const StudentSchoolInfo = () => {
    return (
        <div>
            student school info edit

            {/* <div className={Style.registerBtn}>
              <div className="flex justify-center flex-col mt-1">
                <label htmlFor="" className={Style.label}>
                  Student ID:
                </label>
                <input
                  type="number"
                  className={Style.inputType}
                  value={form.idNumber}
                  onChange={(e) => {
                    formOnChange(e.target.value, "idNumber");
                  }}
                />
              </div>

              <div className="flex justify-center flex-col mt-2">
                <label htmlFor="" className={Style.label}>
                  School Year:
                </label>
                <select
                  name=""
                  id=""
                  value={form.yearLevel}
                  className={Style.inputType}
                  onChange={(e) => {
                    formOnChange(e.target.value, "yearLevel");
                  }}
                >
                  <option selected disabled>
                    ---Select School Year---
                  </option>
                  {(apiYearLevel?.data || []).map((yearLevel: { id: number, year: string }, id: number) => {
                    return (
                      <>
                        <option key={id} value={yearLevel.id}>{yearLevel.year}</option>
                      </>
                    )
                  })}
              
                </select>
              </div>
              <div className="flex justify-center flex-col mt-2">
                <input
                  type="checkbox"
                  className={Style.inputType}
                  onChange={(e) => {
                    formOnChange(e.target.checked, "isAlumni");
                  }}
                />
                <label htmlFor="" className={Style.label}>
                  Alumni
                </label>
              </div>
            </div> */}
        </div>
    );
}

export default StudentSchoolInfo;