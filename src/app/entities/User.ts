export class User {
  private _email: string;
  private _lastname: string;
  private _firstname: string;
  private _password: string;

  constructor(email: string, password: string) {
    this._email = email;
    this._firstname = 'Alex';
    this._lastname = '';
    this._password = password;
  }
  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
