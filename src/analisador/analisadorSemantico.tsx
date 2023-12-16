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

let tabelaSimbolos = new Pilha(); // tabela de símbolos como uma pilha
let escopo = new Pilha();        // escopos podem ser guardados em qualquer estrutura
tabelaSimbolos.empilha(escopo); // empilha primeiro escopo

class Variavel {
    id: any;
    tipo: any;

    constructor(v: any, tipo: any) {
        this.id = v;       // variável
        this.tipo = tipo;  // tipo
    }
}

export function analiseSemantica(acao: number, el: any): Pilha {
    switch (acao) {
        case 1: {
            tabelaSimbolos.desempilha(); // fecha um escopo
            break;
        }
        case 4: { // encontrou um ID
            let nv = new Variavel(el.lexema, "c");
            tabelaSimbolos.consulta().empilha(nv); // guarda variável na tabela
            break;
        }
        case 8: { // abre novo escopo
            let novoEscopo = new Pilha();
            tabelaSimbolos.empilha(novoEscopo);
            break;
        }
    }
    return tabelaSimbolos;
}
