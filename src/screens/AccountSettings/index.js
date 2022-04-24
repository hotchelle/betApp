import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native'
import * as React from 'react';
import styles from './styles'
import { COLORFONTS } from '../../../Constants/theme'

function Test(){
  const [timeLeft, setTimeLeft] = useState(null);

useEffect(() => {
   if(timeLeft===0){
      console.log("TIME LEFT IS 0");
      setTimeLeft(null)
   }

   // exit early when we reach 0
   if (!timeLeft) return;

   // save intervalId to clear the interval when the
   // component re-renders
   const intervalId = setInterval(() => {

     setTimeLeft(timeLeft - 1);
   }, 1000);

   // clear interval on re-render to avoid memory leaks
   return () => clearInterval(intervalId);
   // add timeLeft as a dependency to re-rerun the effect
   // when we update it
 }, [timeLeft]);

return (
 <React.Fragment>
   {timeLeft}
   <Button onClick={()=>setTimeLeft(5)} className={classes.button}>
           TEST
   </Button>
 </React.Fragment>
)
}




const accountSettings = ({ navigation }) => {
  return (
    <View style = {styles.container}>


<TouchableOpacity onPress={() => navigation.navigate('Bid')}>
              <View style={styles.firstButton}>
                <Text style={styles.buttonText2}>Time left</Text>
              </View>
    </TouchableOpacity>
    <View style = {{
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 90,
      
    }}>

      
      
    <TouchableHighlight
      style = {{
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 5,
      width: Dimensions.get('window').width * 0.3,
      height: Dimensions.get('window').width * 0.3,
      backgroundColor:'#00B9D2',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 40,
    }}
    underlayColor = '#ccc'
    onPress = { () => alert('Bet Placed!') }
  >
    <Text style={{

    }}> A </Text>
  </TouchableHighlight>

  <TouchableHighlight
      style = {{
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 5,
      width: Dimensions.get('window').width * 0.3,
      height: Dimensions.get('window').width * 0.3,
      backgroundColor:'#D4993F',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 40,
      
    }}
    underlayColor = '#ccc'
    onPress = { () => alert('Bet Placed!') }
  >
    <Text style={{

    }}> B </Text>
  </TouchableHighlight>


  <TouchableHighlight
      style = {{
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 5,
      width: Dimensions.get('window').width * 0.3,
      height: Dimensions.get('window').width * 0.3,
      backgroundColor:'#AB493B',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 40,
      
    }}
    underlayColor = '#ccc'
    onPress = { () => alert('Bet Placed!') }
  >
    <Text style={{

    }}> C </Text>
  </TouchableHighlight>


  <TouchableHighlight
      style = {{
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 5,
      width: Dimensions.get('window').width * 0.3,
      height: Dimensions.get('window').width * 0.3,
      backgroundColor:'#9F6AD3',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 40,
      
    }}
    underlayColor = '#ccc'
    onPress = { () => alert('Bet Placed!') }
  >
    <Text style={{

    }}> D </Text>
  </TouchableHighlight>

      
    </View>


    </View>
  )
}



export default accountSettings;