import {Image, Text, View} from "react-native";
import styles from "../config/styles";
import React from "react";

const ForecastDetails = () => {
    return (
        <View style={styles.detailsContainer}>
            <View style={[styles.outerContainer, {marginRight: 16}]}>
                <View style={styles.detailContainer}>
                    <Image source={require('../assets/wind.png')} style={styles.detailIcon}/>
                    <Text style={styles.detailText}>5 km/h</Text>
                </View>
            </View>
            <View style={styles.outerContainer}>
                <View style={styles.detailContainer}>
                    <Image source={require('../assets/drop.png')} style={styles.detailIcon}/>
                    <Text style={styles.detailText}>60 %</Text>
                </View>
            </View>
            <View style={[styles.outerContainer, {marginLeft: 16}]}>
                <View style={styles.detailContainer}>
                    <Image source={require('../assets/sunrise.png')} style={styles.detailIcon}/>
                    <Text style={styles.detailText}>6:05 AM</Text>
                </View>
            </View>
        </View>
    );
};
export default ForecastDetails;