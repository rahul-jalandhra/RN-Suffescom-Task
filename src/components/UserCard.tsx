import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Title, Description } from './Typography';
import Avatar from './Elements/Avatar';
import { COLORS } from '../theme/color';

interface UserCardProps {
    image: string;
    name: string;
    status: string;
    description: string;
}

const getStatusStyles = (status: string) => {
    switch (status) {
        case 'Alive':
            return {
                container: { backgroundColor: '#00C85320' },
                text: { color: '#00C853' }
            };
        case 'Dead':
            return {
                container: { backgroundColor: '#FF174420' },
                text: { color: '#FF1744' }
            };
        default:
            return {
                container: { backgroundColor: '#75757520' },
                text: { color: '#757575' }
            };
    }
};

const UserCard: React.FC<UserCardProps> = ({ image, name, status, description }) => {
    const statusStyles = getStatusStyles(status);

    return (
        <View style={styles.container}>
            <Avatar uri={image}/>
            <View style={styles.infoContainer}>
                <Title style={styles.title}>{name}</Title>
                <View style={[styles.statusContainer, statusStyles.container]}>
                    <Text style={[styles.statusText, statusStyles.text]}>{status}</Text>
                </View>
                <Description
                    style={styles.description}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {description}
                </Description>
            </View>
        </View>
    );
};

export default UserCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        gap: 16,
        borderWidth:0.2,
        borderColor:COLORS.gray,
        marginBottom:10,
        marginHorizontal:10,
        borderRadius:10
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        marginBottom: 8,
    },
    statusContainer: {
        alignSelf: 'flex-start',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginBottom: 6,
    },
    statusText: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    description: {
        marginBottom: 0,
    },
});