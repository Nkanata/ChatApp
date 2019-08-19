import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'
import { compose } from 'redux';
import User from '../User';
import ContactList from './ContactList';

class CreateChat extends Component {
    static  navigationOptions = {
        title: 'Contacts',
    };

    render() {
        //console.log(this.state);
        const { contacts } = this.props;
        return (
           <ContactList contacts={contacts} navigation={this.props.navigation}/>
        )
    }

}



const mapStateToProps = (state) => {
    //console.log('hey11');
    //console.log(state.firestore.ordered.Users);
    return {
        contacts: state.firestore.ordered.Users
    }
};

export default compose(
    firestoreConnect([
        {
        collection: 'Users',
        }
    ]),
    connect(mapStateToProps))(CreateChat)
