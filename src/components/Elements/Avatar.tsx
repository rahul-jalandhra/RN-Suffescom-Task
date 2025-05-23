import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { useMemo } from 'react'
import { DummyAvatarUri } from '../../utils/constants'
import { COLORS } from '../../theme/color';
type AvatarProps = {
    uri?: string;
    style?: ViewStyle;
}
const Avatar: React.FC<AvatarProps> = ({ uri, style }) => {
    const source = useMemo(() => {
        if (typeof uri ==='string' && uri?.length > 0) {
            return { uri };
        } else {
            return {uri: DummyAvatarUri};
        }
    }, [uri]);

    return (
        <View style={[styles.avatarContainer, style]}>
            <Image source={source} style={styles.avatar} />
        </View>
    )
}

export default Avatar;

const styles = StyleSheet.create({
    avatarContainer: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: COLORS.skeleton,
        overflow: 'hidden'
    },
    avatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
})