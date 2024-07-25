import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.employeeManagementParent}>
        <h3 className={styles.employeeManagement}>{`Employee management `}</h3>
        <div className={styles.employeeImagePlaceholderParent}>
          <div className={styles.employeeImagePlaceholder} />
          <img
            className={styles.iconamoonprofileDuotone}
            loading="lazy"
            alt=""
            src="/iconamoonprofileduotone.svg"
          />
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <div className={styles.buttonChild} />
            <div className={styles.addEmployees}> Add Employees</div>
          </div>
          <div className={styles.button1}>
            <div className={styles.buttonItem} />
            <div className={styles.updateEmployees}> Update Employees</div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
