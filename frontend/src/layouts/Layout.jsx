import PropTypes from "prop-types";
import NavBar from "../components/NavBar/NavBar";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;