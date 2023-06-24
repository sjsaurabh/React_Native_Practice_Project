import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default StripedBarCalendar = () => {
    return (
      <View style={styles.container}>
        <View style={styles.calendar}>
          <View style={styles.monthContainer}>
            <Text style={styles.monthText}>May 2023</Text>
          </View>
          <View style={styles.dayContainer}>
            <View style={[styles.day, styles.selectedDay]} />
            <View style={styles.day} />
            <View style={[styles.day, styles.selectedDay]} />
            <View style={styles.day} />
            <View style={[styles.day, styles.selectedDay]} />
            <View style={styles.day} />
            <View style={[styles.day, styles.selectedDay]} />
            <View style={styles.day} />
            <View style={[styles.day, styles.selectedDay]} />
            <View style={styles.day} />
            <View style={[styles.day, styles.selectedDay]} />
            <View style={styles.day} />
            <View style={[styles.day, styles.selectedDay]} />
            <View style={styles.day} />
            <View style={[styles.day, styles.selectedDay]} />
            <View style={styles.day} />
            <View style={[styles.day, styles.selectedDay]} />
            <View style={styles.day} />
            <View style={[styles.day, styles.selectedDay]} />
            <View style={styles.day} />
            <View style={[styles.day, styles.selectedDay]} />
            <View style={styles.day} />
            <View style={[styles.day, styles.selectedDay]} />
            <View style={styles.day} />
            <View style={[styles.day, styles.selectedDay]} />
            <View style={styles.day} />
          </View>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    calendar: {
      borderWidth: 1,
      borderColor: '#d9e1e8',
      borderRadius: 10,
      backgroundColor: '#ffffff',
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    monthContainer: {
      paddingBottom: 8,
    },
    monthText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#2d4150',
    },
    dayContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    day: {
      width: 24,
      height: 24,
      backgroundColor: '#00adf5',
      borderRadius: 4,
      marginRight: 4,
    },
    selectedDay: {
      backgroundColor: '#ffffff',
      borderWidth: 2,
      borderColor: '#00adf5',
    },
  });
  