import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {FloatingAction} from 'react-native-floating-action';
import {AlertLoading, ProfileItems, ProfileHeader} from '../../components';
import ProfileScreenStyle from './profileScreenStyle';
import AsyncStorage from '@react-native-community/async-storage';
import {GetProfile} from '../../redux/actions/profileAction';
import {useIsFocused,useNavigation} from '@react-navigation/native';

const ProfileScreen = (props) => {
  // https://stackoverflow.com/questions/60182942/useeffect-not-called-in-react-native-when-back-to-screen
  const isFocused = useIsFocused();
  const navigate = useNavigation()
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    isFocused === true ? getProfile() : false;
  }, [isFocused]);

  const getProfile = async () => {
    try {
      let _token = await AsyncStorage.getItem('user_datas');
      let getAccessToken = JSON.parse(_token);
      props
        .ActionGetProfile(getAccessToken.employe_id)
        .then((res) => {})
        .catch((err) => {});
    } catch (error) {
      throw error;
    }
  };

  return (
    <View style={ProfileScreenStyle.container}>
      <ProfileHeader
        title={props.stateProfile.data.employename}
        isProfile={props.route.name} // Get route name
      />
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        scrollEventThrottle={60}
        onScroll={(val) => {
          const yVal = val.nativeEvent.contentOffset.y;
          // Validate if scrolled and show floatAction
          if (yVal > 150) {
            setActive(!isActive);
          }
        }}>
        {/* Employe employeHeader start*/}
        <View style={ProfileScreenStyle.employeHeader}>
          {/* Show Loading */}
          {props.stateProfile.isLoading == true ? (
            <AlertLoading isVisible={props.stateProfile.isLoading} />
          ) : null}
          {/* containerAbout Start */}
          <View style={ProfileScreenStyle.containerAbout}>
            <Image
              style={ProfileScreenStyle.timelineImage}
              source={{
                uri:
                  'https://cdn.idntimes.com/content-images/community/2019/07/62492904-366195947376217-4100719692085625319-n-d7237d780801a79abc49ad4043e04e32_600x400.jpg',
              }}
            />

            {/* imgProfileContainer Start */}
            <View style={ProfileScreenStyle.imgProfileContainer}>
              <Image
                style={ProfileScreenStyle.imgProfile}
                source={{
                  uri:
                    props.stateProfile.data.photoProfile !== null || ''
                      ? props.stateProfile.data.photoProfile
                      : 'https://cdn.idntimes.com/content-images/community/2019/07/62492904-366195947376217-4100719692085625319-n-d7237d780801a79abc49ad4043e04e32_600x400.jpg',
                }}
              />
              <TouchableOpacity
                style={ProfileScreenStyle.iconEdit}
                onPress={() => console.log('Edit Pressed')}>
                <Icon name="edit" size={24} color="white" />
              </TouchableOpacity>
            </View>
            {/* imgProfileContainer End */}
          </View>
          {/* containerAbout End */}
          <Text
            style={{
              marginTop: 35,
              marginLeft: 10,
              marginBottom: 10,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            {props.stateProfile.data.employename}
          </Text>
          <Text style={{marginLeft: 10, marginBottom: 10, fontSize: 14}}>
            {props.stateProfile.data != null
              ? props.stateProfile.data.employeAddress
              : ''}
          </Text>
        </View>
        {/* Employe employeHeader end*/}

        {/* Employe employeAbout start*/}
        <View style={ProfileScreenStyle.employeAbout}>
          <View
            style={{
              flex: 1,
              marginLeft: 10,
              marginTop: 10,
              marginBottom: 5,
              flexDirection: 'row',
            }}>
            <Text style={{flex: 1, flexDirection: 'row', fontSize: 19}}>
              About
            </Text>
          </View>
          <Text
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 5,
              textAlign: 'left',
            }}>
            {props.stateProfile.data !== null
              ? props.stateProfile.data.employeAbout
              : 'Please Add Your About'}
          </Text>
        </View>
        {/* Employe employeAbout end*/}

        {/* Employe Experience start */}
        <View style={ProfileScreenStyle.employeExperience}>
          <View
            style={{
              flex: 1,
              marginLeft: 10,
              marginTop: 10,
              marginBottom: 5,
              flexDirection: 'row',
            }}>
            <Text style={{flex: 1, flexDirection: 'row', fontSize: 19}}>
              Experience
            </Text>
            <TouchableOpacity
              style={{flex: 1, flexDirection: 'row-reverse', marginLeft: 15}}>
              <Icon name="edit" size={24} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={
              props.stateProfile.data != null
                ? props.stateProfile.data.employeExperience
                : null
            }
            initialNumToRender={2}
            keyExtractor={(item) => item.company_name}
            renderItem={(_item) => {
              return (
                <ProfileItems
                  posistion={_item.item.job_title}
                  place={_item.item.company_name}
                  year={_item.item.end_work}
                  image={require('../../assets/office_building.png')}
                />
              );
            }}
          />
        </View>
        {/* Employe Experience end */}

        {/* Employe Education Start */}
        <View style={ProfileScreenStyle.employeEducation}>
          <View
            style={{
              flex: 1,
              marginLeft: 10,
              marginTop: 10,
              marginBottom: 5,
              flexDirection: 'row',
            }}>
            <Text style={{flex: 1, flexDirection: 'row', fontSize: 19}}>
              Educations
            </Text>
            <TouchableOpacity
              style={{flex: 1, flexDirection: 'row-reverse', marginLeft: 15}}>
              <Icon name="edit" size={24} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={
              props.stateProfile.data != null
                ? props.stateProfile.data.employeEducation
                : null
            }
            keyExtractor={({item}) => item}
            renderItem={(_item) => {
              return (
                <ProfileItems
                  posistion={_item.item.degree}
                  place={_item.item.institution_name}
                  year={_item.item.end_education}
                  image={require('../../assets/school.png')}
                />
              );
            }}
          />
        </View>
        {/* Employe education end */}

        {/* employeContact start */}
        <View style={ProfileScreenStyle.employeContact}>
          <View
            style={{
              flex: 1,
              marginLeft: 10,
              marginTop: 10,
              marginBottom: 5,
              flexDirection: 'row',
            }}>
            <Text style={{flex: 1, flexDirection: 'row', fontSize: 19}}>
              Contact
            </Text>
            <TouchableOpacity
              style={{flex: 1, flexDirection: 'row-reverse', marginLeft: 15}}>
              <Icon name="edit" size={24} />
            </TouchableOpacity>
          </View>
          <View style={ProfileScreenStyle.contentContainer}>
            <View style={ProfileScreenStyle.content}>
              <Image
                source={require('../../assets/link.png')}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'center',
                  marginLeft: 20,
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  marginLeft: 10,
                  alignItems: 'flex-start',
                }}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Website</Text>
                <Text>
                  {props.stateProfile.data != null
                    ? props.stateProfile.data.employeWebsite
                    : ''}
                </Text>
              </View>
            </View>
            <View style={ProfileScreenStyle.content}>
              <Image
                source={require('../../assets/phone.png')}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'center',
                  marginLeft: 20,
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  marginLeft: 10,
                  alignItems: 'flex-start',
                }}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Phone</Text>
                <Text>
                  {props.stateProfile.data != null
                    ? props.stateProfile.data.employePhone
                    : ''}
                </Text>
              </View>
            </View>
            <View style={ProfileScreenStyle.content}>
              <Image
                source={require('../../assets/link.png')}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'center',
                  marginLeft: 20,
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  marginLeft: 10,
                  alignItems: 'flex-start',
                }}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Github</Text>
                <Text>
                  {props.stateProfile.data != null
                    ? props.stateProfile.data.employeGithub
                    : ''}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* employeContact end */}
      </ScrollView>

      <FloatingAction
        visible={isActive}
        distanceToEdge={20}
        color="#45AA4A"
        showBackground={false}
        onPressItem={(val) => {
          // Add execution by name actions
          if (val === 'bt_addExperience') {
            navigate.navigate("addExperience")
          }
        }}
        actions={[
          {
            color: '#45AA4A',
            text: 'Experience',
            name: 'bt_addExperience',
            icon: require('../../assets/office_building.png'),
            position: 1,
          },
          {
            text: 'Education',
            color: '#36c4e0',
            icon: require('../../assets/school.png'),
            name: 'bt_addEducation',
            position: 2,
          },
          {
            text: 'Contact',
            color: '#de95e8',
            icon: require('../../assets/add_contact.png'),
            name: 'bt_addContact',
            position: 3,
          },
        ]}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    stateProfile: state.profileReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ActionGetProfile: (uuid) => dispatch(GetProfile(uuid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
