import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import react from 'react';


export default function App() {

  const [tab, setTab] = react.useState(0);
  const [bmivalue, setbmi] = react.useState('');
  const [height, setHeight] = react.useState('');
  const [weight, setWeight] = react.useState('');
  const [bmi, setBmi] = react.useState(null);

  const checknumber = (value, update) => {
    const numberonly = text.replace(/[^0-9]/g, '');
    update(numberonly);
  }
  return (
    <View style={styles.container}>
        <View style={styles.verticalStyle}>
          <Text style = {styles.headertxt}>BMI Calculator</Text>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <TouchableOpacity onPress={() => setTab(0)} style={[styles.tabButton, tab === 0 && styles.activeTab]}>
              <Text>Metric</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTab(1)} style={[styles.tabButton, tab === 1 && styles.activeTab]}>
              <Text>Imperial</Text>
            </TouchableOpacity>
          </View>
           {tab === 0 ? (
            <View>
              <Text >Height (cm)</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => {
                  if (value === '' || /^[0-9]*.[0-9]*/.test(value)) setHeight(value);   
                  }
                }
                value={height}
                keyboardType="numeric"
              />
              <Text>Weight (kg)</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => {
                  if (value === '' || /^[0-9]*.[0-9]*/.test(value)) setWeight(value);   
                  }
                }
                value={weight}
                keyboardType="numeric"
              />
            </View>
          ) : (
            <View>
              <Text>Height (inches)</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => {
                  if (value === '' || /^[0-9]*$/.test(value)) setHeight(value);   
                  }
                }
                value={height}
                keyboardType="numeric"
              />
              <Text>Weight (lbs)</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => {
                  if (value === '' || /^[0-9]*$/.test(value)) setWeight(value);   
                  }
                }
                value={weight}
                keyboardType="numeric"
              />
            </View>
          )}
        </View>


        <View style={styles.verticalStyle}>
          <Text style = {styles.headertxt}>BMI Categories</Text>
            <View style={styles.horizontoalStyle}>
              <Text style = {styles.boldText}>BMI Categories</Text>
              <Text>BMI Range</Text>
            </View>
            <View style={[styles.horizontoalStyle, {backgroundColor:bmi == 'Underweight' ? 'lightblue' : 'transparent'}]}>
              <Text style = {styles.boldText}>Underweight</Text>
              <Text>Less than 18.5</Text>
            </View>
            <View style={[styles.horizontoalStyle, {backgroundColor:bmi == 'Normalweight' ? 'lightblue' : 'transparent'}]}>
              <Text style = {styles.boldText}>Normal weight</Text>
              <Text>18.5 - 24.9</Text>
            </View>
            <View style={[styles.horizontoalStyle, {backgroundColor:bmi == 'Overweight' ? 'lightblue' : 'transparent'}]}>
              <Text style = {styles.boldText}>Overweight</Text>
              <Text>25 - 29.9</Text>
            </View>
            <View style={[styles.horizontoalStyle, {backgroundColor:bmi == 'Obesity' ? 'lightblue' : 'transparent'}]}>
              <Text style = {styles.boldText}>Obesity</Text>
              <Text>30 or greater</Text>
            </View>
        </View>

        <Button title = 'Calculate'
          disabled = {!height || !weight}
          onPress={() => {
              let bmiValue = 0.00
              if (tab == 0 ){
                bmiValue = weight / (height * height)
              }else{
                bmiValue = weight * 0.454 / (height * 2.54 * height * 2.54)

              }
            if (bmiValue < 18.5){
              setBmi('Underweight');
            }else if (bmiValue >= 18.5 && bmiValue <= 24.9){
              setBmi('Normalweight');
            } else if (bmiValue >= 25 && bmiValue <= 29.9){
              setBmi('Overweight');
            } else if (bmiValue >= 30){
              setBmi('Obesity');
            }
          }}>
        </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  }, 
  verticalStyle: {
    flexDirection: 'column',
    height: 300,
    borderColor: 'red',
    justifyContent: 'space-around',
    width: '100%',
  },
  horizontoalStyle: {
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: 'lightgray',
    justifyContent: 'space-around',
    padding: 10
},
    tabButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
},
    activeTab: {
    backgroundColor: 'lightblue',
},
    input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
    boldText: {
    fontWeight: 'bold'
  }, headertxt: { 
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'lightblue',
    padding : 10,
    marginBottom: 20}
}
);
