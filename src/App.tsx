import React, { useEffect, useState } from 'react';
import { SLR } from './analisador/analisadorSintatico';
import analisadorLexico from './analisador/analisadorLexico';
import IToken from './interface/IToken';

const App: React.FC = () => {
  const [textoEntrada, setTextoEntrada] = useState('');
  const [tokens, setTokens] = useState<IToken[]>([]);
  const [mensagem, setMensagem] = useState<string>('');

  const slr = new SLR();

  const handleAnalisar = () => {
    setMensagem(''); // Limpa a mensagem a cada nova análise
    setTokens(analisadorLexico(textoEntrada));
    analisarTokens(tokens);
  };

  const analisarTokens = (listaTokens: { Token: any }[]) => {
    const tokens = listaTokens.map((token: { Token: any }) => token.Token);
    const result = slr.parser(tokens);
    setMensagem(result);
  };

  return (
    <div>
      <textarea
        value={textoEntrada}
        onChange={(e) => setTextoEntrada(e.target.value)}
        placeholder="Digite o texto aqui"
      />
      <button onClick={handleAnalisar}>Analisar</button>

      {/* Exibe mensagens sobre a análise */}
      <div>
        <h2>Mensagem:</h2>
        <p>{mensagem}</p>
      </div>

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
