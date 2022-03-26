import Head from "next/head";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      Login
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
