class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

const herois = [
    new heroi("Arthur", 30, "guerreiro"),
    new heroi("Merlin", 150, "mago"),
    new heroi("Lee", 25, "monge"),
    new heroi("Hanzo", 28, "ninja")
];

console.log("--- Iniciando Aventura ---");

for (const Aventura of herois) {
    Aventura.atacar();
}