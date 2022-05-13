import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Card,
  Container,
  FeedTime,
  Interactions,
  InteractionsText,
  InteractionButtons,
  PostImage,
  PostText,
  UserImage,
  UserInfo,
  UserName,
  UserNameContainer,
  Divider,
} from '../../styles/Feed.style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CardLayout = ({item}) => {
  const liked = item.liked ? 'heart' : 'heart-outline';
  const likedColor = item.liked ? '#2e64e5' : '#333';
  let likedText = '';

  if (item.likes == 1) {
    likedText = '1 Like';
  } else if (item.likes > 1) {
    likedText = item.likes + ' Likes';
  } else {
    likedText = 'Like';
  }
  return (
    <Card>
      <UserInfo>
        <UserImage source={require('../../assets/usr.jpg')} />
        <UserNameContainer>
          <UserName>{item.user.name}</UserName>
          <FeedTime>4 hours ago</FeedTime>
        </UserNameContainer>
      </UserInfo>
      <PostText>{item.postText}</PostText>
      {item.postText !== 'none' ? (
        <PostImage source={item.user.image} />
      ) : (
        <Divider />
      )}

      <Interactions>
        <InteractionButtons active={item.liked}>
          <Ionicons name={liked} size={25} color={likedColor} />
          <InteractionsText active={item.liked}>{likedText}</InteractionsText>
        </InteractionButtons>
        <InteractionButtons active={item.liked}>
          <Ionicons name="md-chatbubble-outline" size={25} color={likedColor} />
          <InteractionsText>Comments</InteractionsText>
        </InteractionButtons>
      </Interactions>
    </Card>
  );
};

export default CardLayout;
