import { useQuery } from '@apollo/client';
import { GET_ALL_PROJECTS } from '../client/query';

import { Container } from '../commons/structure';
import Card from '../components/Card.components';

const Home = () => {
  const { data } = useQuery(GET_ALL_PROJECTS);

  return (
    <>
      <Container background="#282828">
        {data && data.projects.map((res) => (
          <Card key={res.id} dataProject={res} />
        ))}
      </Container>
    </>
  )
}

export default Home;
