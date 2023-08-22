export interface ApiResponseMedico {
    ok:      boolean;
    medico: Medico;
}

export interface Medico {
    id:          number;
    rut:         string;
    name:        string;
    email:       string;
    phone:       string;
    especiality: string;
}