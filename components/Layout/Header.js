import React, { useContext } from "react";
import { LoadingContext } from "../../utils/context";
import Loading from "../shared/Loading";

const Header = () => {
  const { loading } = useContext(LoadingContext);

  return (
    <header>
      CIMET Assignment
      {loading && <Loading />}
    </header>
  );
};

export default Header;
