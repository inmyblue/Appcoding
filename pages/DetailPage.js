import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'

export default function DetailPage(){

    const tip = {
        "idx":9,
        "category":"재테크",
        "title":"렌탈 서비스 금액 비교해보기",
        "image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
        "desc":"요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
        "date":"2020.09.09"
    }

    return(
        <ScrollView style={styles.container}>
            <Image
                style={styles.main_img}
                source = {{uri : tip.image}}
            />

            <View style={styles.txt_container}>
                <Text style={styles.title_txt}>
                    {tip.title}
                </Text>
                
                <Text style={styles.desc_txt}>
                    {tip.desc}
                </Text>
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btn_txt}>
                    팁 찜하기
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor : '#0A222E'
    },
    main_img:{
        height : "100%",
        margin : 10,
        marginTop : 40,
        borderRadius : 20
    },
    txt_container:{
        padding : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title_txt:{
        fontSize : 25,
        color : '#fff',
        marginTop : 20
    },
    desc_txt:{
        color : '#fff',
        fontSize : 15,
        marginTop : 10,
    },
    btn:{
        marginTop : 20,
        width : 120,
        height : 50,
        borderColor : '#6E1C4A',
        alignSelf : 'center',
        borderWidth : 3,
        borderRadius : 10,
        padding : 10
    },
    btn_txt:{
        color : '#fff',
        textAlign : 'center'
    } 
})

