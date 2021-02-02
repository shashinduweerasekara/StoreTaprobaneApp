import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ContactUs from '../screens/ContactUs';
import FAQ from '../screens/FAQ';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import TermsAndConditions from '../screens/TermsAndConditions';

const Drawer = createDrawerNavigator();

function DrawerBar() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="FAQ"
        component={FAQ}
        options={{drawerLabel: 'FAQ'}}
      />
      <Drawer.Screen
        name="Contact Us"
        component={ContactUs}
        options={{drawerLabel: 'Contact Us'}}
      />
      <Drawer.Screen
        name="Privacy Policy"
        component={PrivacyPolicy}
        options={{drawerLabel: 'Privacy Policy'}}
      />
      <Drawer.Screen
        name="Terms and Conditions"
        component={TermsAndConditions}
        options={{drawerLabel: 'Terms and Conditions'}}
      />
    </Drawer.Navigator>
  );
}

export default DrawerBar;
