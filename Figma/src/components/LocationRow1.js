import PropTypes from "prop-types";
import styles from "./LocationRow1.module.css";

const LocationRow1 = ({ className = "" }) => {
  return (
    <div className={[styles.locationRow, className].join(" ")}>
      <div className={styles.locationCells}>
        <div className={styles.locationValues}>
          <div className={styles.cityNames} />
          <div className={styles.hyderabad}> Hyderabad</div>
        </div>
      </div>
    </div>
  );
};

LocationRow1.propTypes = {
  className: PropTypes.string,
};

export default LocationRow1;
