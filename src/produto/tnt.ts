import { IFreteServico } from "./frete-servico";

export class TNT implements IFreteServico {
    calcularFrete(peso: number) {
        return peso * 2 + 15;
    }
}
