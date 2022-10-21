import React, { createRef, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
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
	StatsContainer,
	More,
	Header,
	CommentsContainer,
	Comment,
	CommentText,
	UserAvatar,
	AddComment,
} from '../../styles/Feed.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, Text, TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardLayout = ({ item, bs, commnetBottomSheetRef }) => {
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
			<Header>
				<UserInfo>
					<UserImage source={require('../../assets/usr.jpg')} />
					<UserNameContainer>
						<UserName>{item.user.name}</UserName>
						<FeedTime>4 hours ago</FeedTime>
					</UserNameContainer>
				</UserInfo>
				<More>
					<Ionicons name="ellipsis-horizontal" size={20} color="#73788b" onPress={() => bs.current.snapTo(0)} />
				</More>
			</Header>

			{item.postText !== 'none' ? (
				<PostImage source={item.user.image} />
			) : (
				<Divider />
			)}

			<Interactions>
				<InteractionButtons>
					<Ionicons name={liked} size={25} color={likedColor} />
				</InteractionButtons>
				<InteractionButtons>
					<Ionicons name="chatbubble-outline" size={25} color="#333" onPress={() => commnetBottomSheetRef.current.snapTo(0)} />
				</InteractionButtons>
				<InteractionButtons>
					<Ionicons name="paper-plane-outline" size={25} color="#333" />
				</InteractionButtons>
			</Interactions>

			<StatsContainer>
				<InteractionsText>2334 likes</InteractionsText>
				<InteractionsText>|</InteractionsText>
				<InteractionsText>24 comments</InteractionsText>
			</StatsContainer>

			<PostText>{item.postText}</PostText>

			<CommentsContainer>
				<UserName>hix34</UserName>
				<Comment><CommentText>Nice application in react native </CommentText></Comment>
			</CommentsContainer>

			<CommentsContainer>
				<UserName>rohan16</UserName>
				<Comment><CommentText>Nice application in react native </CommentText></Comment>
			</CommentsContainer>
			<AddComment>
				<Avatar.Icon size={30} icon="account" />
				<TouchableOpacity onPress={() => commnetBottomSheetRef.current.snapTo(0)}>
					<Text style={{ padding: 5 }}>Add comments</Text>
				</TouchableOpacity>
			</AddComment>

		</Card>
	);
};

export default CardLayout;
