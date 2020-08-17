import styled from '@emotion/styled';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-radius: ${(props) => props.borderRadius || "0"};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: ${(props) => props.background || "#FFF"};
    border-bottom: ${(props) => props.border || 'none'};
    justify-content: ${(props) => props.jc || 'center'};
    align-items: ${(props) => props.ai || 'center'};
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '0'};
    flex-direction: ${(props) => props.direction || 'row'};
`;

export const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${(props) => props.jc || 'center'};
    align-items: ${(props) => props.ai || 'center'};
    flex-direction: ${(props) => props.direction || 'row'};
`;