import styles from "../config/styles";
import {TextInput, TouchableOpacity, View} from "react-native";
import {MagnifyingGlassIcon} from "react-native-heroicons/outline";
import React from "react";

const Searchbar = () => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
                <TextInput
                    placeholder="Search city"
                    placeholderTextColor={'lightgray'}
                    style={styles.searchInput}
                />
                <TouchableOpacity
                    onPress={() => console.log('searching')}
                    style={styles.searchButton}
                >
                    <MagnifyingGlassIcon style={styles.searchIcon} size={20} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Searchbar;