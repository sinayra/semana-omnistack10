import React, { useState, useEffect } from 'react';

// componente: função que retorna html/css/javascript pra interface, não interfere no restante da aplicação
// estado: informação mantida pelo componente, lida e atualizada por ele (imutabilidade)
// propriedade: propriedade de um componente FILHO que um componente PAI passa, passando pelo parâmetro 'props'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="" alt="" />
              <div className="user-info">
                <strong>Nome</strong>
                <span>Tecnologias</span>
              </div>
            </header>
            <p>Descrição</p>
            <a href="#">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
