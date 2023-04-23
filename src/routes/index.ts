import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import {withTheme} from 'styled-components/native';
import {ROUTE} from '../utils/constants';
import About from '../Page/About';
import Home from '../Page/Home';
import Other from '../Page/Other';
import Interest from '../Page/interest/Interest';
import Login from '@/Page/login/Login';
import OboardingIntro from '../Page/oboarding-intro';
import {getDefaultHeaderWithButton} from '@/utils/navigationOption';

interface routeProps {
  name: string;
  component: (props: any) => JSX.Element;
  options?:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
      }) => NativeStackNavigationOptions)
    | undefined;
}

const routes: Array<routeProps> = [
  {
    name: ROUTE.ONBOARDING_INTRO,
    component: withTheme(OboardingIntro),
    options: {
      header: () => null,
    },
  },
  {
    name: ROUTE.HOME,
    component: Home,
    options: {title: 'Home'},
  },
  {
    name: ROUTE.ABOUT,
    component: About,
    options: {title: 'About'},
  },
  {
    name: ROUTE.OTHER,
    component: Other,
    options: {title: 'Other'},
  },
  {
    name: ROUTE.LOGIN,
    component: withTheme(Login),
    options: {
      header: () => null,
    },
  },
  {
    name: ROUTE.INTEREST,
    component: withTheme(Interest),
    options: ({navigation}) =>
      getDefaultHeaderWithButton(navigation, 'Your Interests', 'check-all'),
  },
];

// const unLoginRoute:Array<routeProps> = [{

// }]

export default routes;
