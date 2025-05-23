import { StyleSheet, View } from 'react-native'
import React from 'react'
import Skeleton from './Skeleton'
import { COLORS } from '../theme/color'

const UserCardLoading = () => {
    return (
        <View style={styles.container}>
            <Skeleton
                width={60}
                height={60}
                borderRadius={30}
                style={styles.avatar}
            />
            <View style={styles.infoContainer}>
                <Skeleton width={120} height={18} borderRadius={4} style={styles.title} />
                <Skeleton width={80} height={14} borderRadius={4} style={styles.status} />
                <Skeleton width={160} height={12} borderRadius={4} style={styles.description} />
            </View>
        </View>
    )
}

export default UserCardLoading

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderWidth: 0.2,
        borderColor: COLORS.gray,
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 10
    },
    avatar: {
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        marginBottom: 8,
    },
    status: {
        marginBottom: 6,
    },
    description: {
        marginBottom: 0,
    },
});