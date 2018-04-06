import React from 'react';
import { Transition } from 'react-transition-group';

const TransitionBoiler = ({styleParameters, sharedDefaults, text}) => {
  const styleBuilder = function() {
    const styles = {};
    const defaultStyle = {};
    const transitionStyles = {
      entering: {},
      entered: {},
      exiting: {},
      exited: {}
    };

    Object.keys(sharedDefaults).map(function(key) { return defaultStyle[key] = sharedDefaults[key]; });
    defaultStyle.transition = sharedDefaults.transition !== undefined ? sharedDefaults.transition : "";
    defaultStyle.transitionProperty = sharedDefaults.transitionProperty !== undefined ? sharedDefaults.transitionProperty : "";

    styleParameters.map(function(attribute) {
      const jsxName = attribute.jsxName;
      const cssName = attribute.cssName;
      const duration = attribute.duration;
      const ease = attribute.ease;
      const valueStart = attribute.valueStart;
      const valueEnd = attribute.valueEnd;

      // update defaultStyle
      const comma = defaultStyle.transition === "" ? "" : ", ";

      defaultStyle.transition += `${comma}${jsxName} ${duration}ms ${ease}`;
      defaultStyle.transitionProperty += `${comma}${cssName}`;

      // update transitionStyles
      transitionStyles.entering[jsxName] = valueStart;
      transitionStyles.entered[jsxName] = valueEnd;

      return null;
    });

    styles.defaultStyle = defaultStyle;
    styles.transitionStyles = transitionStyles;

    return styles;
  };

  const styles = styleBuilder(styleParameters);

  return (
    <Transition in={true} timeout={100} appear={true}>
      {(state) => {
        return (
          <div style={{
            ...styles.defaultStyle,
            ...styles.transitionStyles[state]
          }}>
            {text}
          </div>
        )
      }}
    </Transition>
  );
}

export default TransitionBoiler;
