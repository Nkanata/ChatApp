import React from 'react';
import {  AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import { compose } from 'redux';
import User from '../User';


import ChatList from '../chats/ChatList';
import {firestoreConnect} from 'react-redux-firebase';

class HomeScreen extends React.Component {
    static  navigationOptions = {
        title: 'Chats',
    };


    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };


    render() {
        //console.log(this.props);
        const { chats } = this.props;


        return (
            <ChatList chat={ chats } navigation={this.props.navigation}/>

        )
    }
}

const mapStateToProps = (state) => {
   //console.log('hey13');
   //console.log(state);
        User.Uid = state.firebase.auth.uid;

   //console.log(User.Uid);

   return {
      chats: state.firestore.ordered
  }
};


export default compose(
    firestoreConnect([
        {
            collection: 'Messages'
        }
        ]),
connect(mapStateToProps)
)(HomeScreen)
