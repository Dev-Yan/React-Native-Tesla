import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './style';

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Pedido personalizado"}
          onPress={() => {
            console.warn("Pedido personalizado foi pressionado");
          }}
        />

        <StyledButton
          type="secondary"
          content={"inventário existente"}
          onPress={() => {
            console.warn("Inventório existente foi pressionado");
          }}
        />
      </View>

    </View>
  );
};

export default CarItem;