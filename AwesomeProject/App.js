import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button, 
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

function VkiHesapla({navigation}){
  const [Kilo,onChangeKilo] = useState(1);
  const [Boy,onChangeBoy] = useState(1);
  const [hesap,onChangeHesap] = useState();
  const onPress = () => {
    if(Boy*Kilo >  2){
  onChangeHesap(hesap => <View  style={styles.hesapFunction}>
    <Text  style={styles.calculateWrite}>
    Vücut Kitle İndeksiniz : {Kilo/(Boy*Boy)}
    </Text>
    </View>)
  onChangeKilo();
  onChangeBoy();
} else{
  onChangeHesap(hesap => <View  style={styles.hesapFunction}>
    <Text  style={styles.calculateWrite}>
    Eksik Tuşladınız , Lütfen Tekrar Deneyiniz
    </Text>
    </View>)
  onChangeKilo();
  onChangeBoy();
} 
}
  return(
    
    <SafeAreaView>
    <View style={styles.title}>
    <Text style={styles.textHesap}>hesap<Text style={styles.textLa}>la</Text></Text>
    </View>
    <View style={styles.fullBody}>
    <Text style={styles.screenName}>Vücut Kitle İndeksi Hesaplama</Text>
     <TextInput
      style={styles.Inputfirst}
      onChangeText={onChangeBoy}
        value={Boy} 
        placeholder="Orn: 1.78"
        keyboardType="numeric"
      />
      <Text style={styles.Comment}>Doğru hesaplama için Metre cinsinden giriniz</Text>

      <TextInput
      style={styles.Inputfirst}
      onChangeText={onChangeKilo}
        value={Kilo}
        placeholder="Orn: 85"
        keyboardType="numeric"
      />
       <Text style={styles.Comment}>Doğru hesaplama için Kg cinsinden giriniz</Text>
       <TouchableOpacity
       style={styles.Button}
  onPress={onPress}
  >
    <Text style={styles.ButtonText}>Hesapla</Text>
  </TouchableOpacity>
  {hesap}
      </View>
      
    </SafeAreaView>
    
  );
}

function YaşHesapla({navigation}){
  const [Dogumyili,onChangeDogumyili] = useState(1);
  const [yil,onChangeYil] = useState(1);
  const [hesap,onChangeHesap] = useState();
  const onPress = () => {
    if(yil-Dogumyili >  2){
  onChangeHesap(hesap => <View  style={styles.hesapFunction}>
    <Text  style={styles.calculateWrite}>
   Kişinin Yaşı : {yil-Dogumyili}
    </Text>
    </View>)
  onChangeDogumyili();
  onChangeYil();
} else{
  onChangeHesap(hesap => <View  style={styles.hesapFunction}>
    <Text  style={styles.calculateWrite}>
    Eksik Tuşladınız , Lütfen Tekrar Deneyiniz
    </Text>
    </View>)
  onChangeDogumyili();
  onChangeYil();
} 
}
  return(
    
    <SafeAreaView>
    <View style={styles.title}>
    <Text style={styles.textHesap}>hesap<Text style={styles.textLa}>la</Text></Text>
    </View>
    <View style={styles.fullBody}>
    <Text style={styles.screenName}>Yaş Hesaplama</Text>
     <TextInput
      style={styles.Inputfirst}
      onChangeText={onChangeYil}
        value={yil} 
        placeholder="Orn: 2023"
        keyboardType="numeric"
      />
      <Text style={styles.Comment}>Mevcut Yılı Giriniz</Text>

      <TextInput
      style={styles.Inputfirst}
      onChangeText={onChangeDogumyili}
        value={Dogumyili}
        placeholder="Orn: 1996"
        keyboardType="numeric"
      />
       <Text style={styles.Comment}>Kişinin Doğum Yılını Giriniz</Text>
       <TouchableOpacity
       style={styles.Button}
  onPress={onPress}
  >
    <Text style={styles.ButtonText}>Hesapla</Text>
  </TouchableOpacity>
  {hesap}
      </View>
      
    </SafeAreaView>
    
  );
}

 function SuHesapla({navigation}){ 
  const [Kilo,onChangeKilo] = useState(1);
  const [hesap,onChangeHesap] = useState();
  const onPress = () => {
    if(Kilo >  2){
  onChangeHesap(hesap => <View  style={styles.hesapFunction}>
    <Text  style={styles.calculateWrite}>
    Günlük içilmesi gereken su miktarı  : {Kilo*0.033} Litre 
    </Text>
    </View>)
  onChangeKilo();
 
} else{
  onChangeHesap(hesap => <View  style={styles.hesapFunction}>
    <Text  style={styles.calculateWrite}>
    Eksik Tuşladınız , Lütfen Tekrar Deneyiniz
    </Text>
    </View>)
  onChangeKilo();
} 
}
  return(

    
    <SafeAreaView>
    <View style={styles.title}>
    <Text style={styles.textHesap}>hesap<Text style={styles.textLa}>la</Text></Text>
    </View>
    <View style={styles.fullBody}>
    <Text style={styles.screenName}>Günlük içilmesi gereken su miktarı</Text>
     
      <TextInput
      style={styles.Inputfirst}
      onChangeText={onChangeKilo}
        value={Kilo}
        placeholder="Orn: 85"
        keyboardType="numeric"
      />
       <Text style={styles.Comment}>Doğru hesaplama için Kg cinsinden giriniz</Text>
       <TouchableOpacity
       style={styles.Button}
  onPress={onPress}
  >
    <Text style={styles.ButtonText}>Hesapla</Text>
  </TouchableOpacity>
  {hesap}
      </View>
    
    </SafeAreaView>
  );
}

const MyStack = ({navigation}) => {
 
  return (
    <ScrollView style={styles.fullBody}>
     <View style={styles.title}>
    <Text style={styles.textHesap}>hesap<Text style={styles.textLa}>la</Text></Text>
    </View>
    <View>
    <Text style={styles.screenName}>Anasayfa</Text>
    <TouchableOpacity style={styles.ButtonNavigate} onPress={()=> navigation.navigate(VkiHesapla)}>
<Text style={styles.homeNavigate}>Vücut Kitle İndeksi Hesaplama</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.ButtonNavigate} onPress={()=> navigation.navigate(SuHesapla)}>
<Text style={styles.homeNavigate} >Günlük İçilmesi Gereken Su Miktarı Hesaplama</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.ButtonNavigate} onPress={()=> navigation.navigate(YaşHesapla)}>
<Text style={styles.homeNavigate} >Yaş Hesaplama</Text>
    </TouchableOpacity>
    </View>
  </ScrollView>
  );
};


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName={'MyStack'}
    >
  
  <Stack.Screen name="MyStack" component={MyStack} />
      <Stack.Screen name="VkiHesapla" component={VkiHesapla} />
      <Stack.Screen name="SuHesapla" component={SuHesapla} />
      <Stack.Screen name="YaşHesapla" component={YaşHesapla} />
    </Stack.Navigator>
  </NavigationContainer> 
  );
}




const styles = StyleSheet.create({
  Inputfirst: {
    marginTop: 20,
    width: '80%',
    backgroundColor: 'grey',
    marginLeft:'10%',
    borderColor:'black',
    borderWidth:2,
  },
  textHesap:{
    color:'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft:140,
  },
  textLa:{
    marginLeft:140,
    color:'orange',
    fontWeight: 'bold',
    fontSize: 30,
  },
  title:{
    height:50,
   backgroundColor:'black'
  },
  fullBody:{
    backgroundColor:'brown',
    height:'100%',
  },
  Comment:{
    color:'#dcdcdc',
    marginTop:5,
    marginLeft:'10%'
  },
  Button:{
    marginTop:25,
    marginLeft:25,
    width:'20%',
    borderWidth:1,
 backgroundColor:'black',
 borderRadius:25
  },
  ButtonText:{
    color:'white',
    textAlign:'center',
    fontSize:15,
  },
  hesapFunction:{
    marginLeft:'15%',
    borderWidth:2,
    width:'70%',
    marginTop:30,
    backgroundColor:'white',
borderRadius:100,
    height:70
  },
  calculateWrite:{
    marginTop:20,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:15,
    justifyContent:'center',
  },
  screenName:{
    textAlign:'center',
    fontWeight:'bold',
    margin:15,
    fontSize:25
  },
  ButtonNavigate:{
    marginLeft:'30%',
    width:'40%',
    marginTop:'5%',
    borderWidth:2,
    alignItems:'center',
    backgroundColor:'grey',
    padding:2
  },
  homeNavigate:{
    color:'white'
  }
}); 
export default App;