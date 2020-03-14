import React  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../src/Components/Header'
import Profile from "./Pages/Profile";
import Sidebar from './Components/Sidebar';
import Content from "./Components/Content";
import Dashboard from "./Pages/Admin/Dashboard";
import Empreendedor from "./Pages/Admin/Empreendedor";

const routes = [
    {
      path: "/",
      name: "Dashboard",
      exact: true,
      active: true,
      iconClass: "nav-icon fas fa-tachometer-alt",
      component: ()=> <Content pageName="Dashboard" content={<Dashboard msg="ola"/>} />,
    },
    {
      path: "/empreendedores",
      name: "Empreendedores",
      active: false,
      iconClass: "nav-icon fas far fa-address-card",
      component: ()=> <Content pageName="Empreendedores" content={<Empreendedor/>} />,
    },
    {
      path: "/profile",
      name: "Perfil",
      active: false,
      iconClass: "nav-icon fas fa-copy",
      component: ()=> <Content pageName="Meu Perfil" content={<Profile />} />,
    }
    ,
    // {
    //   path: "/about",
    //   name: "About",
    //   active: false,
    //   iconClass: "nav-icon fas fa-th",
    //   component: ()=> <Content pageName="About" content={<About />} />,    
    // }
  ];

export default function Routes(){
    return(
        <>
            
            <Router>
                <Header/>
                <Sidebar routes={routes}/>
                <Switch>
                    {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                    ))}
                </Switch>
            </Router>
        </>
    )
}