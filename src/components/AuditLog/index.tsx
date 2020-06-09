import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  logs: string[];
}

export default function AuditLog({ logs }: Props) {
  return (
    <View>
      <Text>{logs.join('\n')}</Text>
    </View>
  );
}
