import React,{useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';

export default function AboutPage({navigation, route}){
    

    useEffect(()=>{
        navigation.setOptions({
            title : '소개페이지',
            headerStyle : {
                backgroundColor : '#262C74'
            },
            headerTintColor : '#fff',
        })
    },[])

    const insta = () => {
        Linking.openURL("https://www.instagram.com")
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.title}>
                HI! 스파르타코딩 앱개발반에 오신것을 환영합니다
            </Text>
        
            <View style={styles.contents_container}>
                <Image
                    style={styles.main_img}
                    source={{
                        uri : ('https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4')
                    }}
                />

                <Text style={styles.con_title}>
                    많은 내용을 간결하게 담아내려 노력했습니다!
                </Text>

                <Text style={styles.con_desc}>
                    꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다
                </Text>

                <TouchableOpacity style={styles.ins_btn} onPress={()=>insta()}>
                    여러분의 인스타계정
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#262C74',
        flex : 1,
        padding : 40
    },
    title:{
        marginTop : 60,
        color : "#fff",
        fontSize : 27,
        fontWeight : 800
    },
    contents_container:{
        marginTop : 30,
        backgroundColor : "#fff",
        width : "100%",
        height : "70%",
        borderRadius : 20,
        alignSelf : 'center',
        padding : 10
    },
    main_img:{
        marginTop : 80,
        width : "50%",
        height : "30%",
        resizeMode : "cover",
        alignSelf : 'center',
        borderRadius : 30
    },
    con_title:{
        fontSize : 20,
        fontWeight : 800,
        textAlign : 'center',
        padding : 10
    },
    con_desc:{
        fontSize : 15,
        textAlign : 'center',
        padding : 10
    },
    ins_btn:{
        marginTop : 20,
        backgroundColor : '#F3B13E',
        color : '#fff',
        alignSelf : 'center',
        width : '60%',
        height : '10%',
        borderRadius : 20,
        padding : 18
    }
});