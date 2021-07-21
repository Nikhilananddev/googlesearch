import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
const users = [
  {
    key: '5a31077f6dda99e234ad6727',
    name: 'Cathy Gilliam',
    company: 'EXOVENT',
    email: 'cathygilliam@exovent.com',
  },
  {
    key: '5a31077fcbee1cf54eed6c61',
    name: 'Norton Potts',
    company: 'COREPAN',
    email: 'nortonpotts@corepan.com',
  },
  {
    key: '5a31077fcb4a048c957901e4',
    name: 'Kelly Collins',
    company: 'SECURIA',
    email: 'kellycollins@securia.com',
  },
];

export class Result extends Component {
  render() {
    // const data = this.props.navigation.state.params.data;
    const {data} = this.props.route.params;

    // console.warn(data[0]);

    return (
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
              padding: 10,
            }}>
            <View>
              <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#168BED',
                    padding: 10,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>

              <Text style={{fontSize: 16, marginTop: 10, padding: 15}}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
    );
  }
}

export default Result;
const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
});
