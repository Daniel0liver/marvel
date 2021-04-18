import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import Header from 'components/Header';

const Characters = lazy(() => import('pages/Characters'));

const Routes = () => {
  return (
    <Router>
      <Sidebar>
        <Header />
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route exact path="/" component={Characters} />
          </Switch>
        </Suspense>
      </Sidebar>
    </Router>
  );
};

export default Routes;

/*
  React lazy: é um code split, permite carregar apenas o necessario, ou seja, não
  carrega todo os components de uma vez, mas apenas quando for requisitado ou 
  quando for necessário o uso desse componente.
*/

/*
  React Suspense: Permite esperar o carregamento de um código e enquanto o código
  carrega, retorna um fallback que pode ser um componente react para indicar ação de loading.
*/
