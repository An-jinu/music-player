import { Flex } from '@/assets/style';
import SocialButtons from './components/SocialButtons';
import { Container, Line, LoginPage, Text, Title } from './style';

const Login = (): React.ReactElement => {
  return (
    <LoginPage justifyContent="center">
      <Container column gap="40px">
        {/* 타이틀 Box */}
        <Flex column gap="8px">
          <Title>로그인</Title>
          <Text>소셜계정으로 로그인할 수 있습니다.</Text>
        </Flex>
        {/* 타이틀 Box End */}

        <Line />

        {/* 소셜 아이템 Box */}
        <SocialButtons />
        {/* 소셜 아이템 Box End */}
      </Container>
    </LoginPage>
  );
};

export default Login;
