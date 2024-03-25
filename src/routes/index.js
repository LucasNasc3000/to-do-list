/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import TaskSearch from "../pages/TaskSearch";
import Page404 from "../pages/Page404";

// O switch faz com que somente uma rota seja chamada por vez
// <Route path="/" component={Login} /> faz com que o componente Home seja renderizado na raiz da aplicação (a primeira página a ser vista)
// path="/" verifica se o caminho dentro nas aspas realmente existe nas rotas. O exact detecta qualquer caractere diferente do caminho indicado em path=""
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search/:task" component={TaskSearch} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
