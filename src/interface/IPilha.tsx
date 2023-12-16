export default class IPilha {
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
