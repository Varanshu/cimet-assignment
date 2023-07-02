import React from "react";
import { styled } from "styled-components";
import { useCapitalWord } from "../hooks";
import CompanyQuickInfo from "./CompanyQuickInfo";
import CompanyQuickPlanDetail from "./CompanyQuickPlanDetail";
import CompanyQuickPrice from "./CompanyQuickPrice";

const CompanyDetailCard = ({ companyDetails, companyInfoName }) => {
  // console.log(companyDetails);
  return (
    <Box>
      <Legend>
        <LegendTitle>{useCapitalWord(companyInfoName)}</LegendTitle>
        <LegendTitle>{companyDetails.plan_name}</LegendTitle>
      </Legend>

      <Container>
        <ShortInfo>
          <QuickInfoContainer>
            <CompanyQuickInfo
              logo={companyDetails.provider_image}
              content={companyDetails.plan_features}
              title={companyDetails.provider_name}
              pdf={companyDetails.plan_document}
            />
          </QuickInfoContainer>
          <QuickInfoContainer width="35%">
            <CompanyQuickPlanDetail
              discount={companyDetails.dmo_percentage}
              plans={{
                bonus: companyDetails.view_bonus,
                benefit: companyDetails.view_benefit,
                contract: companyDetails.view_contract,
                exitFee: companyDetails.view_exit_fee,
                discount: companyDetails.view_discount
              }}
            />
          </QuickInfoContainer>
          <QuickInfoContainer>
            <CompanyQuickPrice
              discountedPrice={
                companyDetails.expected_annually_discounted_bill_amount
              }
              monthlyPrice={
                companyDetails.expected_monthly_discounted_bill_amount
              }
            />
          </QuickInfoContainer>
        </ShortInfo>
        <Description
          dangerouslySetInnerHTML={{
            __html: companyDetails.dmo_content.Ausgrid
          }}
        />
      </Container>
    </Box>
  );
};

const Box = styled.fieldset`
  border: 5px solid #1f497d;
  background: #transparent;
  border-radius: 5px;
  padding: 25px 15px;
  margin-bottom: 25px;
`;

const Legend = styled.legend`
  display: flex;
  align-item: center;
  gap: 10px;
  background: transparent;
`;

const LegendTitle = styled.div`
  background: grey;
  font-weight: 500;
  padding: 5px;
  font-size: smaller;
  border-radius: 5px;
`;

const Container = styled.div``;

const Description = styled.p`
  color: #828282;
  font-size: small;
`;

const QuickInfoContainer = styled.div`
  flex-basis: ${(props) => props.width || "25%"};
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const ShortInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const QuickInfo = styled.div``;

export default CompanyDetailCard;
