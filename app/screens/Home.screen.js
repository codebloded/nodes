import React, { createRef, useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Alert } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import CardLayout from '../components/layouts/Card.layout';
import { Container } from '../styles/Feed.style';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AddCommnetInput, BottomContainer, CommentInnerContainer, Icons, InnerContainer } from '../styles/Home.styles';
import { Avatar, TextInput } from 'react-native-paper';

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
		id: 53,
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
	const { logout } = useContext(AuthContext);
	const bs = createRef();
	const commnetBottomSheetRef = createRef();
	const fall = new Animated.Value(1)
	const renderInner = () => (
		<BottomContainer>
			<InnerContainer>
				<Icons>
					<Ionicons name="ios-link-sharp" size={25} color="black" />
				</Icons>
				<Icons>
					<Ionicons name="ios-share-social" size={25} color="black" />
				</Icons>
				<Icons>
					<Ionicons name="ios-trash" size={25} color="black" onPress={() => Alert.alert("Are you sure you want to delete it")} />
				</Icons>
			</InnerContainer>
		</BottomContainer>
	);

	const renderCommentInput = () => (
		<BottomContainer>
			<CommentInnerContainer>
				<Avatar.Icon size={30} icon="account" />
				<AddCommnetInput>
					<TextInput
						label="Add a comment"
						mode="flat"
						underlineColor='#fafafafa'
						theme={{ colors: { primary: '#000' } }}
						style={{ backgroundColor: '#fafafa' }}
					/>
				</AddCommnetInput>
			</CommentInnerContainer>
		</BottomContainer>

	)


	return (
		<>

			<Container>
				<FlatList
					data={Posts}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => <CardLayout item={item} bs={bs} commnetBottomSheetRef={commnetBottomSheetRef} />}
					showsVerticalScrollIndicator={false}
				/>
			</Container>

			<BottomSheet
				ref={bs}
				snapPoints={[330, 0]}
				renderContent={renderInner}
				initialSnap={1}
				callbackNode={fall}
				enabledGestureInteraction={true}
				enabledContentGestureInteraction={true}
				enabledInnerScrolling={false}
			/>

			<BottomSheet
				ref={commnetBottomSheetRef}
				snapPoints={[100, 0]}
				renderContent={renderCommentInput}
				initialSnap={1}
				callbackNode={fall}
				enabledGestureInteraction={true}
				enabledContentGestureInteraction={true}
				enabledInnerScrolling={false}
			/>


		</>


	);
};

export default HomeScreen;
