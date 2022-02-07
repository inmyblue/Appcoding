import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Platform, Alert} from 'react-native';
import LikeCard from '../components/LikeCard';
import Loading from '../components/Loading';
import {firebase_db} from "../firebaseConfig";
import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';

export default function LikePage({navigation, route}) {
    const [tip, setTip] = useState([])

    const [ready,setReady] = useState(true)

    useEffect(()=>{
        navigation.setOptions({
            title : '꿀팁 찜'
        })

        setTimeout(async ()=>{
            let user_id;
            if(isIOS){
                let iosId = await Application.getIosIdForVendorAsync();
                user_id = iosId
            }else{
                user_id = await Application.androidId
            }

            firebase_db.ref('/like/'+user_id+'/').once('value').then((likedb) => {
                let tip = likedb.val();
                tip = Object.values(tip);
                
                if(tip.length){
                    setTip(tip);
                    setReady(false);
                    
                } else{
                    Alert.alert("저장된 꿀팁이 없습니다");
                }
            })
        },500);
    },[])

    return ready ? <Loading/> :  (

        <ScrollView style={styles.container}>
            <View style={styles.cardContainer}>
            {
                tip.map((content,i)=>{
                    return (<LikeCard content={content} key={i} navigation={navigation}/>)
            })
            }
            </View> 
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
      },
    cardContainer:{
        marginTop:10,
        marginLeft:10
    }
})