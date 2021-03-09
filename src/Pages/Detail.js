import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { API } from '../Config/Api';

function Detail(props) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const id = props.route.params.id;

    useEffect(() => {
        book();
    }, []);

    const book = async () => {
        try {
          const books = await API.get(`/books/${id}`);
          await setBooks(books.data.data.book);
          setLoading(false);
        } catch (error) {
          console.log(error);
        } 
    }
    return (
        <View style={styles.container}>
            {loading? (
                <Text>Loading ...</Text>
            ):(
                <ListItem style={styles.listItem}>
                    <ListItem.Content>
                        <Image source={require('../Images/CoverBook/'+books.coverFile)} style={styles.coverBook} />
                        <ListItem.Title h4 style={styles.title}>{books.title}</ListItem.Title>
                        <ListItem.Subtitle style={styles.author}>{books.author}</ListItem.Subtitle>
                        <ListItem.Title h6 style={styles.title}>Publication Date</ListItem.Title>
                        <ListItem.Subtitle style={styles.subTitle}>{books.publicationDate}</ListItem.Subtitle>
                        <ListItem.Title h6 style={styles.title}>ISBN</ListItem.Title>
                        <ListItem.Subtitle style={styles.subTitle}>{books.isbn}</ListItem.Subtitle>
                        <ListItem.Title h6 style={styles.title}>Price</ListItem.Title>
                        <ListItem.Subtitle style={styles.price}>Rp. {books.price},-</ListItem.Subtitle>
                        <ListItem.Title h6 style={styles.title}>About</ListItem.Title>
                        <ListItem.Title>"{books.about}"</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
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
        fontWeight: 700
    },
    author: {
        marginBottom: 10,
        fontStyle: "italic"
    },
    subTitle: {
        marginBottom: 10
    },
    price: {
        marginBottom: 10,
        color: "green",
        fontWeight: 500
    },
    listItem: {
        width: "95%",
    },
    coverBook: {
        width: 200, 
        height: 270,
        alignItems: "center",
        marginBottom: 10,
    },
});

export default Detail
