import React from 'react';
import styled from '@emotion/styled';
import { useTranslation, withTranslation } from 'react-i18next';

import { Container, Flex } from '../commons/structure';
import { P } from '../commons/text';
import { percentageCollected } from '../helpers/percantageCollect.helper';

// Bar et FillBar sont une surcharge du composant Container -> extends de ses propriétés css.

const Bar = styled(Container)`
    position: relative;
    border-radius: 45px;
`;

const FillBar = styled(Bar)`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #2c3e50;
    height: 100%;
    width: ${(props) => props.fillWidth || "0%"};
`

const ProgressBar = ({ current, target }) => {
    const percent = percentageCollected(current, target);
    const { t } = useTranslation();

    return (
        <>
            <Bar width="100%" height="10px" background="#7f8fa6">
                <FillBar fillWidth={percent > 100 ? "100%" : percent + "%"} />
            </Bar>
            <Flex style={{ margin: ".5rem" }} jc="space-between">
                <P weight="bold" color="#40739e">{current}€ {t('collected')}{current > 1 ? "s" : ""}</P>
                <P weight="bold" color="#40739e">{percent}%</P>
            </Flex>

        </>
    )
}

export default withTranslation()(ProgressBar);