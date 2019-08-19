import React, { Component } from 'react'
import {FlatList, Text, TouchableOpacity, View} from 'react-native';


class ContactList extends Component {

    renderRow = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Chat', item)}
                style={{padding:25,borderBottomColor:'#ccc',borderBottomWidth:1}}>
                <Text style={{fontSize:20}}>{item.UserName}</Text>
            </TouchableOpacity>
        )

    };

        render() {
        console.log(this.props);
        return(
            <View>
                <FlatList   keyExtractor={(item)=> item.id}
                            data={this.props.contacts}
                            renderItem={this.renderRow} />
            </View>
        )
    }

}

export default ContactList
