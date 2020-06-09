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

  state = {
    Input_7: "",
    CheckBox_12: true,
    Toggle_14: true,
    Input_21: "",
    CheckBox_31: true,
    Radio_27: true,
    Input_100: ""
  }

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
              <Slider
                value="50"
                minimalValue="0"
                maximumValue="100"
                step="1"
                disabled={false}
                style={{ overflow: "visible", borderStyle: "solid" }}
              />
              <Image
                resizeMethod="cover"
                style={{ overflow: "visible", borderStyle: "solid" }}
              />
              <CheckBox
                text="Checkbox"
                disabled={false}
                style={{ overflow: "visible", borderStyle: "solid" }}
                checked={this.state.CheckBox_12}
                onChange={nextChecked =>
                  this.setState({ CheckBox_12: nextChecked })
                }
              />
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
                  <Image
                    resizeMethod="cover"
                    style={{ overflow: "visible", borderStyle: "solid" }}
                  />
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
                />
              </View>
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
                  <Toggle
                    activeColor=""
                    inactiveColor=""
                    disabled={false}
                    text="switch ON/OFF"
                    style={{ overflow: "visible", borderStyle: "solid" }}
                    checked={this.state.Toggle_14}
                    onChange={nextChecked =>
                      this.setState({ Toggle_14: nextChecked })
                    }
                  />
                  <Input
                    number
                    placeholder="Text input placeholder"
                    editable={true}
                    value=""
                    style={{ overflow: "visible", borderStyle: "solid" }}
                  />
                  <Textarea
                    placeholder="Text input placeholder"
                    editable={true}
                    value=""
                    style={{ overflow: "visible", borderStyle: "solid" }}
                  />
                  <Input
                    placeholder="Text input placeholder"
                    editable={true}
                    style={{ overflow: "visible", borderStyle: "solid" }}
                    value={this.state.Input_21}
                    onChangeText={nextValue =>
                      this.setState({ Input_21: nextValue })
                    }
                  />
                  <Text style={{ overflow: "visible", borderStyle: "solid" }}>
                    Text
                  </Text>
                  <Icon
                    iconFont="Eva Design Icons"
                    icon="github"
                    style={{ overflow: "visible", borderStyle: "solid" }}
                  />
                  <CheckBox
                    text="Checkbox"
                    disabled={false}
                    style={{ overflow: "visible", borderStyle: "solid" }}
                    checked={this.state.CheckBox_31}
                    onChange={nextChecked =>
                      this.setState({ CheckBox_31: nextChecked })
                    }
                  />
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
                  <Text style={{ overflow: "visible", borderStyle: "solid" }}>
                    Text
                  </Text>
                  <Text style={{ overflow: "visible", borderStyle: "solid" }}>
                    Text
                  </Text>
                  <Radio
                    text="Radio button"
                    disabled={false}
                    style={{ overflow: "visible", borderStyle: "solid" }}
                    checked={this.state.Radio_27}
                    onChange={nextChecked =>
                      this.setState({ Radio_27: nextChecked })
                    }
                  />
                  <Input
                    placeholder="Text input placeholder"
                    editable={true}
                    style={{ overflow: "visible", borderStyle: "solid" }}
                    value={this.state.Input_100}
                    onChangeText={nextValue =>
                      this.setState({ Input_100: nextValue })
                    }
                  />
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
