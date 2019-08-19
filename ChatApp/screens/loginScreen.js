import React from 'react'
import { Text, TextInput, View, TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import User from '../User';
import styles from '../constants/styles';
import {signUp} from '../store/actions/AuthActions'
import {connect} from 'react-redux';

class Login extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        Name: '',
        PhoneNumber: '',
        Email: '',
        Password: '',
    };

    handleChange = key => val => {
        this.setState({[key]: val})
    };

   /** validate = (text) => {
        console.log(text);
        let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
        {
            console.log("Email is Not Correct");
            //this.setState({email:text})
            return false;
        }
        else {
            this.setState({Email:text});
            console.log("Email is Correct");
        }
    }; **/
    submitForm = async () => {
        let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ ;
        if (this.state.PhoneNumber.length < 10) {
            Alert.alert('Error', 'Short Phone Number')
        } else if (this.state.Name.length < 3) {
            Alert.alert('Error', 'Name is Too Short')
        } else if (this.state.Password.length < 6){
            Alert.alert('Short Password', 'Password should have at least 6 characters')
        }else if (reg.test(this.state.Email) === false){
            Alert.alert('Incorrect Email', 'Email entered is not a correct email.')
        } else {
            //save user data
            await AsyncStorage.setItem('userPhone', this.state.PhoneNumber);
            User.phone = this.state.PhoneNumber;
            this.props.navigation.navigate('App');
        }
        this.props.signUp(this.state);
    };


    render () {
        const { Name, PhoneNumber, Email, Password } = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    placeholderTextColor="white"
                    placeholder="UserName"
                    value={Name}
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                    onChangeText={this.handleChange('Name')}

                />

                <TextInput
                    autoCorrect={false}
                    placeholderTextColor="white"
                    placeholder="Phone Number"
                    value={PhoneNumber}
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                    keyboardType="number-pad"
                    onChangeText={this.handleChange('PhoneNumber')}

                />

                <TextInput
                    autoCorrect={false}
                    placeholderTextColor="white"
                    placeholder="Email"
                    value={Email}
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                    onChangeText={this.handleChange('Email')}

                />

                <TextInput
                    autoCorrect={false}
                    placeholderTextColor="white"
                    placeholder="Password"
                    value={Password}
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                    onChangeText={this.handleChange('Password')}

                />

                <TouchableOpacity onPress={this.submitForm}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const mapDispatchToProps  = (dispatch) => {
  return {
      signUp: (newUser) => dispatch(signUp(newUser))
  }
};

export default connect(null, mapDispatchToProps)(Login)

