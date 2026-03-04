class Pizza {
  constructor(masa, tamano, ingredientes) {
    this.masa = masa;
    this.tamano = tamano;
    this.ingredientes = ingredientes;
  }

  preparar() {
    console.log(
      `Preparando una pizza ${this.tamano} con masa ${this.masa} y los siguientes ingredientes: ${this.ingredientes.join(", ")}.`
    );
    return this;
  }

  hornear() {
    console.log("La pizza está en el horno...");
    return this;
  }

  empacar() {
    console.log("Empacando la pizza...");
    return this;
  }
}

const pizzaHawaiana = new Pizza(
  "Masa Gruesa",
  "Mediana",
  ["Queso", "jamon", "Piña"]
);
console.log (pizzaHawaiana.preparar());
console.log (pizzaHawaiana.hornear());
console.log (pizzaHawaiana.empacar());

const pizzapeperonni = new Pizza("Masa Gruesa", "Mediana", ["Queso", "peperonni"]);
pizzaHawaiana.preparar().hornear().empacar();

class Combos extends Pizza {
  constructor(combo, cantidad, masa, tamano, ingredientes, bebida, postre) {
    super(masa, tamano, ingredientes); 
    this.combo = combo;
    this.cantidad = cantidad;
    this.bebida = bebida;
    this.postre = postre;
  }

  elegirCombo() {
    this.preparar()
        .hornear()
        .empacar();

    console.log(
      `Pedido: Combo ${this.combo} - Cantidad: ${this.cantidad}
Pizza ${this.tamano}, masa ${this.masa}, ingredientes: ${this.ingredientes.join(", ")}
Incluye bebida: ${this.bebida} y postre: ${this.postre}`
    );

    return this;
  }
}

const combo1 = new Combos(
  "personal", 2, "delgada", "pequeña", ["jamom_serrano", "queso_gruyer", "parmesano_gratinado", "slami_picante", "sin bebida", "dos litros de elado a 2.000 pesitos"]
);

console.log (combo1.elegirCombo());

