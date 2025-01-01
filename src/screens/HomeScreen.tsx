import React from 'react';
import type {PropsWithChildren} from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';


const categories = [
  { id: '1', title: 'Online Consultations', time: '10 mins', icon: 'https://via.placeholder.com/50' },
  { id: '2', title: 'Full Body Checkup', time: '60 mins', icon: 'https://via.placeholder.com/50' },
  { id: '3', title: 'Order Medicines', discount: 'Upto 20% Off', icon: 'https://via.placeholder.com/50' },
  { id: '4', title: 'Skincare', discount: '30% OFF*', icon: 'https://via.placeholder.com/50' },
  { id: '5', title: 'X-rays, MRIs & Scans', time: '60 mins', icon: 'https://via.placeholder.com/50' },
  { id: '6', title: 'Lab Tests', time: '60 mins', icon: 'https://via.placeholder.com/50' },
];

const healthChecks = [
  { id: '1', title: 'Ayushman Basic Health Check', tests: '76+ Tests', price: '₹2999', discount: '60% OFF', finalPrice: '₹1200' },
  { id: '2', title: 'Ayushman Vital Health Check', tests: '83+ Tests', price: '₹4599', discount: '60% OFF', finalPrice: '₹1839' },
];

type RootStackParamList = {
    Home: undefined;
    Doctors: undefined;
    Symptoms: undefined;
  };
  
  type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
  
  type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
  };
  
  const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Location and Header */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.locationText}>Your Location</Text>
          <Text style={styles.locationName}>Ludhiana...</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://via.placeholder.com/30' }}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://via.placeholder.com/30' }}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard}>
            <Image source={{ uri: item.icon }} style={styles.categoryIcon} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
            {item.time && <Text style={styles.categoryTime}>{item.time}</Text>}
            {item.discount && (
              <Text style={styles.categoryDiscount}>{item.discount}</Text>
            )}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={3}
        columnWrapperStyle={styles.categoryRow}
        contentContainerStyle={styles.categoryList}
      />

      {/* Cosmetologist Section */}
      <View style={styles.cosmetologistContainer}>
        <Text style={styles.cosmetologistText}>Skin Concerns?</Text>
        <Text style={styles.cosmetologistSubText}>
          Avail a <Text style={styles.highlight}>FREE Cosmetologist Consult</Text> today!
        </Text>
      </View>

      {/* Frequently Booked Health Checks */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Frequently Booked Health Checks</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Symptoms')}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={healthChecks}
        renderItem={({ item }) => (
          <View style={styles.healthCheckCard}>
            <Text style={styles.healthCheckTitle}>{item.tests}</Text>
            <Text style={styles.healthCheckSubtitle}>{item.title}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.originalPrice}>{item.price}</Text>
              <Text style={styles.discountText}>{item.discount}</Text>
            </View>
            <Text style={styles.finalPrice}>{item.finalPrice}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>Lab Tests</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.consultButton}
            onPress={() => navigation.navigate('Doctors')}>
            <Text style={styles.navText}>Consult now</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>Medicines</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>My Orders</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    color: '#aaa',
  },
  locationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  categoryCard: {
    width: '30%',
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  categoryIcon: {
    width: 50,
    height: 50,
  },
  categoryTitle: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  categoryTime: {
    fontSize: 10,
    color: '#aaa',
  },
  categoryDiscount: {
    fontSize: 10,
    color: '#f00',
  },
  categoryList: {
    paddingHorizontal: 10,
  },
  categoryRow: {
    justifyContent: 'space-between',
  },
  cosmetologistContainer: {
    margin: 15,
    padding: 20,
    backgroundColor: '#eef7ff',
    borderRadius: 10,
  },
  cosmetologistText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cosmetologistSubText: {
    marginTop: 5,
    fontSize: 14,
  },
  highlight: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 12,
    color: '#007bff',
  },
  healthCheckCard: {
    width: 150,
    backgroundColor: '#eef7ff',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  healthCheckTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  healthCheckSubtitle: {
    fontSize: 10,
    color: '#aaa',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  originalPrice: {
    fontSize: 12,
    color: '#aaa',
    textDecorationLine: 'line-through',
  },
  discountText: {
    fontSize: 12,
    color: '#f00',
    marginLeft: 5,
  },
  finalPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  bottomNav: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    elevation: 5,
  },
  navText: {
    fontSize: 12,
    color: '#000',
  },
  consultButton: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

export default HomeScreen;