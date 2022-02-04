import React, { useEffect } from 'react';
import api from '../../services/api';
import { Container, Title } from './styles';

const Home: React.FC = () => {
  useEffect(() => {
    api
      .get('/pokemon?limit=10&offset=0')
      .then(response => console.log('TESTE API:', response.data));
  }, []);

  return (
    <Container>
      <Title>Estruturando projeto poke</Title>
    </Container>
  );
};

export default Home;
