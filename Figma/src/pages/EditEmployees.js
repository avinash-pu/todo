import TableHeader from "../components/TableHeader";
import Footer from "../components/Footer";
import styles from "./EditEmployees.module.css";

const EditEmployees = () => {
  return (
    <div className={styles.editEmployees}>
      <main className={styles.headerParent}>
        <header className={styles.header}>
          <div className={styles.headerChild} />
          <div className={styles.employeeManagementWrapper}>
            <h3
              className={styles.employeeManagement}
            >{`Employee management `}</h3>
          </div>
          <div className={styles.employeesActions}>
            <div className={styles.button}>
              <div className={styles.buttonChild} />
              <h2 className={styles.addEmployees}> Add Employees</h2>
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
        <div className={styles.tableHeaderWrapper}>
          <TableHeader />
        </div>
        <div className={styles.teamWorkingTogetherProjectParent}>
          <img
            className={styles.teamWorkingTogetherProjectIcon}
            loading="lazy"
            alt=""
            src="/teamworkingtogetherproject-1@2x.png"
          />
          <img
            className={styles.successfulBusinessTeamExpreIcon}
            loading="lazy"
            alt=""
            src="/successfulbusinessteamexpressingunity-1@2x.png"
          />
        </div>
      </main>
      <Footer propHeight="263px" />
    </div>
  );
};

export default EditEmployees;
