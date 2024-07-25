import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "", propHeight }) => {
  const footerStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <footer
      className={[styles.footer, className].join(" ")}
      style={footerStyle}
    >
      <div className={styles.companyInfo}>
        <div className={styles.employee}>{`employees `}</div>
        <div className={styles.roles}>
          <div className={styles.work}>work</div>
          <div className={styles.uiDeveloper}>Ui developer</div>
          <div className={styles.fullStack}> Full Stack</div>
          <div className={styles.aiDevlopers}>AI Devlopers</div>
          <div className={styles.mernDeveloper}>MERN Developer</div>
          <div className={styles.pythonDeveloper}>
            <p className={styles.pythonDeveloper1}>Python Developer</p>
          </div>
        </div>
      </div>
      <div className={styles.learnParent}>
        <div className={styles.learn}>Learn</div>
        <div className={styles.links}>
          <div className={styles.aboutUs}>About us</div>
        </div>
      </div>
      <div className={styles.customerServiceParent}>
        <div className={styles.customerService}>
          <span>Customer</span>
          <span className={styles.span}>{` `}</span>
          <span>Service</span>
        </div>
        <div className={styles.links1}>
          <div className={styles.provideWebsiteApp}>Provide website App</div>
          <div className={styles.privacyAndPolicy}>{`Privacy and policy `}</div>
          <a className={styles.termsConditions}>{`Terms & Conditions`}</a>
        </div>
      </div>
      <div className={styles.contactUsParent}>
        <div className={styles.contactUs}>Contact us</div>
        <div className={styles.contacts}>
          <div className={styles.contactIcons}>
            <img
              className={styles.locationOnIcon}
              loading="lazy"
              alt=""
              src="/location-on.svg"
            />
            <div className={styles.arambhtownshipHyderabad}>
              ArambhTownship Hydrabad
            </div>
          </div>
          <div className={styles.contactIcons1}>
            <img
              className={styles.mailIcon}
              loading="lazy"
              alt=""
              src="/mail.svg"
            />
            <div className={styles.emailAvinashkumarsinah01gma}>
              Email: avinashkumarsinha01@gmail.com
            </div>
          </div>
          <div className={styles.contactIcons2}>
            <img
              className={styles.callIcon}
              loading="lazy"
              alt=""
              src="/call.svg"
            />
            <div className={styles.div}>{`Tel: +91 8409774787 `}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default Footer;
