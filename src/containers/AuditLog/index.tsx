import React from 'react';
import { useStoreState } from 'easy-peasy';
import AuditLog from '@components/AuditLog';

export default function AuditLogContainer() {
  const logs = useStoreState((state) => state.audit.logs);

  return <AuditLog logs={logs} />;
}
