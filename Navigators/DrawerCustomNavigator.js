import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';


// Screens
import {Home} from "../Screens/Home";
import {BuscarCerveceria} from "../Screens/BuscarCerveceria";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";




const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    constructor(props) {
        super(props);
    }

    handlerLogout = () =>{
        this.props.onLogout();
    }

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen onLogoutPress={this.handlerLogout} {...props}/>}
            >
                <Drawer.Screen name="Home"  component={Home}   />
                <Drawer.Screen name="Buscar" component={BuscarCerveceria} />               
             
            </Drawer.Navigator>
        );
    }
    
}
