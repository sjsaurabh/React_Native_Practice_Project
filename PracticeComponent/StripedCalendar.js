import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function  StripedCalendar () {
    return (
      <View style={styles.container}>
        <Calendar
          style={styles.calendar}
          theme={{
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: '#00adf5',
            monthTextColor: '#2d4150',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          markedDates={{
            '2023-05-01': { selected: true, marked: true },
            '2023-05-02': { selected: true, marked: true },
            '2023-05-03': { selected: true, marked: true },
            '2023-05-04': { selected: true, marked: true },
            '2023-05-05': { selected: true, marked: true },
            '2023-05-06': { selected: true, marked: true },
            '2023-05-07': { selected: true, marked: true },
          }}
          markingType={'period'}
          hideExtraDays={true}
        />
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
    },
  });
    