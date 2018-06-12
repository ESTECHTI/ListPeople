import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
    const { peoples, onPressItem } = props;

    return (
        <FlatList 
            styles={styles.container}
            data={peoples}
            renderItem={({ item }) => (
                <PeopleListItem 
                    people={item}
                    navigateToPeopleDetail = {onPressItem}/>
            )}
            keyExtractor={item => item.name.first}/>
  )
};

const styles = StyleSheet.create ({
    conatiner: {
        backgroundColor: '#e2f9ff'
    }
})

export default PeopleList;