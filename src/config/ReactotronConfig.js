import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotroSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.10' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotroSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
