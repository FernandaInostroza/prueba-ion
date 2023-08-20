import { Paciente } from "./paciente.models";

export interface IMC {
    imc:       number;
}
export interface HistorialIMC {
    imc:         number;
    pacienteRut: string;
    paciente:    Paciente;
    id:          number;
    createdAt:   Date;
}