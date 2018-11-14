import React from 'react';
import { Button, View, Text,Image,TouchableOpacity ,TouchableHighlight,Alert,StyleSheet,ListView,ScrollView,PixelRatio,ActivityIndicator} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import CameraRoll from 'rn-camera-roll';
import { ImagePicker } from 'expo';



var FileUpload = require('NativeModules').FileUpload;

let PHOTOS_COUNT_BY_FETCH = 24;

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 30}}>Welcome to Art Generation System</Text>
                <Button
                    title="GET STARTED"
                    onPress={() => this.props.navigation.navigate('camera')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           loading: false
        }

    }

    showLoading() {
        this.setState({loading: true})
     }
 
     hideLoading() {
        this.setState({loading: false})
     }


    process(){
        this.setState({loading: true})
        fetch('http://192.168.0.113:5000/process', {
            method: 'GET',


        }) .then(data => this.setState({ data, Loading: false }))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
            
        Alert.alert('Image Styling has started ,please wait for 5 minutes!')
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
                <Text style={styles1.titleText}>IMAGE CATALOG</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
               
                <View>
                    <TouchableOpacity onPress={this.onPressButtonGET1.bind(this)}>
                    <Image style={{width: 120, height: 120}}
                        source={require('/Users/z002r1y/react/ArtGeneration-ui/styleImages/img.jpg')}
                    />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.onPressButtonGET2.bind(this)}>
                    <Image style={{width: 120, height: 120}}
                           source={require('/Users/z002r1y/react/ArtGeneration-ui/styleImages/monet.jpg')}
                    />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={this.onPressButtonGET3.bind(this)}>

                    <Image style={{width: 120, height: 120}}
                           source={require('/Users/z002r1y/react/ArtGeneration-ui/styleImages/rsz_sunset-in-venice.jpg')}
                    />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={this.onPressButtonGET4.bind(this)}>

                    <Image style={{width: 120, height: 120}}
                           source={require('/Users/z002r1y/react/ArtGeneration-ui/styleImages/rsz_water-lilies-claude-monet.jpg')}
                    />
                    </TouchableOpacity>

                    <Button
                    title="START"
                    onPress={ this.process.bind(this)} 
                
                   
                />
                {console.log(this.state.loading)}
                {this.state.loading? <ActivityIndicator  /> : null}

                



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
                           source={require('/Users/z002r1y/react/ArtGeneration-ui/contentImages/1.jpg')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onPressButtonPOST2.bind(this)}>
                    <Image style={{width: 120, height: 120}}
                           source={require('/Users/z002r1y/react/ArtGeneration-ui/contentImages/2.jpg')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onPressButtonPOST3.bind(this)}>
                    <Image style={{width: 120, height: 120}}
                           source={require('/Users/z002r1y/react/ArtGeneration-ui/contentImages/3.jpg')}
                    />
                </TouchableOpacity>


            </View>




        );
    }


}

class cameraScreen extends React.Component{

    state = {
        image: null
      };

    //   constructor(){
    //     super();
    //     this.state ={
    //       status:false,
    //       image:null
    //     }
    //   }
    
     alert(){
    Alert.alert('Image is selected,styling can be initiated')
    
     }
        // cstorePicture() { console.log(PicturePath); if (PicturePath) { // Create the form data object var data = new FormData(); data.append('picture', { uri: PicturePath, name: 'selfie.jpg', type: 'image/jpg' }); // Create the config object for the POST // You typically have an OAuth2 token that you use for authentication const config = { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data;', Authorization: 'Bearer ' + 'SECRET_OAUTH2_TOKEN_IF_AUTH' }, body: data }; fetch('https://postman-echo.com/post', config) .then(responseData => { // Log the response form the server // Here we get what we sent to Postman back console.log(responseData); }) .catch(err => { console.log(err); }); }}
        
        postPicture() {
            const apiUrl = 'http://192.168.0.113:5000/up';
            const uri = this.state.image;
            const uriParts = uri.split('.');
            const fileType = uriParts[uriParts.length - 1];
            const formData = new FormData();
                formData.append('image', {
                  uri,
                  name: `photo.${fileType}`,
                  type: `image/jpeg`,
                });
            const options = {
                  method: 'POST',
                  body: formData,
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                  },
                };
                Alert.alert('Image is selected,now select the syle image')
            return fetch(apiUrl, options);


           
              }


              
        

    
      render() {
        let { image } = this.state;


    
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="Pick an image from camera roll"
              onPress={this._pickImage}
              
            />
            <Button
                    title="STYLED IMAGE"
                    onPress={() => this.props.navigation.navigate('Image')}
                />
                <Button
                    title="BROWSE THE IMAGE CATALOG"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            {/* {image &&
              <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}


                <TouchableOpacity   >
                <Image source={{ uri: image }} style={{ width: 400, height: 300 }} />
                </TouchableOpacity>
              

                <Button
                    title="CONFIRM"
                    
                    onPress={ this.postPicture.bind(this)} 
                   
                />
                
                
          </View>

          

          
        );
      }
    
      _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };
         
    }
    
    
    





const styles1 = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
});

const styles = StyleSheet.create({
    
       container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#FFF8E1'
       },
    
       ImageContainer: {
         borderRadius: 10,
         width: 250,
         height: 250,
         borderColor: '#9B9B9B',
         borderWidth: 1 / PixelRatio.get(),
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#CDDC39',
         
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
        },
        camera: {
            screen: cameraScreen,
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