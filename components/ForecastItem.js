import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../config/styles';

const ForecastItem = ({ icon, day, temperature }) => {
    return (
        <View style={styles.forecastItem}>
            <Image source={icon} style={{ width: 44, height: 44 }} />
            <Text style={{ color: 'white' }}>{day}</Text>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{temperature}</Text>
        </View>
    );
};

export default ForecastItem;