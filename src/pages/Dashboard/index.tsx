import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';

import {useAuth} from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
} from './styles';
const Dashboard: React.FC = () => {
  const {signOut, user} = useAuth();

  const {navigate} = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar
            source={{
              uri:
                'http://192.168.0.107:3333/files/89d320999ecd62d548ae-Luciano.png',
            }}
          />
        </ProfileButton>
      </Header>
    </Container>
  );
};

export default Dashboard;
