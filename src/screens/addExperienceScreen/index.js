import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StatusBar,
  ScrollView,
  Animated,
  Text,
  Switch,
} from 'react-native';

import {Header, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import AddExperienceStyle from './addExperienceStyle';
import {FloatingLabel} from './floatingLabel';

const AddExperienceScreen = (props) => {
  const navigation = useNavigation();

  const [getExperience, setExperience] = useState({
    company_name: '',
    job_title: '',
    job_desc: '',
    is_active: false,
    start_work: '1998',
    end_work: '2000',
  });

  useEffect(() => {}, []);
  const updateMasterState = (attrName, val) => {
    setExperience({
      ...getExperience,
      [attrName]: val,
    });
  };
  return (
    <View style={AddExperienceStyle.container}>
      <Header
        containerStyle={{
          height: 75,
          backgroundColor: '#fff',
        }}
        leftComponent={{
          color: '#000000',
          icon: 'close',
          onPress: () => {
            navigation.goBack();
          },
        }}
        centerComponent={{
          text: 'Add Experience',
          style: {
            fontSize: 18,
            color: '#000000',
            alignSelf: 'center',
          },
        }}
        rightComponent={{
          icon: 'check',
          style: {
            alignSelf: 'flex-start',
          },
          onPress: () => {
            console.log(getExperience);
          },
        }}
      />
      <StatusBar barStyle="dark-content" backgroundColor="#45AA4A" />
      <ScrollView>
        <View style={AddExperienceStyle.formContiner}>
          <FloatingLabel
            attrName="company_name"
            value={getExperience.company_name}
            title="Company Name"
            updateMasterState={(attr, val) => updateMasterState(attr, val)}
          />
          <FloatingLabel
            attrName="job_title"
            value={getExperience.job_title}
            title="Job Title"
            updateMasterState={(attr, val) => updateMasterState(attr, val)}
          />
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Apakah anda masih aktif ?
            </Text>
            <Switch
              style={{alignSelf: 'flex-start'}}
              trackColor={{false: '#767577', true: '#81b0ff'}}
              onValueChange={(val) =>
                setExperience({...getExperience, is_active: val})
              }
              value={getExperience.is_active}
              thumbColor={getExperience.is_active ? '#f5dd4b' : '#f4f3f4'}
            />
          </View>
          <View style={AddExperienceStyle.yearContainer}>
            <Input
              keyboardType="number-pad"
              maxLength={4}
              onChangeText={(val) =>
                updateMasterState('start_work', val)
              }
              label="Start Work"
              labelStyle={{fontWeight: 'bold', color: '#000000'}}
              containerStyle={{marginLeft: 10, marginRight: 10}}
            />
            {getExperience.is_active == true ? null : (
              <Input
                keyboardType="number-pad"
                maxLength={4}
                onChangeText={(val) => updateMasterState('end_work', val)}
                label="End Work"
                labelStyle={{fontWeight: 'bold', color: '#000000'}}
                containerStyle={{marginLeft: 10, marginRight: 10}}
              />
            )}
          </View>
          <FloatingLabel
            attrName="job_desc"
            value={getExperience.job_desc}
            title="Job Description"
            updateMasterState={(attr, val) => updateMasterState(attr, val)}
            otherTextInputProps={{
              multiline: true,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddExperienceScreen);
