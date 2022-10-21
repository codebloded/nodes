import React, { createRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

import { MainContainer, ProfilePicture, StatsLargeText, StatsSmallText, StatsContainer, PicContainer, ProfileName, ProfileBio, EditProfile, SettingsIcon, BottomTabContainer } from '../styles/Profile.styles';
import { Container } from '../styles/Profile.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, List } from 'react-native-paper';

import InteractiveSectionUser from '../components/InteractiveSectionUser';
import InteractiveSectionOther from '../components/InteractiveSectionOther';
import BottomTabs from '../components/layouts/BottomTabs';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { BottomContainer } from '../styles/Home.styles';


const ProfileScreen = ({ navigation }) => {
	const settingsRef = createRef();
	const fall = new Animated.Value(1)
	const renderSettings = () => (
		<BottomContainer>
			<TouchableOpacity>
				<List.Item
					title="Reset Password"
					onPress={() => navigation.navigate('reset')}
					left={props => <List.Icon {...props} icon="key" />}
				/>
			</TouchableOpacity>
			<TouchableOpacity>
				<List.Item
					title="Delete Account"
					left={props => <List.Icon {...props} icon="delete" />}
				/>
			</TouchableOpacity>

		</BottomContainer>

	)
	return (
		<Container>

			<MainContainer>
				<PicContainer>
					<ProfilePicture source={require("../assets/usr.jpg")} />
				</PicContainer>

				<StatsContainer>
					<StatsLargeText>12</StatsLargeText>
					<StatsSmallText>Posts</StatsSmallText>
				</StatsContainer>
				<StatsContainer>
					<StatsLargeText>19K</StatsLargeText>
					<StatsSmallText>Followers</StatsSmallText>
				</StatsContainer>
				<StatsContainer>
					<StatsLargeText>563</StatsLargeText>
					<StatsSmallText>Following</StatsSmallText>
				</StatsContainer>

			</MainContainer>

			<TouchableOpacity>
				<ProfileName>@Angelena Jolly</ProfileName>
			</TouchableOpacity>
			<ProfileBio>Hey there! I am using Node. I'm going to be a SDE-1 one day for sure ! GSOC'22 @Sugarlabs</ProfileBio>
			<InteractiveSectionUser settingsRef={settingsRef} />
			{/* <InteractiveSectionOther /> */}


			<BottomTabContainer>
				<BottomTabs />
			</BottomTabContainer>

			<BottomSheet
				ref={settingsRef}
				snapPoints={[200, 0]}
				renderContent={renderSettings}
				initialSnap={1}
				callbackNode={fall}
				enabledGestureInteraction={true}
				enabledContentGestureInteraction={true}
				enabledInnerScrolling={false}
			/>

		</Container>


	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	color: {
		color: 'black',
	}
});

export default ProfileScreen;
