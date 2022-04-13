import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';
import { Mixpanel } from 'mixpanel-react-native';

const mixpanel = new Mixpanel('a24ec7c3047bad17df96982369d54900');

class Tracking {
  static init() {
    mixpanel.init();
  }

  static logUser(user: any) {
    const { email, id, isPhotographer, name, username, images } = user;
    const properties = {
      email,
      id,
      isPhotographer: isPhotographer.toString(),
      name,
      username,
    };
    mixpanel.clearSuperProperties();
    analytics().setUserId(id);
    analytics().setUserProperties(properties);
    crashlytics().setUserId(id);
    mixpanel.identify(id);
    this.mixpanelSet(properties);
    mixpanel.flush();
    crashlytics().setAttributes(properties);
  }

  static async screenChanged(previousRouteName, currentRouteName) {
    if (previousRouteName !== currentRouteName) {
      console.log('ScreenView', { screen: currentRouteName });
      mixpanel.track('ScreenView', { screen: currentRouteName });
      mixpanel.flush();
      await analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
      });
    }
  }

  private static mixpanelSet(properties: object) {
    Object.keys(properties).forEach(key => {
      mixpanel?.getPeople().set(`$${key}`, properties[key]);
    });
  }
}

export default Tracking;
