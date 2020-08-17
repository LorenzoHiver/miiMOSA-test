import styled from '@emotion/styled';

export const P = styled.p`
    font-size: ${(props) => props.size || '16px'};
    font-weight: ${(props) => props.weight || '400'};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
`;

export const H2 = styled.h2`
    font-size: ${(props) => props.size || '16px'};
    font-weight: ${(props) => props.weight || '400'};
    color: ${(props) => props.color};
`;