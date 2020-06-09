import React from "react"
import { View } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input
} from "react-native-ui-kitten"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = { Input_7: "" }

  render = () => (
    <View
      style={{
        overflow: "visible",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto"
      }}
    >
      <View
        style={{
          overflow: "visible",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <Text style={{ overflow: "visible", borderStyle: "solid" }}>Text</Text>
        <Input
          placeholder="Text input placeholder"
          editable={true}
          style={{ overflow: "visible", borderStyle: "solid" }}
          value={this.state.Input_7}
          onChangeText={nextValue => this.setState({ Input_7: nextValue })}
        />
        <Button
          style={{
            overflow: "visible",
            borderStyle: "solid",
            backgroundColor: "#3366FF"
          }}
          onPress={() => alert("Pressed!")}
        >
          Button
        </Button>
        <View
          style={{
            overflow: "visible",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <View
            style={{
              overflow: "visible",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderStyle: "solid",
              backgroundSize: "auto"
            }}
          >
            <View
              style={{
                overflow: "visible",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderStyle: "solid",
                backgroundSize: "auto"
              }}
            >
              <Text style={{ overflow: "visible", borderStyle: "solid" }}>
                Text
              </Text>
              <Text style={{ overflow: "visible", borderStyle: "solid" }}>
                Text
              </Text>
            </View>
            <View
              style={{
                overflow: "visible",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderStyle: "solid",
                backgroundSize: "auto"
              }}
            >
              <View
                style={{
                  overflow: "visible",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  alignContent: "stretch",
                  borderStyle: "solid",
                  backgroundSize: "auto"
                }}
              >
                <View
                  style={{
                    overflow: "visible",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderStyle: "solid",
                    backgroundSize: "auto"
                  }}
                >
                  <Text style={{ overflow: "visible", borderStyle: "solid" }}>
                    Text
                  </Text>
                  <Button
                    style={{
                      overflow: "visible",
                      borderStyle: "solid",
                      backgroundColor: "#3366FF"
                    }}
                    onPress={() => alert("Pressed!")}
                  >
                    Button
                  </Button>
                </View>
                <View
                  style={{
                    overflow: "visible",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderStyle: "solid",
                    backgroundSize: "auto"
                  }}
                >
                  <Text style={{ overflow: "visible", borderStyle: "solid" }}>
                    Text
                  </Text>
                  <Text style={{ overflow: "visible", borderStyle: "solid" }}>
                    Text
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
