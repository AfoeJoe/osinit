/**
 * Модель данных для авторизации.
 * @prop {string} name Имя пользователя.
 * @prop {string} password Пароль пользователя.
 */
export interface ILoginData {
  login: string;
  password: string;
}

/**
 * Модель данных для организаций.
 * @prop {number} id  организаций.
 * @prop {string} name Имя организаций.
 * @prop {string} address Адресс организаций.
 * @prop {number} INN INN организаций.
 */
export interface IOrganizationItem {
  id: number;
  name: string;
  address: string;
  INN: number;
}
/**
 * Модель данных для Сотрудников.
 * @prop {number} id  Сотрудника.
 * @prop {number} id_division id подразделения.
 * @prop {string} FIO Фамилия,имя,отчество Сотрудника.
 * @prop {string} address Адресс Сотрудника.
 * @prop {string} position  Уровень Сотрудника.
 */
export interface IEmployeeItem {
  id: number;
  id_division: number;
  FIO: string;
  address: string;
  position: string;
}
/**
 * Модель данных для Подразделения.
 * @prop {number} id  подразделения.
 * @prop {string}  name Имя подразделения.
 * @prop {number} id_organization id организаций.
 * @prop {number} phone  номер телефона подразделения.
 */
export interface IDivisionItem {
  id: number;
  name: string;
  id_organization: number;
  phone: number;
}
