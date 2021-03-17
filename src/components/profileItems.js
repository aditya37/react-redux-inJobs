import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ProfileItems = (props) => {
  return (
    <View style={profileItemsStyle.container}>
      <View style={profileItemsStyle.cardContainer}>
        <View style={profileItemsStyle.contentContainer}>
          <Image
            style={profileItemsStyle.iconContent}
            source={props.image}
          />
          <View style={profileItemsStyle.content}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                marginBottom: 4,
              }}>
                {props.posistion}
              </Text>
            <Text>{props.place}</Text>
            <Text>{props.year}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const profileItemsStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  cardContainer: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5,
  },
  iconContent: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
});
export default ProfileItems;
