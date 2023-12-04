class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    } //criando o método de ataque
    atacar() {
        let attack = '';
        
        switch(this.tipo){
            case 'guerreiro':
                attack = "espada";
                break;
            case 'mago':
                attack = "magia";
                break;
            case 'monge':
                attack = "artes marciais";
                break;
            case 'ninja':
                attack = "shuriken";
                break;
            default:
                attack = "Tipo de ataque não informado";
        }
        console.log(`O ${this.tipo} atacou usando ${attack}`);
    }

}

    //criando instâncias da classe heroi
    let guerreiro = new heroi('Aatrox', 4235, 'guerreiro');
    guerreiro.atacar(); 

    let mago = new heroi('Syndra', 20, 'mago');
    mago.atacar();

    let monge = new heroi('Lee Sin', 35, 'monge');
    monge.atacar();

    let ninja = new heroi('Akali', 25, 'ninja');
    ninja.atacar();