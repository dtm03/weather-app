import styles from "../config/styles";
import React, {useCallback, useState} from "react";
import {TextInput, TouchableOpacity, View, Text} from "react-native";
import {MagnifyingGlassIcon, MapPinIcon} from "react-native-heroicons/outline";
import {debounce} from "lodash";
import {fetchLocations, fetchWeatherForecast} from "../api/api";
import {storeData} from "./asyncStorage";


const Searchbar = ({setWeather, setLoading}) => {
    const [showSearch, setShowSearch] = useState(false);
    const [locations, setLocations] = useState([]);

    const handleLocation = (loc) => {
        toggleSearch();
        setLoading(true);
        fetchWeatherForecast({cityName: loc.name, days: 7}).then(data => {
            setWeather(data);
            setLoading(false);
            storeData('city', loc.name);
        })
    }

    const toggleSearch = () => {
        setShowSearch(!showSearch);
        setLocations([]);
    }

    const handleSearch = (value) => {
        if (value.length > 2) {
            fetchLocations({cityName: value}).then(data => {
                setLocations(data);
            })
        }
    }
    const handleTextDebounce = useCallback(debounce(handleSearch), []); // Number in Milliseconds after handleSearch for less API-Calls

    return (
        <View style={styles.searchContainer}>
            <View
                style={[styles.searchInputContainer, {backgroundColor: showSearch ? 'rgba(255, 255, 255, 0.3)' : 'transparent'}]}>
                {showSearch ? (
                    <TextInput
                        onChangeText={handleTextDebounce}
                        placeholder="Search city"
                        placeholderTextColor={'lightgray'}
                        style={styles.searchInput}
                    />
                ) : null
                }
                <TouchableOpacity
                    onPress={() => toggleSearch()}
                    style={styles.searchButton}
                >
                    <MagnifyingGlassIcon style={styles.searchIcon} size={20} color="white"/>
                </TouchableOpacity>
            </View>
            {/*Render the list if showList is true */}
            {locations.length > 0 && showSearch ? (
                <View style={styles.resultContainer}>
                    {locations.map((loc, index) => (
                        <View key={index}>
                            <TouchableOpacity
                                onPress={() => handleLocation(loc)}
                                style={styles.resultItem}
                            >
                                <MapPinIcon size={20} color="gray"/>
                                <Text style={{fontSize: 24, marginLeft: 8}}>
                                    {loc?.name}, {loc?.country}
                                </Text>
                            </TouchableOpacity>
                            {index !== locations.length - 1 && <View style={styles.borderLine}/>}
                        </View>
                    ))}
                </View>
            ) : null}
        </View>
    );
};
export default Searchbar;