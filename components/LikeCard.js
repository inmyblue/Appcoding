import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native'
import {firebase_db} from "../firebaseConfig";
import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function LikeCard({content,navigation}){


  const remove = async (idx) => {

    let user_id;
      if(isIOS){
          let iosId = await Application.getIosIdForVendorAsync();
          user_id = iosId
      }else{
          user_id = await Application.androidId
      }
  
    let ref = firebase_db.ref('/like/'+user_id+'/'+idx);

    ref.remove();
    navigation.navigate('LikePage')
  }

    return(
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:content.image}}/>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
                <View style={styles.card_btn}>
                  <TouchableOpacity style={styles.detail} onPress={()=>{navigation.navigate('DetailPage',{idx:content.idx})}}>
                    <Text style={styles.detail_text}>자세히 보기</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.remove} onPress={()=>remove(content.idx)}>
                    <Text style={styles.remove_text}>찜 해제</Text>
                  </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    
    card:{
      flex:1,
      flexDirection:"row",
      margin:10,
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10
    },
    cardImage: {
      flex:1,
      width:40,
      height:'100%',
      borderRadius:10,
    },
    cardText: {
      flex:2,
      flexDirection:"column",
      marginLeft:10,
    },
    cardTitle: {
      fontSize:20,
      fontWeight:"700"
    },
    cardDesc: {
      fontSize:15
    },
    cardDate: {
      fontSize:10,
      color:"#A6A6A6",
    },
    card_btn:{
      flex : 1,
      flexDirection : "row",
    },
    detail:{
      borderColor:'deeppink',
      borderRadius:7,
      borderWidth : 1,
      width : 100,
      height : 40,
      padding : 10
    },
    detail_text:{
      color : 'deeppink',
      textAlign : 'center'
    },
    remove:{
      borderColor:'deeppink',
      borderRadius:7,
      borderWidth : 1,
      width : 90,
      height : 40,
      marginLeft : 20,
      paddingTop : 10
    },
    remove_text:{
      color : 'deeppink',
      textAlign : 'center'
    }
});