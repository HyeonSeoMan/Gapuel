import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ChatScreen from './screens/ChatScreen';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';




const MealsNavigator = createStackNavigator({
  Categories: ChatScreen,
  CategoryMeals: {
    screen: SettingsScreen
  },
  MealDetail: HomeScreen
});
 
export default createAppContainer(MealsNavigator);




// import GoalItem from './components/GoalItem';
// import GoalInput from './components/GoalInput';

// export default function App() {
//   const [courseGoals, setCourseGoals] = useState([]);
//   const [isAddMode, setIsAddMode] = useState(false);

//   const addGoalHandler = (goalTitle) => {
//     setCourseGoals((currentGoals) => [
//       ...currentGoals,
//       { id: Math.random().toString(), value: goalTitle }
//     ]);
//     setIsAddMode(false);
//   };

//   const removeGoallHandler = (goalId) => {
//     setCourseGoals((currentGoals) => {
//       return currentGoals.filter((goal) => goal.id !== goalId);
//     });
//   };

//   const cancelGoalAdditionHandler = () => {
//     setIsAddMode(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Wordbe's App</Text>
//       <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
//       <GoalInput
//         visible={isAddMode}
//         onAddGoal={addGoalHandler}
//         onCancel={cancelGoalAdditionHandler}
//       />
//       <FlatList
//         keyExtractor={(item, index) => item.id}
//         data={courseGoals}
//         renderItem={(itemData) => {
//           return (
//             <GoalItem
//               id={itemData.item.id}
//               onDelete={removeGoallHandler}
//               title={itemData.item.value}
//             />
//           );
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });