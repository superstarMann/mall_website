import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Outer } from '../Route/Outer';
import { Top } from '../Route/Top';
import { Accessories } from '../Route/Accessories';
import { Bottom } from '../Route/Bottom';

export const Router = () => {
    const ClientRoutes = [
        {component: <Outer/> , path: "/"},
        {component: <Top/>, path: "/top"},
        {component: <Bottom/>, path: "/bottom"},
        {component: <Accessories/>, path: "/accessories"},
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