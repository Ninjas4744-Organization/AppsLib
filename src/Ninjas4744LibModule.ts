import { NativeModule, requireNativeModule } from 'expo';

import { Ninjas4744LibModuleEvents } from './Ninjas4744Lib.types';

declare class Ninjas4744LibModule extends NativeModule<Ninjas4744LibModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<Ninjas4744LibModule>('Ninjas4744Lib');
