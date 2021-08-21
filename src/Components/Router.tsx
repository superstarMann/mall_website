import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import { Exchanges } from '../Route/Exchanges';
import { Coins } from '../Route/Coins';
import { Ranks } from '../Route/Ranks';


export const Router = () => {
    const ClientRoutes = [
        {component: <Coins/>, path: "/"},
        {component: <Ranks/>, path: "/ranks"},
        {component: <Exchanges/> , path: "/exchanges"},
    ]

    return (
        <BrowserRouter>
          <>
           <Header/>
           <Switch>
               {ClientRoutes.map((route) => (
                   <Route exact key={route.path} path={route.path}>
                       {route.component}
                   </Route>
               ))}
           </Switch>
          </>
        </BrowserRouter>
    )
}