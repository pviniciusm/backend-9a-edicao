import { IFreteServico } from "./frete-servico";

export class Sedex implements IFreteServico {
    calcularFrete(peso: number) {
        return peso * 10;
    }
}
