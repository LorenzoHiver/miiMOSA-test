import React from 'react';
import { useRouter } from 'next/router'
import { GET_ALL_PROJECTS, FIND_ONE_PROJECT } from '../client/query';
import { client } from '../apolloConfig';
import { P } from '../commons/text';
import { Container } from '../commons/structure';
import Card from '../components/Card.components';

const Project = ({ projectData }) => {
  const router = useRouter()

  return (
    <>
      {projectData && (
        <Container height="100vh" background="#282828">
          <P onClick={() => router.push("/")} style={{ position: "absolute", top: "15px", left: "15px", cursor: "pointer" }} color="#fff" weight="bold" >Retour ?</P>
          <Card dataProject={projectData.data.project} />
        </Container>
      )}

    </>
  )
}

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_ALL_PROJECTS
  });

  const paths = data.projects.map((project) => {
    return { params: { id: project.id } };
  });
  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async ({ params }) => {
  const projectData = await client.query({
    query: FIND_ONE_PROJECT,
    variables: { id: params.id }
  });

  return {
    props: {
      projectData,
    },
  };
};


export default Project;