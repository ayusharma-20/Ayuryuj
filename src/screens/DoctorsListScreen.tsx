import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

// Step 1: Define the Doctor Type
type Doctor = {
  name: string;
  qualification: string;
  specialty: string;
  experience: string;
  languages: string[];
  fee: number;
  image: string;
};

// Sample data for doctors
const doctors: Doctor[] = [
  {
    name: 'Dr. Smith',
    qualification: 'MBBS, MD',
    specialty: 'Cardiologist',
    experience: '15 years',
    languages: ['English', 'Hindi'],
    fee: 500,
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Dr. Mehta',
    qualification: 'BDS',
    specialty: 'Dentist',
    experience: '10 years',
    languages: ['English', 'Gujarati'],
    fee: 300,
    image: 'https://via.placeholder.com/150',
  },
  // Add more doctor objects as needed
];

const DoctorListScreen = () => {
  // Step 2: Ensure 'item' is typed properly
  const renderDoctor = ({ item }: { item: Doctor }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.qualification}>{item.qualification}</Text>
        <Text style={styles.specialty}>{item.specialty}</Text>
        <Text style={styles.experience}>{item.experience}</Text>
        <Text style={styles.languages}>
          Languages: {item.languages.join(', ')}
        </Text>
        <Text style={styles.fee}>₹{item.fee}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.knowMoreButton}>
            <Text style={styles.buttonText}>Know more</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.consultButton}>
            <Text style={styles.buttonText}>Consult now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={doctors}
      renderItem={renderDoctor}
      keyExtractor={(item) => item.name}
    />
  );
};

// Styles for the component
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  detailsContainer: {
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  qualification: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  specialty: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  experience: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  languages: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  fee: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  knowMoreButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  consultButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default DoctorListScreen;
