import React from "react";
import {StatusBar, SafeAreaView, View, Image, Text, ScrollView} from "react-native";
import styles from "../config/styles";
import Searchbar from "../components/Searchbar";
import ForecastDetails from "../components/ForecastDetails";
import ForecastItem from "../components/ForecastItem";
import {ArrowTrendingUpIcon, CalendarDaysIcon} from "react-native-heroicons/outline";

export default function HomeScreen() {

    const forecastData = [
        { icon: require('../assets/heavyrain.png'), day: 'Monday', temperature: '25°C' },
        { icon: require('../assets/heavyrain.png'), day: 'Tuesday', temperature: '25°C' },
        { icon: require('../assets/heavyrain.png'), day: 'Wednesday', temperature: '25°C' },
        { icon: require('../assets/heavyrain.png'), day: 'Thursday', temperature: '25°C' },
        { icon: require('../assets/heavyrain.png'), day: 'Friday', temperature: '25°C' },
        { icon: require('../assets/heavyrain.png'), day: 'Friday', temperature: '25°C' },
        { icon: require('../assets/heavyrain.png'), day: 'Friday', temperature: '25°C' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"/>
            <Image source={require('../assets/background.jpg')} blurRadius={70} style={styles.backgroundImage}/>
            {/* search section */}
            <Searchbar/>
            {/* forecast section */}
            <View style={styles.forecastContainer}>
                <Text style={styles.cityText}>London,
                    <Text style={styles.countryText}> United Kingdom</Text>
                </Text>
                <Text style={styles.degreeText}>25°C</Text>
                <Image source={require('../assets/sunny.png')} style={{height: 220, resizeMode: 'contain'}}/>
            </View>
            {/* forecast details */}
            <View style={{flexDirection: 'row', marginBottom: 8, position: 'absolute', bottom: 260}}>
                <ArrowTrendingUpIcon size={20} color="lightgray"/>
                <Text style={styles.sectionHeaders}>Details</Text>
            </View>
            <ForecastDetails/>
            {/* forecast for the next days */}
            <View style={{flexDirection: 'row', marginBottom: 8, position: 'absolute', bottom: 150}}>
                <CalendarDaysIcon size={20} color="lightgray"/>
                <Text style={styles.sectionHeaders}>Forecast</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{maxHeight: 130, position: 'absolute', bottom: 16}}>
                {forecastData.map((item, index) => (
                    <ForecastItem key={index} {...item} />
                ))}
            </ScrollView>

        </SafeAreaView>
    );
}
