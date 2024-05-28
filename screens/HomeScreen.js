import React, {useState, useEffect} from "react";
import {StatusBar, SafeAreaView, View, Image, Text, ScrollView, ProgressBarAndroid} from "react-native";
import styles from "../config/styles";
import Searchbar from "../components/Searchbar";
import ForecastDetails from "../components/ForecastDetails";
import ForecastItem from "../components/ForecastItem";
import {ArrowTrendingUpIcon, CalendarDaysIcon} from "react-native-heroicons/outline";
import {weatherImages} from "../config/constants";
import {fetchWeatherForecast} from "../components/api";
import * as Progress from "react-native-progress";
import {getData} from "../components/asyncStorage";

export default function HomeScreen() {
    const [weather, setWeather] = useState({});
    const {current, location} = weather;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            let myCity = await getData("city");
            let cityName = myCity ? myCity : "Berlin";
            return fetchWeatherForecast({ cityName: cityName, days: 7 }).then((data) => {
                setWeather(data);
                setLoading(false);
            });
        };

        fetchData();

    }, []);

    return (
        <View>
            <StatusBar style="light"/>
            <Image source={require('../assets/background.jpg')} blurRadius={70} style={styles.backgroundImage}/>
            {
                loading ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.loadingContainer}>
                            <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
                        </View>

                    </View>
                ) : (
                    <SafeAreaView style={styles.container}>
                        {/* search section */}
                        <Searchbar setWeather={setWeather} setLoading={setLoading}/>
                        {/* forecast section */}
                        <View style={styles.forecastContainer}>
                            <Text style={styles.cityText}>{location?.name},
                                <Text style={styles.countryText}>{" " + location?.country}</Text>
                            </Text>
                            <Text style={styles.degreeText}>{current?.temp_c}°C</Text>
                            <Image source={weatherImages[current?.condition?.text]}
                                   style={{height: 220, resizeMode: 'contain'}}/>
                        </View>
                        {/* forecast details */}
                        <View style={{flexDirection: 'row', marginBottom: 8, position: 'absolute', bottom: 260}}>
                            <ArrowTrendingUpIcon size={20} color="lightgray"/>
                            <Text style={styles.sectionHeaders}>Details</Text>
                        </View>
                        <ForecastDetails weather={weather}/>
                        {/* forecast for the next days */}
                        <View style={{flexDirection: 'row', marginBottom: 8, position: 'absolute', bottom: 150}}>
                            <CalendarDaysIcon size={20} color="lightgray"/>
                            <Text style={styles.sectionHeaders}>Forecast</Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}
                                    style={{maxHeight: 130, position: 'absolute', bottom: 16}}>
                            {weather?.forecast?.forecastday?.map((item, index) => (
                                <ForecastItem key={index} item={item}/>
                            ))}
                        </ScrollView>

                    </SafeAreaView>
                )
            }
        </View>
    );
}
