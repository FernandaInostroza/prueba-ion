export interface User {
    rut: string;
    type: UserType;
}

enum UserType {
    'PACIENTE' = 'PACIENTE',
    'MEDICO' = 'MEDICO',
}