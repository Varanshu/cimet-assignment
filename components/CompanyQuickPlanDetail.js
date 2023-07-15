import React from "react";
import { styled } from "styled-components";

import dompurify from "dompurify";

const CompanyQuickPlanDetail = ({ discount, plans }) => {
  const sanitizer = dompurify.sanitize;

  return (
    <div>
      <DiscountWrapper>
        <DiscountPrice>{discount.Ausgrid}</DiscountPrice>
        <DiscountPrice>the current reference price</DiscountPrice>
      </DiscountWrapper>
      <DescriptionContainer>
        {Object.values(plans).map((item, index) => {
          return (
            <DescriptionItem
              dangerouslySetInnerHTML={{ __html: sanitizer(item) }}
              key={index}
            />
          );
        })}
      </DescriptionContainer>
    </div>
  );
};

const DiscountWrapper = styled.div`
  padding: 10px;
  font-size: small;
  background-color: #f5f5f5;
  border-radius: 5px;
  width: fit-content;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const DiscountPrice = styled.span`
  color: #828282;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 5px;
  column-gap: 10px;
  p {
    margin: 0;
    font-size: 12px;
    text-align: center;
  }
`;

const DescriptionItem = styled.p`
  padding: 2px 5px;
  background-color: #deeff1;
  border-radius: 2px;
`;

export default CompanyQuickPlanDetail;
