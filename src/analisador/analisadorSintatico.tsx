import { analiseSemantica } from "./analisadorSemantico";

class Pilha {
    private topo: number;
    private dado: any[];

    constructor() {
        this.topo = -1;
        this.dado = [];
    }

    empilha(elemento: any): void {
        this.dado[++this.topo] = elemento;
    }

    desempilha(): void {
        --this.topo;
    }

    consulta(): any {
        if (this.topo >= 0)
            return this.dado[this.topo];
        else
            return "Pilha vazia";
    }

    imprime(): string {
        let str = "";
        for (let z = 0; z <= this.topo; z++)
            str += this.dado[z] + " ";
        return str;
    }
}

interface Action {
    [key: string]: string | number;
  }
  
  interface GoTo {
    [key: number]: { [key: string]: number };
  }
  
  export default interface IToken {
    Token: string;
    Lexema: string;
    Linha: string;
    PosInicial: string;
    PosFinal: string;
  }
  
  const NON_TERMINALS: Record<number, string> = {
    0: 'LISTA_COMANDOS',
    1: 'COMANDO',
    2: 'PRINT',
    3: 'IF',
    4: 'COMPARACAO',
    5: 'ATRIBUICAO',
    6: 'EXP',
    7: 'EXP_L',
    8: 'EXP2',
  };
  
  export class SLR {
    private afd: { ACTION: Action; GOTO: GoTo }[];
  
    constructor() {
      this.afd = [
        // Estado 0
        {
          ACTION: { 'if': 'S 3', 'print': 'S 2', 'ID': 'S 5', '$': 'ACC' },
          GOTO: { 0: { 'LISTA_COMANDOS': 1 } }
        },
        // Estado 1
        {
          ACTION: { '$': 'ACC' },
          GOTO: {}
        },
        // Estado 2
        {
          ACTION: { 'ID': 'S 5' },
          GOTO: {}
        },
        // Estado 3
        {
            ACTION: { 'print': 'S 6', 'if': 'S 7', 'ID': 'S 8', '$': 'ACC' },
            GOTO: { 1: { 'COMANDO': 2 }, 2: { 'LISTA_COMANDOS': 4 }, 5: { 'EXP': 9 }, 6: { 'EXP2': 10 }, 7: { 'IF': 11 } }
          },
          
          // Estado 4
          {
            ACTION: { '$': 'R 1' },
            GOTO: { 1: { 'LISTA_COMANDOS': 12 } }
          },
          
          // Estado 5
          {
            ACTION: { 'print': 'S 6', 'if': 'S 7', 'ID': 'S 8', '$': 'R 3' },
            GOTO: { 2: { 'LISTA_COMANDOS': 13 }, 5: { 'EXP': 9 }, 6: { 'EXP2': 10 }, 7: { 'IF': 11 } }
          },
          
          // Estado 6
          {
            ACTION: { 'ID': 'S 14' },
            GOTO: {}
          },
          
          // Estado 7
          {
            ACTION: { 'ID': 'S 15' },
            GOTO: {}
          },
          
          // Estado 8
          {
            ACTION: { 'ABRE_PARENTESES': 'S 16', 'ID': 'S 17', 'CONSTANTE': 'S 18' },
            GOTO: { 2: { 'EXP': 19 }, 5: { 'EXP': 20 }, 6: { 'EXP2': 10 }, 7: { 'IF': 11 } }
          },
          
          // Estado 9
          {
            ACTION: { 'FECHA_PARENTESES': 'S 21' },
            GOTO: {}
          },
          
          // Estado 10
          {
            ACTION: { 'MAIS': 'S 22', 'MENOS': 'S 23', 'MULTIPLICACAO': 'S 24', 'DIVISAO': 'S 25', 'FECHA_PARENTESES': 'R 9' },
            GOTO: {}
          },
          
          // Estado 11
          {
            ACTION: { 'ABRE_CHAVES': 'S 26' },
            GOTO: {}
          },
          
          // Estado 12
          {
            ACTION: { 'ABRE_CHAVES': 'S 27' },
            GOTO: {}
          },
          
          // Estado 13
          {
            ACTION: { '$': 'R 2' },
            GOTO: {}
          },
          
          // Estado 14
          {
            ACTION: { 'ATRIBUICAO': 'S 28' },
            GOTO: {}
          },
          
          // Estado 15
          {
            ACTION: { 'MAIOR_QUE': 'S 29', 'MENOR_QUE': 'S 30', 'MAIOR_IGUAL_QUE': 'S 31', 'MENOR_IGUAL_QUE': 'S 32', 'DIFERENTE': 'S 33' },
            GOTO: {}
          },
        
      ];
    }
  
    public parser(tokens: IToken[]): string {
        const p = new Pilha();
        p.empilha(0);
        console.log("Pilha: " + p.imprime());
        
        for (let i = 0; i < tokens.length; i++) { // Ajustado o loop para evitar o acesso indevido ao índice fora do array
            try {
                const currentPilha = p.consulta();
                const tokenAtual = tokens[i].Token;
                const action = this.afd[currentPilha].ACTION[tokenAtual];

                if (action) {
                    const [type, value] = action.toString().split(' ');
                    console.log(`Ação: ${action}`);
              
                    switch (type) {
                        case 'S':
                            p.empilha(Number(value));
                            console.log(`Pilha: ${p.imprime()}`);
                            break;
                        case 'R':
                            const [, reduceCount] = action.toString().split(' ');
                            const reduction = parseInt(reduceCount, 10);
                            for (let j = 0; j < reduction; j++) {
                                p.desempilha();
                            }
                            console.log(`Reduzido para ${NON_TERMINALS[reduction]}`);
                            const nextState = this.afd[p.consulta()].GOTO[reduction][NON_TERMINALS[reduction]];
                            p.empilha(nextState);
                            break;
                        case 'ACC':
                            console.log('Aceito');
                            return 'Linguagem aceita';
                        default:
                            console.log('Erro');
                            return 'Erro sintático';
                    }
              
                    const tb = analiseSemantica(p.consulta(), tokens[i]);
                    console.log(tb.imprime());
                } else {
                    console.log('Erro: Token não reconhecido');
                    return 'Erro sintático';
                }
            } catch (e) {
                console.log('Erro ao analisar o token', e);
                return 'Erro sintático';
            }
        }
      
        if (p.consulta() === 0) {
            console.log('Aceito');
            return 'Linguagem aceita';
        } else {
            console.log('Erro: Pilha não vazia no final da análise');
            return 'Erro sintático';
        }
    }
}