import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
} from 'react-native';
import { Agenda } from 'react-native-calendars';

import { Colors, Fonts } from '../constants';

class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  renderItem(item) {
    const labels = item.labels && item.labels.map(label => (
      <View
        key={`label-${label}`}
        style={{
          padding: 5,
          backgroundColor: label === 'Urgent' ? Colors.primary : Colors.secondary,
          borderRadius: 3,
        }}
      >
        <Text style={{ color: 'white' }}>{label}</Text>
      </View>
    ));

    return (
      <View style={styles.item}>
        <View>
          <Text style={{ color: '#48506B', fontFamily: Fonts.primaryRegular, marginBottom: 10 }}>{item.name}</Text>
          <Text style={{ color: '#9B9B9B', fontFamily: Fonts.primaryRegular }}>{item.time}</Text>
        </View>

        <View styleName="horizontal h-start">
          {labels}
        </View>
      </View>
    );
  }

  render() {
    return (
      <Agenda
        items={this.props.items}
        loadItemsForMonth={this.props.loadItems}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        theme={{
          dotColor: Colors.primaryLight,
          selectedDayBackgroundColor: Colors.primaryLight,
          agendaDayTextColor: Colors.primaryLight,
          agendaDayNumColor: Colors.primaryLight,
          agendaTodayColor: '#4F44B6',
          backgroundColor: '#F1F1F8',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteTwo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 10,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

export default CalendarScreen;
