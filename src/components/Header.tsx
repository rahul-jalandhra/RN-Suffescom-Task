import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Title } from './Typography'

const Header = () => {
  return (
    <View style={styles.header}>
     <Title>Characters</Title>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 12,
    },
})