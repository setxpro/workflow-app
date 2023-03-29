import { useContext } from 'react';
import * as C from './styles'
import { AuthContext } from '../../contexts/auth';

const Home = () => {

  const { user } = useContext(AuthContext)
  console.log("Hello World!")
  return (
    <C.Container>
      <C.ContentArea>
      <h2>Seja bem-vindo (a)</h2>
      <h1>{user?.name} {user?.middleName}</h1>
      </C.ContentArea>
    </C.Container>
  );
};

export default Home;
