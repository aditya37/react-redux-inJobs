import React, {Component} from 'react';
import {Input} from 'react-native-elements';
import {string, func, object, number} from 'prop-types';
import {View, Animated, StyleSheet, TextInput} from 'react-native';
export class FloatingLabel extends Component {
  static propTypes = {
    /* 
    state variable name or state keys 
    ex: setUsername({first_name: "name"}) 
    first_name is key name is value 
    */
    attrName: string.isRequired,

    // Value of label
    title: string.isRequired,

    value: string.isRequired,

    /* 
    function for update value upon entering input field
    this function like onChange() function
    */
    updateMasterState: func.isRequired,
    keyboardType: string,

    // to control size of title when field isActive
    titleActiveSize: number,
    // to control size of title when field inActive
    titleInActiveSize: number,
    // to control color of title when field is active
    titleActiveColor: string,
    // to control color of title when field inActive
    titleInactiveColor: string,
    // For textInputStyle
    textInputStyles: object,
    // for handle other and default props from parent component
    otherTextInputProps: object,
  };

  // Default props
  static defaultProps = {
    keyboardType: 'default',
    titleActiveSize: 15.5,
    titleInActiveSize: 14,
    titleActiveColor: 'black',
    titleInactiveColor: 'dimgrey',
    textInputStyles: {},
    otherTextInputProps: {},
  };

  constructor(props) {
    super(props);
    const {value} = this.props;
    this.position = new Animated.Value(value ? 1 : 0);
    this.state = {
      isFieldActive: false,
    };
  }

  // Handleing onFocus()
  _handleOnFocus = () => {
    if (!this.state.isFieldActive) {
      this.setState({isFieldActive: true});
      Animated.timing(this.position, {
        toValue: 1,
        duration: 150,
      }).start();
    }
  };
  // Handleing onChangeText()
  _onChangeText = (updatedVal) => {
    const {attrName, updateMasterState} = this.props;
    updateMasterState(attrName, updatedVal);
  };

  _handleBlur = () => {
    if (this.state.isFieldActive && !this.props.value) {
      this.setState({isFieldActive: false});
      Animated.timing(this.position, {
        toValue: 0,
        duration: 150,
      }).start();
    }
  };

  _returnAnimatedTitleStyles = () => {
    const {isFieldActive} = this.state;
    const {
      titleActiveColor,
      titleInactiveColor,
      titleActiveSize,
      titleInActiveSize,
    } = this.props;
    return {
      top: this.position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0],
      }),
      fontSize: isFieldActive ? titleActiveSize : titleInActiveSize,
      color: isFieldActive ? titleActiveColor : titleInactiveColor,
      fontWeight: isFieldActive ? 'bold' : null,
    };
  };

  render() {
    return (
      <View style={Styles.container}>
        <Animated.Text
          style={[Styles.titleStyles, this._returnAnimatedTitleStyles()]}>
          {this.props.title}
        </Animated.Text>
        <Input
          value={this.props.value}
          style={[Styles.textInput, this.props.textInputStyles]}
          onFocus={this._handleOnFocus}
          onBlur={this._handleBlur}
          onChangeText={this._onChangeText}
          keyboardType={this.props.keyboardType}
          {...this.props.otherTextInputProps}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  textInput: {
    marginTop: 10,
  },
  titleStyles: {
    marginBottom: 15,
    position: 'absolute',
    marginLeft: 14,
  },
});
