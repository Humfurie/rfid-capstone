const EmployeeSchoolInfo = () => {
    return (
        <div>
            employee school info
            {/* <div >
                        <div className="flex justify-center flex-col mt-2">
                          <label htmlFor="" className={Style.label}>
                            Position:
                          </label>
                          <select
                            name="positions"
                            className={Style.inputType}
                            value={form.position}
                            onChange={(e) => {
                              formOnChange(e.target.value, 'position');
                            }}
                          >
                            <option value=''>
                              ---Select Position---
                            </option>
                            {(apiPosition?.data || []).map((element: { id: number, position: string }, id: number) => {
                              return (
                                <>
                                  <option key={id} value={element.id}>{element.position}</option>
                                </>
                              )
                            })}
                          </select>
                        </div>
                      </div> */}
        </div>
    );
}

export default EmployeeSchoolInfo;