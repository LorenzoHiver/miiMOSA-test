import React from 'react';
import { useRouter } from 'next/router'
import styled from '@emotion/styled';
import { useTranslation, withTranslation } from 'react-i18next';

import { Container } from '../commons/structure';
import { H2, P } from '../commons/text';
import ProgressBar from './ProgressBar.components';

const Img = styled.img`
    margin: 1rem 0;
    width: 100%;
    height: 40%;
`;

const Card = ({ dataProject }) => {
    const router = useRouter();
    const { t } = useTranslation();

    const checkStatus = (status) => {
        switch (status) {
            case 'success':
                return '✅';
            case 'in_progress':
                return '⏳';
            case 'failed': ;
                return '❌';
        }
    };

    return (
        <Container
            onClick={() => router.push(`/${dataProject.id}`)}
            style={{ cursor: 'pointer' }}
            height="50vh"
            width="20%"
            borderRadius="25px"
            background="#ECECEC"
            direction="column"
            jc="flex-start"
            padding="1rem" margin="1rem">
            <H2 color="#211C22" size="1.5rem" weight="bold">{dataProject.title}</H2>
            <Img src={dataProject.image_url} />
            <P margin=".5rem 0">{checkStatus(dataProject.status)}</P>
            <ProgressBar current={dataProject.collected} target={dataProject.target} />
            <P style={{ marginTop: "auto" }} weight="500">{t('asked')} {dataProject.user.first_name} {dataProject.user.last_name}</P>
            <P>{dataProject.description}</P>
        </Container>
    )
}

export default withTranslation()(Card);