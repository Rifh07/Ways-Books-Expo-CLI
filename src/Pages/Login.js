import React from 'react';
import { StyleSheet, Image, TextInput, Text, View, TouchableOpacity } from 'react-native';
import Logo from '../Images/logo.png';

function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <View style={styles.inputView}>
                <TextInput  
                    style={styles.inputText}
                    placeholder="Email" 
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput  
                    style={styles.inputText}
                    placeholder="Password" 
                    placeholderTextColor="#003f5c"
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("HomeScreen")}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <Text>
                Don't have an account? Klik 
                <TouchableOpacity 
                    style={styles.link}
                    onPress={() => navigation.navigate("Register")}> Here</TouchableOpacity>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#E5E5E5",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    logo: {
        marginTop: 10,
        width: 126, 
        height: 80,

    },
    inputView:{
        marginTop: 10,
        width:"80%",
        backgroundColor:"white",
        borderRadius:25,
        height:50,
        justifyContent:"center",
        marginBottom:20,
        padding:20
    },
    inputText:{
        height:30,
        color:"black"
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#D60000",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText:{
        color: "white"
    },
    link: {
        color: "blue",
        fontWeight: 600
    }
});

export default Login
