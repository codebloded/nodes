import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding: 20px;
  padding-top: 0px;
`;
export const Card = styled.View`
  background-color: #f3f3f3;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 10px;
  border-radius: 15px;
  padding: 5px;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const More = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #dddddd;
  border-radius: 15px;
  padding: 5px;
  margin-bottom: 10px;
  align-items: center;
`;
export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-left: 10px;
`;
export const UserName = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: 'OpenSans-Bold';
`;

export const FeedTime = styled.Text`
  font-size: 10px;
  color: #666;
  font-family: 'OpenSans-Regular';
`;

export const UserNameContainer = styled.TouchableOpacity`
  flex-direction: column;
  margin-left: 10px;
`;

export const PostText = styled.Text`
  font-size: 14px;
  font-family: 'OpenSans-Regular';
  color: #000;
  padding-left: 5px;
  padding-right: 10px;
  margin-bottom: 10px;
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Interactions = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const InteractionButtons = styled.TouchableOpacity`
  flex-direction: row;
  padding: 2px 7px;
  border-radius: 10px;
  background-color: ${props => (props.active ? '#2e64e514' : 'transparent')};
`;

export const InteractionsText = styled.Text`
  font-size: 12px;
  font-family: 'OpenSans-Regular';
  font-weight: bold;
  color: ${props => (props.active ? '#2e64e5' : '#333')};
  margin-left: 5px;
`;

export const Divider = styled.View`
  border: 1px solid #dddddd;
  border-bottom-width: 1px;
  width: 92%;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const CommentsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 5px;
  margin-bottom: 5px;
`;

export const Comment = styled.View`
  flex-direction: row;
  padding-left: 5px ;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const CommentText = styled.Text`
  font-size: 12px;
  font-family: 'OpenSans-Regular';
  color: #000;
`;
