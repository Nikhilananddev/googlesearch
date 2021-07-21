import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Searchbar} from 'react-native-paper';
import axios from 'axios';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {search: '', searchResult: []};
  }

  updateSearch = search => {
    this.setState({search});
  };

  serach = async () => {
    const {search} = this.state;
    // var search = 'elonmusk';
    const options = {
      method: 'GET',
      url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${search}&num=10`,
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '30a79d49e4msh60149164f98a8a5p16accdjsn3726a274f766',
        useQueryString: true,
      },
    };

    await axios
      .request(options)
      .then(response => {
        this.setState({searchResult: response.data.results});
        // console.warn(this.state.searchResult);
        if (response.status == 200) {
          this.props.navigation.navigate('Result', {
            data: this.state.searchResult,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    const {search} = this.state;

    return (
      <View style={styles.contaner}>
        {/* <Text> textInComponent </Text> */}
        <Searchbar
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={search}
        />

        <TouchableOpacity style={styles.button} onPress={this.serach}>
          <Text style={styles.Text}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    marginTop: 100,
    width: 180,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#rgb(251,188,5)',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: '800',
    color: '#FFF',
  },
});
