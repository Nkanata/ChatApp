import React, {Component} from 'react'

import { View, Text, SafeAreaView, TextInput, FlatList, TouchableOpacity} from 'react-native'
import styles from '../constants/styles';

import { connect } from 'react-redux'

import { createText } from '../store/actions/ChatActions';

import User from '../User';

import {firestoreConnect} from 'react-redux-firebase';

import { compose } from 'redux';



class ChatDetails extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.UserName
        }
    };

    state = {
        textMessage: '',
        receiver: this.props.navigation.state.params.Phone,
        sender: User.phone

    };
    doc = this.props.navigation.state.params.id;
    handleChange = key => val => {
      this.setState({[key]: val})
    };

    sendMessage = () => {
        this.props.createText(this.state);
        //console.log(this.props.navigation);
        //console.log(User.phone);
        this.setState({textMessage: ''});

    };

    render () {
        //console.log('Hey10');
       console.log(this.props);

        return (
            <SafeAreaView>



                <View style={{flexDirection:'row', alignItems:'stretch', justifyContent:'space-around'}}>
                <TextInput
                    style={styles.textInput}
                    value={this.state.textMessage}
                    placeholder="Type a Message..."
                    onChangeText={this.handleChange('textMessage')}
                    onSubmitEditing={this.sendMessage}
                />
                <TouchableOpacity onPress={this.sendMessage}>
                    <Text style={styles.btnText}>Send</Text>
                </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
    return {
        createText: (text) => dispatch(createText(text))
    }
};

export default connect(null, mapDispatchToProps)(ChatDetails)
