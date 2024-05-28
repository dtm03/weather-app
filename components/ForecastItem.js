import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../config/styles';
import {weatherImages} from "../config/constants";

const ForecastItem = ({ item }) => {
    let dayName = new Date(item.date).toLocaleDateString('en-US', { weekday: 'long' });
    dayName = dayName.split(',')[0]

    return (
        <View style={styles.forecastItem}>
            <Image source={weatherImages[item?.day?.condition?.text]} style={{ width: 44, height: 44 }} />
            <Text style={{ color: 'white' }}>{dayName}</Text>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{item?.day?.avgtemp_c}°C</Text>
        </View>
    );
};

export default ForecastItem;