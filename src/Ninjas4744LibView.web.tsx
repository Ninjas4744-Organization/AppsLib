import * as React from 'react';

import { Ninjas4744LibViewProps } from './Ninjas4744Lib.types';

export default function Ninjas4744LibView(props: Ninjas4744LibViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
