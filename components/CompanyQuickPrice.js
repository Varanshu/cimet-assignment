import React from 'react'
import { styled } from 'styled-components'

const CompanyQuickPrice = ({
    discountedPrice,
    monthlyPrice
}) => {
    return (
        <Wrapper>
            <Title>Estimate Cost</Title>
            <Details>
                <AnnualPrice>${discountedPrice}^<span>/yr</span></AnnualPrice>
                <MonthlyPrice>${monthlyPrice}<span>/mo</span></MonthlyPrice>
            </Details>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-width: 50%;
    width: fit-content;
`

const Title = styled.h2`
    border-radius: 5px 5px 0px 0px;
    margin: 0px;
    font-size: 10px;
    padding: 2px 5px;
    background-color: #2f5ea1;
    color: #a7bdd9;
`

const Details = styled.div`
    padding: 10px 5px;
    background-color: #cfe7ea;
    border-radius: 0px 0px 5px 5px ;
`

const AnnualPrice = styled.p`
    font-size: 20px;
    color: #24367c;
    font-weight: bold;
    margin: 0;
    span {
        font-size: 12px;
        color: #818485;
        font-weight: 400;
    }
`

const MonthlyPrice = styled.p`
    font-size: 12px;
    color: #3868a6;
    font-weight: bold;
    margin: 0;
    span {
        font-size: 12px;
        color: #818485;
        font-weight: 400;
    }
`

export default CompanyQuickPrice