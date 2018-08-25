import React from 'react';
import { Button, View, Text,Image,TouchableOpacity ,TouchableHighlight,Alert,StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json




class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 30}}>Welcome to Art Generation System</Text>
                <Button
                    title="STYLE IMAGES CATALOG"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }


   // http://183.82.23.116:5000/timestamp
    onPressButtonGET1(){
        fetch('http://192.168.0.113:5000/json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '1',
            })
        })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
        Alert.alert('Image is selected,styling can be initiated')
    }
    onPressButtonGET2(){
        fetch('http://192.168.0.113:5000/json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '2',
            })
        })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });

        Alert.alert('Image is selected,styling can be initiated')
    }
    onPressButtonGET3(){
        fetch('http://192.168.0.113:5000/json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '3',
            })
        })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });

        Alert.alert('Image is selected,styling can be initiated')
    }
    onPressButtonGET4(){
        fetch('http://192.168.0.113:5000/json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '4',
            })
        })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });

        Alert.alert('Image is selected,styling can be initiated')
    }


    onPressButtonGET5(){
        fetch('http://192.168.0.113:5000/process', {
            method: 'GET',


        })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });

        Alert.alert('Image Styling has started ,please wait for 5 minutes!')
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.titleText}>IMAGE CATALOG</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="STYLED IMAGE"
                    onPress={() => this.props.navigation.navigate('Image')}
                />
                <Button
                    title="CONTENT IMAGES"
                    onPress={() => this.props.navigation.navigate('contentImage')}
                />



                <View>
                    <TouchableOpacity onPress={this.onPressButtonGET1.bind(this)}>
                    <Image style={{width: 120, height: 120}}
                        source={require('/Users/z002r1y/react/ArtGeneration/styleImages/img.jpg')}
                    />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.onPressButtonGET2.bind(this)}>
                    <Image style={{width: 120, height: 120}}
                           source={require('/Users/z002r1y/react/ArtGeneration/styleImages/monet.jpg')}
                    />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={this.onPressButtonGET3.bind(this)}>

                    <Image style={{width: 120, height: 120}}
                           source={require('/Users/z002r1y/react/ArtGeneration/styleImages/rsz_sunset-in-venice.jpg')}
                    />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={this.onPressButtonGET4.bind(this)}>

                    <Image style={{width: 120, height: 120}}
                           source={require('/Users/z002r1y/react/ArtGeneration/styleImages/rsz_water-lilies-claude-monet.jpg')}
                    />
                    </TouchableOpacity>
                    <TouchableHighlight onPress={this.onPressButtonGET5.bind(this)}>
                        <Text style={styles.titleText} >TAP HERE TO PROCESS</Text>
                    </TouchableHighlight>


                </View>

            </View>

        );
    }
}
class ImageScreen extends React.Component {




    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 30}}>Here is your generated image </Text>
                <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Image
                    style= {{ height:300, width: 300 }}
                    source={{uri: 'http://192.168.0.113:5000/uploads/generated_image.jpg'+ '?' + new Date()}}
                />
            </View>




        );
    }


}
class contentImageScreen extends React.Component {


    onPressButtonPOST1(){
        fetch('http://192.168.0.113:5000/files/1.jpg', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '1',
            })
        })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });

        Alert.alert('Image is selected,now select the syle image')
    }

    onPressButtonPOST2(){
        fetch('http://192.168.0.113:5000/files/2.jpg', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '2',
            })
        })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });

        Alert.alert('Image is selected,now select the syle image')
    }

    onPressButtonPOST3(){
        fetch('http://192.168.0.113:5000/files/3.jpg', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '3',
            })
        })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });

        Alert.alert('Image is selected,now select the syle image')
    }





    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 30}}>content images </Text>
                <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <TouchableOpacity onPress={this.onPressButtonPOST1.bind(this)}>
                    <Image style={{width: 120, height: 120}}
                           source={require('/Users/z002r1y/react/ArtGeneration/contentImages/1.jpg')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onPressButtonPOST2.bind(this)}>
                    <Image style={{width: 120, height: 120}}
                           source={require('/Users/z002r1y/react/ArtGeneration/contentImages/2.jpg')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onPressButtonPOST3.bind(this)}>
                    <Image style={{width: 120, height: 120}}
                           source={require('/Users/z002r1y/react/ArtGeneration/contentImages/3.jpg')}
                    />
                </TouchableOpacity>


            </View>




        );
    }


}




const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
});

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
        Image: {
            screen: ImageScreen,
        },
        contentImage: {
            screen: contentImageScreen,
        }
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}