import { useContext } from 'react';
import * as C from './styles'

const Home = () => {

    let user = {
        name: 'John Doe',
    }

  return (
    <C.Container>
      <C.ContentArea>
      <h2>Seja bem-vindo (a)</h2>
      <h1>{user.name}</h1>
      </C.ContentArea>
    </C.Container>
  );
};

export default Home;
