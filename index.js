import { Buffer } from 'buffer';
global.Buffer = Buffer;

import registerRootComponent from 'expo/build/launch/registerRootComponent';
import App from './App';

registerRootComponent(App);
