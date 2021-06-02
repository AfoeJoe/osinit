/**
 * Модель данных для авторизации.
 * @prop {string} name Имя пользователя.
 * @prop {string} password Пароль пользователя.
 */
export interface ILoginData {
  login: string;
  password: string;
}

export interface IOrganizationItem {
  id: number;
  name: string;
  address: string;
  INN: number;
}

export interface IEmployeeItem {
  id: number;
  id_division: number;
  FIO: String;
  address: String;
  position: String;
}

export interface IDivisionItem {
  id: number;
  name: string;
  id_organization: number;
  phone: number;
}
