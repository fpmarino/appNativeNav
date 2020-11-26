import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {Home} from "../Screens/Home";
//import {InfoScreen} from "../Screens/InfoScreen";

const Drawer = createDrawerNavigator();

export class DrawerDefaultNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                
            </Drawer.Navigator>
        );
    }
    
}