import { UserContext } from "../context/UserContext";
import { client } from "../utils";
import { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";

const styles = {
  nav: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "1rem",
  },
};

const Home = () => {
  const { setUser } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <div style={styles.nav}>
        <Button variant="contained" color="secondary" onClick={logout}>
          Logout
        </Button>
      </div>
    </>
  );
};

export default Home;
