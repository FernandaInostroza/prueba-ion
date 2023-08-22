export interface ApiResponseExpedientes {
    ok:          boolean;
    expedientes: Expediente[];
}

export interface Expediente {
    id:          number;
    description: string;
    createdAt:   Date;
    paciente:    Paciente;
    medico:      Medico;
}

export interface Medico {
    id:          number;
    rut:         string;
    name:        string;
    email:       string;
    phone:       string;
    especiality: string;
}

export interface Paciente {
    id:     number;
    rut:    string;
    email:  string;
    name:   string;
    sex:    string;
    age:    number;
    phone:  string;
    weight: number;
    height: number;
}

export interface CreateExpediente {
    description: string;
    pacienteRut: string;
    medicoRut: string;
}