import React, { useEffect, useState } from "react";
import CompanyNameItem from "../components/CompanyNameItem";
import { styled } from "styled-components";
import CompanyDetailCard from "../components/CompanyDetailCard";
import Loading from "../components/shared/Loading";
import { useCheckExpiration, useSetCompanies } from "../hooks";

const post = () => {
  const [companies, setCompanies] = useState({});
  const [loading, setLoading] = useState(false);
  const getCompaniesFunction = async () => {
    setLoading(true);

    if (useCheckExpiration()) {
      const data = useCheckExpiration();
      setCompanies(data);
    } else {
      const data = await fetch("/api/landingPage", {
        method: "POST"
      });
      const result = await data.json();
      useSetCompanies(result.expiration, result.data);
      setCompanies(result.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCompaniesFunction();
  }, []);

  const [currentCompany, setCurrentCompany] = useState(0);
  const [companyArray, setCompanyArray] = useState();
  const [companyName, setCompanyName] = useState();

  useEffect(() => {
    if (Object.values(companies).length) {
      setCompanyName(Object.keys(companies)[currentCompany]);
      setCompanyArray(Object.values(companies)[currentCompany]);
    }
  }, [companies, currentCompany]);

  return loading ? (
    <Loading />
  ) : (
    <div className="container container-lg">
      <NavBarStrip>
        {Object.keys(companies).map((companyName, index) => (
          <span onClick={(e) => setCurrentCompany(index)} key={index}>
            <CompanyNameItem
              name={companyName}
              length={Object.values(companies)[index].length}
              active={index === currentCompany}
            />
          </span>
        ))}
      </NavBarStrip>
      {companyArray?.map((company, index) => {
        return (
          <div key={index}>
            <CompanyDetailCard
              companyDetails={company}
              companyInfoName={companyName}
            />
          </div>
        );
      })}
    </div>
  );
};

const NavBarStrip = styled.div`
  margin-bottom: 50px;
`;

// export async function getServerSideProps() {
//   const data = await fetch('http://localhost:3000/api/landingPage', {
//     method: 'POST'
//   })
//   const result = await data.json()
//   return {
//     props: {
//       companies: result.data
//     }
//   }
// }

export default post;
