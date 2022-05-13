import React, {useContext} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import CardLayout from '../components/layouts/Card.layout';
import {Container} from '../styles/Feed.style';

const Posts = [
  {
    id: 1,
    likes: '1',
    liked: true,
    user: {
      name: 'Angelena Jolly',
      image: require('../assets/usr.jpg'),
    },
    postText:
      'This is a post of the user , Welcome to my applicatijn named node whwere you can connect with the other coders in this planet !',
  },
  {
    id: 2,
    likes: '12',
    liked: false,
    user: {
      name: 'Angelena Jolly',
      image: require('../assets/usr.jpg'),
    },
    postText:
      'This is a post of the user , Welcome to my applicatijn named node whwere you can connect with the other coders in this planet !',
  },
  {
    id: 3,
    likes: '45',
    liked: true,
    user: {
      name: 'Angelena Jolly',
      image: require('../assets/usr.jpg'),
    },
    postText:
      'This is a post of the user , Welcome to my applicatijn named node whwere you can connect with the other coders in this planet !',
  },
  {
    id: 3,
    likes: '6',
    liked: false,
    user: {
      name: 'Angelena Jolly',
      image: require('../assets/usr.jpg'),
    },
    postText:
      'This is a post of the user , Welcome to my applicatijn named node whwere you can connect with the other coders in this planet !',
  },
];
const HomeScreen = () => {
  const {logout} = useContext(AuthContext);
  return (
    <Container>
      <FlatList
        data={Posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CardLayout item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default HomeScreen;
