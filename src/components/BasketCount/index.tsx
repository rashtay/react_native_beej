import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  count: number;
  onLinkPress: () => any;
};

export default function BasketCount({ count, onLinkPress }: Props) {
  return (
    <View>
      <Text onPress={onLinkPress}>Basket({count} items)</Text>
    </View>
  );
}
