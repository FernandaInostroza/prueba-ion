import { ResponseBase } from "./response-base.model";

export interface ApiResponsePaciente {
    ok:        boolean;
    pacientes: Paciente[];
}

export interface ResponseGetPaciente extends ResponseBase{
    paciente: Paciente;
}

export interface Paciente {
    rut:        string;
    email:      string;
    password:   string;
    name:       string;
    sex:        string;
    age:        number;
    phone:      string;
    weight:     number;
    height:     number;
}