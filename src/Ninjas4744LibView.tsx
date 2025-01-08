import { requireNativeView } from 'expo';
import * as React from 'react';

import { Ninjas4744LibViewProps } from './Ninjas4744Lib.types';

const NativeView: React.ComponentType<Ninjas4744LibViewProps> =
  requireNativeView('Ninjas4744Lib');

export default function Ninjas4744LibView(props: Ninjas4744LibViewProps) {
  return <NativeView {...props} />;
}
