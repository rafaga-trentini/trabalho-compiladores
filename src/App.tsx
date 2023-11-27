import React, { useEffect, useState } from 'react';
import analisadorLexico from './analisador/analisadorLexico';
import IToken from './interface/IToken';

const App: React.FC = () => {
  const [textoEntrada, setTextoEntrada] = useState('');
  const [tokens, setTokens] = useState<IToken[]>([]);

  const handleAnalisar = () => {
    // Chama o analisador léxico passando o texto de entrada
    setTokens(analisadorLexico(textoEntrada));

  };

  return (
    <div>
      <textarea
        value={textoEntrada}
        onChange={(e) => setTextoEntrada(e.target.value)}
        placeholder="Digite o texto aqui"
      />
      <button onClick={handleAnalisar}>Analisar</button>

      {/* Exibe a listagem de tokens */}
      <div>
        <h2>Listagem de Tokens:</h2>
        <ul>
          {tokens.map((token, index) => (
            <li key={index}>
              Token: {token.Token}, Lexema: {token.Lexema}, Linha: {token.Linha}, PosInicial: {token.PosInicial}, PosFinal: {token.PosFinal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
