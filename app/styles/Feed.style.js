import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  backgroud-color: #fff;
  padding: 20px;
`;
export const Card = styled.View`
  background-color: #f8f8f8f8;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 10px;
  border-radius: 10px;
  padding: 5px;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const UserImage = styled.Image`
  width: 50px;
  height: 50px;
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
  font-family: 'OpenSans-Regular';
`;

export const UserNameContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const PostText = styled.Text`
  font-size: 14px;
  font-family: 'OpenSans-Regular';
  color: #000;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Interactions = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const InteractionButtons = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 2px 7px;
  border-radius: 10px;
  background-color: ${props => (props.active ? '#2e64e514' : 'transparent')};
`;

export const InteractionsText = styled.Text`
  font-size: 12px;
  font-family: 'OpenSans-Regular';
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
