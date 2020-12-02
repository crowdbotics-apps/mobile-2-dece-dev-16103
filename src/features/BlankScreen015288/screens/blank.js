import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_3: "",
    TextInput_4: "",
    Switch_5: true,
    CheckBox_6: true,
    CheckBox_8: true
  }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_5}
        value={this.state.Switch_5}
        onValueChange={nextChecked => this.setState({ Switch_5: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.CheckBox_6}
        checked={this.state.CheckBox_6}
        onPress={nextChecked => this.setState({ CheckBox_6: nextChecked })}
      />
      <Icon name="star" />
      <CheckBox
        title="Checkbox"
        containerStyle={styles.CheckBox_8}
        checked={this.state.CheckBox_8}
        onPress={nextChecked => this.setState({ CheckBox_8: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: {},
  TextInput_3: {},
  TextInput_4: {},
  Switch_5: { alignSelf: "flex-start" },
  CheckBox_6: {},
  Icon_7: {},
  CheckBox_8: {},
  View_1: {},
  Text_2: {},
  TextInput_3: {},
  TextInput_4: {},
  Switch_5: { alignSelf: "flex-start" },
  CheckBox_6: { width: 100 },
  Icon_7: {},
  CheckBox_8: { width: 100 },
  View_1: {},
  Text_2: {},
  TextInput_3: {},
  TextInput_4: {},
  Switch_5: { alignSelf: "flex-start" },
  CheckBox_6: { width: 100 },
  Icon_7: {},
  CheckBox_8: { width: 100, alignSelf: "flex-end" }
})
