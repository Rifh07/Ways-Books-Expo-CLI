import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { API } from '../Config/Api';

function HomeScreen({ navigation }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        book();
    }, []);

    const book = async () => {
        try {
          const books = await API.get("/books");
          await setBooks(books.data.data.books);
          setLoading(false);
        } catch (error) {
          console.log(error);
        } 
    }
    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Loading ...</Text>
            ):( 
                books.map((book) => (
                    <ListItem style={styles.listItem} 
                        onPress={() => {
                            navigation.navigate("Detail", {id : book.id});
                        }} 
                        bottomDivider
                    >
                        <Image source={require('../Images/CoverBook/'+book.coverFile)} style={styles.coverBook} />
                        <ListItem.Content>
                            <ListItem.Title h6 numberOfLines={2} style={styles.title}>{book.title}</ListItem.Title>
                            <ListItem.Subtitle numberOfLines={1}>{book.author}</ListItem.Subtitle>
                            <ListItem.Title numberOfLines={4}>{book.about}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#E5E5E5",
        alignItems: "center",
        // justifyContent: "center",
        padding: 10,
    },
    title: {
        fontWeight: 500
    },
    listItem: {
        width: "95%",
    },
    coverBook: {
        width: 100, 
        height: 150,

    },
});

export default HomeScreen
