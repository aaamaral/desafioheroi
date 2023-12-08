class Heroi {
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
          ataque = 'um ataque indefinido';
      }
  
      const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
      console.log(mensagem);
    }
  }
  
  // Exemplo de uso:
  const heroi = new Heroi('Herói Exemplo', 25, 'mago');
  heroi.atacar();
  