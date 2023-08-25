export interface Model {
    id?: string | number,
    UserAlta: string;
    FechaAlta: string;
    UserMod: string;
    FechaMod: string;
    UserBaja: string;
    FechaBaja: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface Profile {
    id: string | number,
    nombre: string,
}

export interface State extends Model {
    nombre: string,
    abreviacion: string,
    activo: boolean,
}

export interface Category extends Model {
    nombre: string,
    descripcion: string,
    activo: boolean,
}

export interface User extends Model {
    perfil_id: string | number,
    nombre: string,
    apellidos: string,
    nick: string,
    correo: string,
    contraseña: string,
    activo: boolean,
    perfil?: Profile
}

export interface New extends Model {

    categoria_id: string | number;
    estado_id: string | number;
    usuario_id: string | number;
    titulo: string;
    fecha_publicacion: string;
    descripcion: string;
    imagen: string;
    activo: boolean;
    usuario?: User;
    categoria?: Category;
    estado?: State;
}
export interface LoginData {
    correo: string;
    contraseña: string;
    contrasenia: string;
}

export interface LoginResponse {
    token: string
}

export interface Register {

    nombre: string,
    apellidos: string,
    nick: string,
    correo: string,
    contraseña: string,
    contrasenia: string
}

export interface DataDialog<T> {
    model: T,
    type: 'create' | 'edit'
}