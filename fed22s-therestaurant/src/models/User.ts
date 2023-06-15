//class för vårat objekt
export class User {
  name: string | number | readonly string[] | undefined;

  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public phone: string
  ) {}
}
