import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    background-color: #fff; 
`;


export const StatsContainer = styled.View`;
    align-items: center;
    justify-content: space-evenly;
`;

export const StatsLargeText = styled.Text`
    font-size: 20px;
    font-family: 'OpenSans-VariableFont_wdth,wght';
    font-weight: bold;
    color: #000;
`;

export const StatsSmallText = styled.Text`
    font-size: 14px;
    font-family: 'OpenSans-VariableFont_wdth,wght';
    font-weight: bold;
    color: #666;
`;

export const MainContainer = styled.View`
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
 
    padding: 20px;
    padding-top: 0px;
    padding-bottom: 0px;
`;

export const PicContainer = styled.TouchableOpacity`
    align-items: center;
    justify-content: space-evenly;
`;

export const ProfilePicture = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 55px;
    border: 4px solid #666;
`;

export const ProfileName = styled.Text`
    font-size: 15px;
    font-family: 'OpenSans-VariableFont_wdth,wght';
    font-weight: bold;
    color: #000;
    margin-top: 5px;
    margin-left:15px;
`;

export const ProfileBio = styled.Text`
    font-size: 14px;
    width:75%;
    font-family: 'OpenSans-VariableFont_wdth,wght';
    font-weight: bold;
    color: #666;
    margin-top: 10px;
    margin-left:15px;
`;

export const EditProfile = styled.Button`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    background-color: #000;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`;

export const SettingsIcon = styled.TouchableOpacity`
    border : 1px solid #6666;
    background-color: #6666;
    border-radius: 20px;
    padding: 5px;
    margin-left: 15px;
    margin-right: 15px;
`;

export const BottomTabContainer = styled.View`
    flex: 1;
    margin-top: 40px;
`;
