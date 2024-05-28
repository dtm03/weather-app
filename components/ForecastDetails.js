import {Image, Text, View} from "react-native";
import styles from "../config/styles";
import React from "react";

const ForecastDetails = ({ weather }) => {
    return (
        <View style={styles.detailsContainer}>
            <View style={[styles.outerContainer, {marginRight: 16}]}>
                <View style={styles.detailContainer}>
                    <Image source={require('../assets/wind.png')} style={styles.detailIcon}/>
                    <Text style={styles.detailText}>{weather.current?.wind_kph} km/h</Text>
                </View>
            </View>
            <View style={styles.outerContainer}>
                <View style={styles.detailContainer}>
                    <Image source={require('../assets/drop.png')} style={styles.detailIcon}/>
                    <Text style={styles.detailText}>{weather.current?.humidity}%</Text>
                </View>
            </View>
            <View style={[styles.outerContainer, {marginLeft: 16}]}>
                <View style={styles.detailContainer}>
                    <Image source={require('../assets/sunrise.png')} style={styles.detailIcon}/>
                    <Text style={styles.detailText}>{weather?.forecast?.forecastday[0].astro?.sunrise}</Text>
                </View>
            </View>
        </View>
    );
};
export default ForecastDetails;