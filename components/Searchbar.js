import styles from "../config/styles";
import React, {useState} from "react";
import {TextInput, TouchableOpacity, View, Text} from "react-native";
import {MagnifyingGlassIcon, MapPinIcon} from "react-native-heroicons/outline";

const Searchbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [locations, setlocations] = useState([1, 2, 3]);

    return (
        <View style={styles.searchContainer}>
            <View
                style={[styles.searchInputContainer, {backgroundColor: showSearch ? 'rgba(255, 255, 255, 0.3)' : 'transparent'}]}>
                {showSearch ? (
                    <TextInput
                        placeholder="Search city"
                        placeholderTextColor={'lightgray'}
                        style={styles.searchInput}
                    />
                ) : null
                }
                <TouchableOpacity
                    onPress={() => setShowSearch(!showSearch)}
                    style={styles.searchButton}
                >
                    <MagnifyingGlassIcon style={styles.searchIcon} size={20} color="white"/>
                </TouchableOpacity>
            </View>
            {/*Render the list if showList is true */}
            {locations.length > 0 && showSearch ? (
                <View style={styles.resultContainer}>
                    {
                        locations.map((loc, index) => {
                            let showBorder = index !== locations.length - 1;
                            let borderBottom = showBorder ? 1 : 0;
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.resultItem, {borderBottomWidth: index !== locations.length - 1 ? 1 : 0}]}
                                >
                                    <MapPinIcon size={20} color="gray"/>
                                    <Text style={{fontSize: 24, marginLeft: 8}}>London, United Kingdom</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            ) : null
            }
        </View>
    );
};
export default Searchbar;