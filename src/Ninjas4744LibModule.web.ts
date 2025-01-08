import { registerWebModule, NativeModule } from 'expo';

import { Ninjas4744LibModuleEvents } from './Ninjas4744Lib.types';

class Ninjas4744LibModule extends NativeModule<Ninjas4744LibModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(Ninjas4744LibModule);
