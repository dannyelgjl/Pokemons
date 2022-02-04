import React, { useEffect } from 'react';
import { Header } from '../../components';
import api from '../../services/api';
import { Container } from './styles';

const Home: React.FC = () => {
  useEffect(() => {
    api
      .get('/pokemon?limit=10&offset=0')
      .then(response => console.log('TESTE API:', response.data));
  }, []);

  return (
    <Container>
      <Header title="Pokémon World" />
    </Container>
  );
};

export default Home;
