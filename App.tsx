import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, Pressable, View } from 'react-native';

type FrogProps = {
  name: string;
  color: string;
};

type ButtonProps = {
  exNumber: number;
  onPressHandler: Function;
};

const Frog = (props: FrogProps) => {
  const frogstylearray = StyleSheet.compose(styles.frog, { backgroundColor: props.color });
  return (
    <SafeAreaView style={frogstylearray}>
      <Text>
        {props.name}
      </Text>

    </SafeAreaView>
  );
};

const RoundButton = (props: ButtonProps) => {

}

const Lake = () => {
  const [isButton, SetIsButton] = useState(0);
  let Lakestylearry;
  switch (isButton) {
    case 1: Lakestylearry = StyleSheet.compose(styles.lake, styles.ex01); break;
    case 2: Lakestylearry = StyleSheet.compose(styles.lake, styles.ex02); break;
    case 3: Lakestylearry = StyleSheet.compose(styles.lake, styles.ex03); break;
    case 4: Lakestylearry = StyleSheet.compose(styles.lake, styles.ex04); break;
    case 5: Lakestylearry = StyleSheet.compose(styles.lake, styles.ex05); break;
    case 6: Lakestylearry = StyleSheet.compose(styles.lake, styles.ex06); break;
    case 7: Lakestylearry = StyleSheet.compose(styles.lake, styles.ex07); break;
    case 8: Lakestylearry = StyleSheet.compose(styles.lake, styles.ex08); break;
    case 9: Lakestylearry = StyleSheet.compose(styles.lake, styles.ex09); break;
    case 10: Lakestylearry = StyleSheet.compose(styles.lake, styles.ex10); break;
    case 11: Lakestylearry = StyleSheet.compose(styles.lake, styles.ex11); break;
    case 12: Lakestylearry = StyleSheet.compose(styles.lake, styles.ex12); break;
  }
  return (
    <View style={styles.main}>
      <SafeAreaView style={[styles.lake, Lakestylearry]}>
        <Frog name='1' color='green' />
        <Frog name='2' color='yellow' />
        <Frog name='3' color='red' />
      </SafeAreaView>
      <SafeAreaView style={styles.buttons}>
        <Pressable
          onPress={() => { SetIsButton(1); }}
          style={styles.button}
        ><Text style={styles.textbutton}>№1</Text></Pressable>
        <Pressable
          onPress={() => { SetIsButton(2); }}
          style={styles.button}
        ><Text style={styles.textbutton}>№2</Text></Pressable>
        <Pressable
          onPress={() => { SetIsButton(3); }}
          style={styles.button}
        ><Text style={styles.textbutton}>№3</Text></Pressable>
        <Pressable
          onPress={() => { SetIsButton(4); }}
          style={styles.button}
        ><Text style={styles.textbutton}>№4</Text></Pressable>
        <Pressable
          onPress={() => { SetIsButton(5); }}
          style={styles.button}
        ><Text style={styles.textbutton}>№5</Text></Pressable>
        <Pressable
          onPress={() => { SetIsButton(6); }}
          style={styles.button}
        ><Text style={styles.textbutton}>№6</Text></Pressable>
        <Pressable
          onPress={() => { SetIsButton(7); }}
          style={styles.button}
        ><Text style={styles.textbutton}>№7</Text></Pressable>
        <Pressable
          onPress={() => { SetIsButton(8); }}
          style={styles.button}
        ><Text style={styles.textbutton}>№8</Text></Pressable>
        <Pressable
          onPress={() => { SetIsButton(9); }}
          style={styles.button}
        ><Text style={styles.textbutton}>№9</Text></Pressable>
        <Pressable
          onPress={() => { SetIsButton(10); }}
          style={styles.button}
        ><Text style={styles.textbutton}>№10</Text></Pressable>
        <Pressable
          onPress={() => { SetIsButton(11); }}
          style={styles.button}
        ><Text style={styles.textbutton}>№11</Text></Pressable>
        <Pressable
          onPress={() => { SetIsButton(12); }}
          style={styles.button}
        ><Text style={styles.textbutton}>№12</Text></Pressable>
      </SafeAreaView>
      <Text style={styles.Text1}>Текущая задача : {isButton}</Text>
    </View>
  );
};

export default Lake;


const styles = StyleSheet.create({
  main: {
    backgroundColor: 'grey',
    height: '100%',
    width: "100%",
  },
  lake: {
    backgroundColor: 'aquamarine',
    height: '70%',
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: '18%',
    backgroundColor: '#712F26',
  },
  button: {
    borderWidth: 2,
    backgroundColor: "#C1876B",
    width: 82,
    height: 82,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textbutton: {
    fontWeight: "700"
  },
  frog: {
    height: 50,
    width: 50,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  ex01: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  ex02: {
    flexDirection: "row",
    justifyContent: "center",
  },
  ex03: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ex04: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ex05: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  ex06: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
  },
  ex07: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: 'space-around',
  },
  ex08: {
    flexDirection: "row-reverse",
  },
  ex09: {

  },
  ex10: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
  ex11: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  ex12: {
    flexDirection: "column-reverse",
    justifyContent: "space-between",
  },
  Text1: {
    color: 'black',
    textAlign: "center",
  }
});
