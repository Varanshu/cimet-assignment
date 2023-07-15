import React, { useContext, useEffect, useState } from "react";
import CompanyNameItem from "../components/CompanyNameItem";
import { styled } from "styled-components";
import CompanyDetailCard from "../components/CompanyDetailCard";
import ErrorComponent from "../components/shared/ErrorComponent";

import { useToken } from "../hooks";
import { LoadingContext } from "../utils/context";

const post = () => {
  const [companies, setCompanies] = useState({});
  // const [loading, setLoading] = useState(false);
  const { setLoading } = useContext(LoadingContext);
  const [error, setError] = useState(false);
  const token = useToken();

  const getCompaniesFunction = async () => {
    setLoading(true);
    try {
      if (companies && token) {
        const data = await fetch("/api/landingPage", {
          method: "POST",
          body: JSON.stringify({
            token: token
          })
        });
        const result = await data.json();
        setCompanies(result);
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCompaniesFunction();
  }, [token]);

  const [currentCompany, setCurrentCompany] = useState(0);

  if (error) {
    return <ErrorComponent />;
  } else
    return (
      <div className="container container-lg">
        {/* Display all the items available in the object */}
        <NavBarStrip>
          {companies &&
            Object.keys(companies).map((companyName, index) => (
              <span onClick={(e) => setCurrentCompany(index)} key={index}>
                <CompanyNameItem
                  name={companyName}
                  length={Object.values(companies)[index].length}
                  active={index === currentCompany}
                />
              </span>
            ))}
        </NavBarStrip>

        {/* Display the each values of the items of the objects */}
        {Object.values(companies)[currentCompany]?.map((company, index) => {
          return (
            <div key={index}>
              <CompanyDetailCard companyDetails={company} />
            </div>
          );
        })}
      </div>
    );
};

const NavBarStrip = styled.div`
  margin-bottom: 50px;
`;

export default post;
