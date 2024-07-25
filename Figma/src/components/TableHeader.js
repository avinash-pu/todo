import PropTypes from "prop-types";
import styles from "./TableHeader.module.css";

const TableHeader = ({ className = "" }) => {
  return (
    <div className={[styles.tableHeader, className].join(" ")}>
      <img
        className={styles.riarrowDropDownLineIcon}
        loading="lazy"
        alt=""
        src="/riarrowdropdownline.svg"
      />
      <form className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div
            className={styles.editEmployeeDetails}
          >{`Edit Employee Details `}</div>
          <div className={styles.riarrowDropDownLineWrapper}>
            <img
              className={styles.riarrowDropDownLineIcon1}
              alt=""
              src="/riarrowdropdownline-1.svg"
            />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.selectFieldParent}>
                <div className={styles.selectField}>
                  <div className={styles.label} />
                  <div className={styles.description}>Description</div>
                  <div className={styles.select}>
                    <div className={styles.value}>Value</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/chevron-down.svg"
                    />
                    <div className={styles.options}>
                      <div className={styles.helloWorld}>Hello World</div>
                      <div className={styles.option2}>Option 2</div>
                      <div className={styles.option3}>Option 3</div>
                      <div className={styles.option4}>Option 4</div>
                      <div className={styles.option5}>Option 5</div>
                    </div>
                  </div>
                  <div className={styles.options1}>
                    <div className={styles.value1}>Value</div>
                    <div className={styles.option21}>Option 2</div>
                    <div className={styles.option31}>Option 3</div>
                    <div className={styles.option41}>Option 4</div>
                    <div className={styles.option51}>Option 5</div>
                  </div>
                </div>
                <div className={styles.selectField1}>
                  <div className={styles.label1}>Label</div>
                  <div className={styles.description1}>Description</div>
                  <div className={styles.select1}>
                    <div className={styles.value2}>SELECT</div>
                    <img
                      className={styles.chevronDownIcon1}
                      alt=""
                      src="/chevron-down-1.svg"
                    />
                    <div className={styles.options2}>
                      <div className={styles.helloWorld1}>Hello World</div>
                      <div className={styles.option22}>Option 2</div>
                      <div className={styles.option32}>Option 3</div>
                      <div className={styles.option42}>Option 4</div>
                      <div className={styles.option52}>Option 5</div>
                    </div>
                  </div>
                  <div className={styles.options3}>
                    <div className={styles.value3}>SELECT</div>
                    <div className={styles.option23}>Option 2</div>
                    <div className={styles.option33}>Option 3</div>
                    <div className={styles.option43}>Option 4</div>
                    <div className={styles.option53}>Option 5</div>
                  </div>
                </div>
              </div>
              <div className={styles.designationIconsParent}>
                <div className={styles.designationIcons} />
                <h1 className={styles.designation}>Designation</h1>
                <div className={styles.designationIcons1} />
              </div>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.locationAndStatus}>
              <div className={styles.locationParent}>
                <h1 className={styles.location}> Location</h1>
                <div className={styles.locationIcons}>
                  <img
                    className={styles.locationIconsChild}
                    loading="lazy"
                    alt=""
                    src="/rectangle-23.svg"
                  />
                </div>
                <div className={styles.joiningDateWrapper}>
                  <h1 className={styles.joiningDate}> Joining Date</h1>
                </div>
                <div className={styles.locationIcons1}>
                  <img
                    className={styles.locationIconsItem}
                    loading="lazy"
                    alt=""
                    src="/rectangle-29.svg"
                  />
                </div>
              </div>
              <div className={styles.statusParent}>
                <h1 className={styles.status}> Status</h1>
                <div className={styles.vectorParent}>
                  <img className={styles.rectangleIcon} alt="" src="" />
                  <img
                    className={styles.frameChild1}
                    loading="lazy"
                    alt=""
                    src="/rectangle-29.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.selectField2}>
          <div className={styles.label2}>Label</div>
          <div className={styles.description2}>Description</div>
          <div className={styles.select2}>
            <div className={styles.value4}>{`SELECT `}</div>
            <img
              className={styles.chevronDownIcon2}
              alt=""
              src="/chevron-down1.svg"
            />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <h2 className={styles.update}>
              <span className={styles.span}>{`          `}</span>
              <b className={styles.update1}>UPDATE</b>
            </h2>
          </div>
        </div>
      </form>
      <h1 className={styles.name}> Name</h1>
      <h1 className={styles.contact}>
        <span className={styles.contactTxt}>
          <span className={styles.span1}>{`       `}</span>
          <span className={styles.contact1}>Contact</span>
          <span>{` `}</span>
        </span>
      </h1>
    </div>
  );
};

TableHeader.propTypes = {
  className: PropTypes.string,
};

export default TableHeader;
