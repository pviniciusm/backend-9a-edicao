import { IFreteServico } from "./frete-servico";

export class Fedex implements IFreteServico {
    calcularFrete(peso: number) {
        return (peso * peso) / 3;
    }
}
