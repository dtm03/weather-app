import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: 'cover',
    },
    searchContainer: {
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 30,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    searchInput: {
        flex: 1,
        color: 'white',
        paddingLeft: 8,
    },
    searchButton: {
        backgroundColor: 'transparent',
        marginLeft: 8,
        padding: 8,
        borderRadius: 30,
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    forecastContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        padding: 16,
        flexDirection: 'row',
    },
    detailIcon: {
        width: 20,
        height: 20,
    },
    detailText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 4,
    },
    detailsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    cityText: {
        color: 'lightgray',
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 16
    },
    countryText: {
        color: "lightgray",
        fontSize: 16,
        fontWeight: 'normal'
    },
    degreeText: {
        color: 'white',
        fontSize: 68,
        fontWeight: 'bold'
    },
    forecastItem: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 16,
        margin: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    sectionHeaders: {
        color: 'lightgray',
        fontSize: 16,
        marginLeft: 8
    }
});
