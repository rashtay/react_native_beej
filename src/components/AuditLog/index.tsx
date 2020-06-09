import React from 'react';
import { View, Text } from 'react-native';
import { useStoreState } from 'easy-peasy';

export default function AuditLog() {
  const logs = useStoreState((state) => state.audit.logs);

  return (
    <View>
      <Text>{logs.join('\n')}</Text>
    </View>
  );
}
