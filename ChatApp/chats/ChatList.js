import React, {Component} from 'react'
import {FlatList, Text, TouchableOpacity, View} from 'react-native';



class ChatList extends Component {

    renderRow = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Chat', item)}
                style={{padding:25,borderBottomColor:'#ccc',borderBottomWidth:1}}>
                <Text style={{fontSize:20}}>{item.id}</Text>
            </TouchableOpacity>
        )
    };

    render(){
        //console.log('Hey9');
        //console.log(this.props);
        return (
            <View>
                <View>
                <FlatList
                    data={this.props.chat}
                    renderItem={this.renderRow}
                    keyExtractor={(item)=>item.id}
                />
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Create')}>
                    <Text style={{fontSize: 20}}>New Chat</Text>
                </TouchableOpacity>


                    </View>
                )
    }
}





export default ChatList
