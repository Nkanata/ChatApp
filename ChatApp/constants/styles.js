import React from 'react'

import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textInput: {
        width: 300,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#666',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        justifyContent: 'space-between',
    },
    btnText: {
        padding:10,
        color: 'darkgreen',
        fontSize: 20,
    },
});

export default styles;
