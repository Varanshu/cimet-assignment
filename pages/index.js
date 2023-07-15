import React, { useEffect, useState } from "react";
import CompanyNameItem from "../components/CompanyNameItem";
import { styled } from "styled-components";
import CompanyDetailCard from "../components/CompanyDetailCard";
import Loading from "../components/shared/Loading";
import ErrorComponent from "../components/shared/ErrorComponent";

import { useCheckExpiration, useSetCompanies } from "../hooks";

const post = () => {
  const [companies, setCompanies] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getCompaniesFunction = async () => {
    setLoading(true);

    if (useCheckExpiration()) {
      const data = useCheckExpiration();
      setCompanies(data);
    } else {
      try {
        const data = await fetch("/api/landingPage", {
          method: "POST"
        });
        const result = await data.json();
        useSetCompanies(result.expiration, result.data);
        setCompanies(result.data);
      } catch (error) {
        console.log("qewqe", error);
        setError(error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    getCompaniesFunction();
  }, []);

  const [currentCompany, setCurrentCompany] = useState(0);

  if (loading) {
    return <Loading />;
  } else if (error) {
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
