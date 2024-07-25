import Footer from "../components/Footer";
import styles from "./AddEmployees.module.css";

const AddEmployees = () => {
  return (
    <div className={styles.addEmployees}>
      <main className={styles.headerParent}>
        <header className={styles.header}>
          <div className={styles.headerChild} />
          <div className={styles.employeeManagementWrapper}>
            <h3
              className={styles.employeeManagement}
            >{`Employee management `}</h3>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <div className={styles.buttonChild} />
              <h2 className={styles.addEmployees1}> Add Employees</h2>
            </div>
            <div className={styles.button1}>
              <div className={styles.buttonItem} />
              <h2 className={styles.updateEmployees}> Update Employees</h2>
            </div>
            <div className={styles.iconamoonprofileDuotoneWrapper}>
              <img
                className={styles.iconamoonprofileDuotone}
                loading="lazy"
                alt=""
                src="/iconamoonprofileduotone.svg"
              />
            </div>
          </div>
        </header>
        <section className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.imgWrapper}>
              <img
                className={styles.imgIcon}
                loading="lazy"
                alt=""
                src="/img@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div
                  className={styles.employeeDetails}
                >{`Employee Details `}</div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.firstFieldsetRowParent}>
                  <div className={styles.firstFieldsetRow}>
                    <div className={styles.nameFieldLabels}>
                      <h1 className={styles.name}> Name</h1>
                      <div className={styles.nameContactFieldsWrapper}>
                        <div className={styles.nameContactFields} />
                      </div>
                    </div>
                    <div className={styles.designationFieldset}>
                      <div className={styles.designationWrapper}>
                        <h1 className={styles.designation}>Designation</h1>
                      </div>
                      <div className={styles.designationField} />
                    </div>
                    <div className={styles.nameFieldLabels1}>
                      <h1 className={styles.contact}>
                        <span className={styles.contactTxt}>
                          <span className={styles.span}>{`       `}</span>
                          <span className={styles.contact1}>Contact</span>
                          <span>{` `}</span>
                        </span>
                      </h1>
                      <div className={styles.nameFieldLabelsInner}>
                        <div className={styles.frameInner} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.secondFieldsetRow}>
                    <div className={styles.locationFieldset}>
                      <h1 className={styles.location}> Location</h1>
                    </div>
                    <div className={styles.joiningDateFieldset}>
                      <div className={styles.joiningDateLabelContainerParent}>
                        <div className={styles.joiningDateLabelContainer}>
                          <div className={styles.joiningDateField} />
                        </div>
                        <h1 className={styles.joiningDate}> Joining Date</h1>
                      </div>
                    </div>
                    <div className={styles.locationJoiningFieldsWrapper}>
                      <div className={styles.locationJoiningFields} />
                    </div>
                    <div className={styles.statusFieldset}>
                      <h1 className={styles.status}> Status</h1>
                    </div>
                    <div className={styles.secondFieldsetRowInner}>
                      <div className={styles.rectangleDiv} />
                    </div>
                  </div>
                </div>
                <div className={styles.submitButtonContainerWrapper}>
                  <div className={styles.submitButtonContainer}>
                    <img
                      className={styles.submitButtonContainerChild}
                      loading="lazy"
                      alt=""
                      src=""
                    />
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameChild1} />
                      <div className={styles.submit}>
                        <span className={styles.span1}>{`           `}</span>
                        <b>SUBMIT</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer propHeight="263px" />
    </div>
  );
};

export default AddEmployees;
