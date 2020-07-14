import React from 'react';
import { TouchableWithoutFeedback, ToastAndroid } from 'react-native';
import Svg, { Defs, G, Path } from "react-native-svg";

export function HamburgerIcon() {
  const showToast = () => {
    ToastAndroid.show('Мне было лень делать боковое меню :)', ToastAndroid.SHORT);
  };

  return (
    <TouchableWithoutFeedback onPress={() => showToast()}>
      <Svg
        width={26}
        height={26}
        viewBox="0 0 21000 21000"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        fill='#1E1139'
      >
        <Defs></Defs>
        <G id="prefix__\u0421\u043B\u043E\u0439_x0020_1">
          <G id="prefix___979200401456">
            <Path
              className="prefix__icon--main"
              d="M900 4649.98h19200c495 0 900-405 900-900s-405-900-900-900H900c-495 0-900 405-900 900s405 900 900 900zM900 11399.97h19200c495 0 900-405 900-900s-405-900-900-900H900c-495 0-900 405-900 900s405 900 900 900zM900 18149.97h19200c495 0 900-405 900-900s-405-900-900-900H900c-495 0-900 405-900 900s405 900 900 900z"
            />
          </G>
        </G>
      </Svg>
    </TouchableWithoutFeedback>
  )
}