import PropTypes from "prop-types";
import styles from "./EmployeeNameRow.module.css";

const EmployeeNameRow = ({ className = "" }) => {
  return (
    <div className={[styles.employeeNameRow, className].join(" ")}>
      <div className={styles.employeeNameColumn}>
        <div className={styles.employeeNamePlaceholder} />
        <div className={styles.avinashKumar}>Avinash kumar</div>
      </div>
    </div>
  );
};

EmployeeNameRow.propTypes = {
  className: PropTypes.string,
};

export default EmployeeNameRow;
