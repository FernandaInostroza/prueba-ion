export interface User {
    rut: string;
    type: UserType;
}

export enum UserType {
    'PACIENTE' = 'PACIENTE',
    'MEDICO' = 'MEDICO',
}

export interface UserData {
    name: string;
    email: string;
}