import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

// Step 1: Define the Symptom Type
type Symptom = {
    id: string;
    name: string;
    icon: string;
  };

const symptoms = [
  { id: '1', name: 'Fever', icon: 'https://via.placeholder.com/50' },
  { id: '2', name: 'Dark circles', icon: 'https://via.placeholder.com/50' },
  { id: '3', name: 'Acne', icon: 'https://via.placeholder.com/50' },
  { id: '4', name: 'Loose motion/Diarrhea', icon: 'https://via.placeholder.com/50' },
  { id: '5', name: 'Blocked Nose', icon: 'https://via.placeholder.com/50' },
  { id: '6', name: 'Heartburn', icon: 'https://via.placeholder.com/50' },
  { id: '7', name: 'Runny nose', icon: 'https://via.placeholder.com/50' },
  { id: '8', name: 'Cough', icon: 'https://via.placeholder.com/50' },
  { id: '9', name: 'Itching', icon: 'https://via.placeholder.com/50' },
  { id: '10', name: 'Hairfall', icon: 'https://via.placeholder.com/50' },
  { id: '11', name: 'Headache', icon: 'https://via.placeholder.com/50' },
  { id: '12', name: 'Abdominal pain', icon: 'https://via.placeholder.com/50' },
  { id: '13', name: 'Vomiting', icon: 'https://via.placeholder.com/50' },
  { id: '14', name: 'Spots on skin', icon: 'https://via.placeholder.com/50' },
  { id: '15', name: 'Constipation', icon: 'https://via.placeholder.com/50' },
  { id: '16', name: 'Obesity', icon: 'https://via.placeholder.com/50' },
];

const SymptomsScreen = () => {
  const renderSymptom = ({ item }: { item: Symptom }) => (
    <TouchableOpacity style={styles.symptomCard}>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <Text style={styles.symptomText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>What is your concern?</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for symptoms, e.g. fever"
        />
      </View>
      <Text style={styles.sectionTitle}>Most Selected Issues</Text>
      <FlatList
        data={symptoms}
        renderItem={renderSymptom}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.symptomsList}
      />
      <TouchableOpacity style={styles.chooseDoctorButton}>
        <Text style={styles.buttonText}>Choose Doctor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  symptomsList: {
    paddingBottom: 80,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  symptomCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  symptomText: {
    fontSize: 14,
    textAlign: 'center',
  },
  chooseDoctorButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SymptomsScreen;
