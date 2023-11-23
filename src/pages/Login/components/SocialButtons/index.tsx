import { GithubIcon, GoogleIcon, NaverIcon } from '@/assets/icons';
import { Flex } from '@/assets/style';
import { CSSProperties } from 'react';
import { SocialContainer } from './style';

interface SocialLogin {
  icon: React.SVGProps<SVGSVGElement>;
  name: string;
  link: string;
  style?: CSSProperties;
}

const SOCIAL_LOGIN_LIST: SocialLogin[] = [
  {
    icon: <GoogleIcon width={25} heigh={25} />,
    name: 'Google',
    link: 'https://google.com',
  },
  {
    icon: <GithubIcon width={25} heigh={25} />,
    name: 'Github',
    link: 'https://github.com',
  },
  {
    icon: <NaverIcon width={25} heigh={25} />,
    name: '네이버',
    link: 'https://naver.com',
    style: {
      backgroundColor: '#03c75a', // 네이버 공식 컬러
      borderColor: '#03c75a', // 네이버 공식 컬러
      color: '#fff',
    },
  },
];

const SocialButtons = (): React.ReactElement => {
  return (
    <Flex column gap="12px">
      {SOCIAL_LOGIN_LIST.map((item) => {
        return (
          <SocialContainer key={`social-${item.name}`} alignItems="center" justifyContent="center" style={item.style}>
            <>
              {item.icon}
              {item.name}로 시작하기
            </>
          </SocialContainer>
        );
      })}
    </Flex>
  );
};

export default SocialButtons;
