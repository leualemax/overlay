import React from 'react';
import { Container, Head, Logo, Social, Video } from './Stream.style';

const Stream = () => {
  return <Container>
    <Head>
      {/* <Cam></Cam> */}
      <Logo><img src="./logo.png" alt="logo" /></Logo>
      <Social><img src="./social.png" alt="social" /></Social>
    </Head>
    <Video height="860px" ></Video>
  </Container>
}

export default Stream;