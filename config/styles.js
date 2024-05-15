import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: width,
        height: height,
        resizeMode: 'cover',
    },
    searchContainer: {
        position: 'absolute',
        top: 16,
        left: 0,
        zIndex: 1,
        width: width,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 4,
        paddingVertical: 4,
    },
    searchInput: {
        flex: 1,
        color: 'white',
        paddingLeft: 16,
    },
    searchButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginLeft: 8,
        padding: 12,
        borderRadius: 30,
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    forecastContainer: {
        position: 'absolute',
        top: 95,
        left: 0,
        zIndex: 0,
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    outerContainer: {
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
        position: 'absolute',
        bottom: 200,
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
    },
    resultContainer: {
        position: 'absolute',
        top: 60,
        left: 0,
        right: 0,
        backgroundColor: 'lightgray',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    resultItem: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderBottomColor: 'gray',
    }
});
