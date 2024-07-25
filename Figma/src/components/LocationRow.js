import PropTypes from "prop-types";
import styles from "./LocationRow.module.css";

const LocationRow = ({ className = "" }) => {
  return (
    <div className={[styles.locationRow, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.hyderabad}> Hyderabad</div>
      </div>
    </div>
  );
};

LocationRow.propTypes = {
  className: PropTypes.string,
};

export default LocationRow;
