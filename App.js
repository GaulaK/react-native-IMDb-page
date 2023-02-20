import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <ScrollView style={styles.app}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require("./assets/logo-imdb.png")}
            style={styles.logo}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Interstellar</Text>
        <View style={styles.informations}>
          <Text style={styles.informationsText}>2014</Text>
          <Text style={styles.informationsText}>PG-13</Text>
          <Text style={styles.informationsText}>2h 49min</Text>
          <Text style={styles.informationsText}>Adventure, Drama, Sci-Fi</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.posterContainer}>
            <Image
              style={styles.poster}
              source={require("./assets/film.jpg")}
            />
          </View>
          <View style={styles.synopsis}>
            <Text style={styles.synopsisText}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity' survival.
            </Text>
            <TouchableOpacity style={styles.watchlistButton}>
              <AntDesign style={styles.watchlistButtonText} name="plus" />
              <Text style={styles.watchlistButtonText}>Add to watchlist</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rates}>
          <View style={styles.rate}>
            <FontAwesome name="star" size={24} color="#ffcd3c" />
            <Text style={styles.globalRate}>8.6/10</Text>
            <Text style={styles.globalVoters}>1.1M</Text>
          </View>
          <View style={styles.rate}>
            <FontAwesome name="star-o" size={24} color="white" />
            <Text style={styles.invidualRate}>Rate this</Text>
          </View>

          <View style={styles.rate}>
            <View style={styles.metascoreBox}>
              <Text style={styles.metascoreRate}>74</Text>
            </View>
            <Text style={styles.metascoreName}>Metascore</Text>
            <Text style={styles.metascoreVoters}>46 critic reviews</Text>
          </View>
        </View>
      </View>
      <View style={styles.contentSeparator}></View>
      <View style={styles.content}>
        <View style={styles.castingHeader}>
          <Text style={styles.castingTitle}>Top Billed Cast</Text>
          <Text style={styles.castingMore}>see all</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.actorCard}>
            <Image
              source={require("./assets/matthew.jpg")}
              style={styles.actorPicture}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode={"tail"}
              style={styles.actorName}
            >
              Matthew McConaughey
            </Text>
            <Text style={styles.actorRole}>Cooper</Text>
          </View>
          <View style={styles.actorCard}>
            <Image
              source={require("./assets/anne.jpg")}
              style={styles.actorPicture}
            />
            <Text
              numberOfLines={1}
              // ellipsizeMode={"tail"}
              style={styles.actorName}
            >
              Anne Hathaway
            </Text>
            <Text style={styles.actorRole}>Brand</Text>
          </View>
          <View style={styles.actorCard}>
            <Image
              source={require("./assets/jessica.jpg")}
              style={styles.actorPicture}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode={"tail"}
              style={styles.actorName}
            >
              Jessica Chastain
            </Text>
            <Text style={styles.actorRole}>Murph</Text>
          </View>
          <View style={styles.actorCard}>
            <Image
              source={require("./assets/mackenzie.jpg")}
              style={styles.actorPicture}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode={"tail"}
              style={styles.actorName}
            >
              Mackenzie Foy
            </Text>
            <Text style={styles.actorRole}>Murph</Text>
          </View>
        </ScrollView>
        <Text style={styles.movieStaffRole}>Director</Text>
        <Text style={styles.movieStaffName}>Christopher Nolan</Text>
        <Text style={styles.movieStaffRole}>Writers</Text>
        <Text style={styles.movieStaffName}>
          Jonathan Nolan (written by) and Christopher Nolan (written by)
        </Text>
      </View>
    </ScrollView>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  app: {
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    backgroundColor: "#1A1B1D",
  },
  header: {
    backgroundColor: "#454545",
    height: 60,
  },
  logoContainer: {
    height: "100%",
    width: 70,
    marginLeft: 10,
    justifyContent: "center",
  },
  logo: {
    //   marginLeft: 50,
    maxWidth: "100%",
    height: 50,
    resizeMode: "contain",
    //   borderWidth: 1,
    //   borderColor: "red",
  },
  content: {
    backgroundColor: "#303031",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  contentSeparator: {
    height: 20,
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "300",
  },
  informations: {
    flexDirection: "row",
  },
  informationsText: {
    color: "white",
    fontWeight: "300",
    fontSize: 13,
    marginRight: 10,
    gap: 10,
  },
  details: {
    marginVertical: 25,
    flexDirection: "row",
  },
  posterContainer: {
    flex: 3,
    alignItems: "center",
  },
  poster: {
    height: 150,
    resizeMode: "contain",
  },
  synopsis: {
    paddingLeft: 5,
    flex: 6,
  },
  synopsisText: {
    color: "white",
  },
  watchlistButton: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1569C7",
    height: 35,
    borderRadius: 5,
  },
  watchlistButtonText: {
    color: "white",
    textTransform: "uppercase",
    marginHorizontal: 3,
  },
  rates: {
    flexDirection: "row",
    justifyContent: "center",
    height: 75,
  },
  rate: {
    width: "25%",
    height: "100%",

    marginHorizontal: 10,
    alignItems: "center",
  },

  globalRate: {
    marginTop: 1,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  globalVoters: {
    fontSize: 12,
    color: "#454545",
  },
  invidualRate: {
    color: "white",
    textTransform: "uppercase",
    margin: 1,
    fontSize: 14,
    fontWeight: "bold",
  },
  metascoreBox: {
    backgroundColor: "#9EFD38",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  metascoreRate: { color: "white", fontWeight: "bold" },
  metascoreName: { color: "white", margin: 1 },
  metascoreVoters: { fontSize: 12, color: "#454545" },

  castingHeader: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  castingTitle: {
    fontSize: 24,
    fontWeight: "400",
    color: "white",
  },
  castingMore: {
    color: "#1569C7",
    textTransform: "uppercase",
  },
  // Actors Card
  actorCard: {
    alignItems: "flex-start",
    backgroundColor: "#454545",
    width: (screenWidth - 10) / 2.5,
    paddingBottom: 15,
    marginRight: 10,
  },
  actorPicture: {
    width: (screenWidth - 10) / 2.5,
    height: 226.5,
    resizeMode: "cover",
  },
  actorName: {
    color: "white",
    paddingHorizontal: 10,
  },

  actorRole: {
    color: "white",
    paddingHorizontal: 10,
    fontWeight: "300",
  },

  //

  movieStaffRole: {
    color: "white",
    fontSize: 15,
    marginTop: 15,
  },
  movieStaffName: {
    color: "white",
    fontWeight: "300",
  },
});
