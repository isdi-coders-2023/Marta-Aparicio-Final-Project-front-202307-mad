import { LoginData, User, UserNoId } from '../../model/user';
import { Repository } from '../../services/repository';
import { Logued } from '../../types/logued';

export class ApiUsersRepository implements Repository<User> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async getAll(token: string): Promise<User[]> {
    const response = await fetch(this.urlBase, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + token,
      },
    });
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }

  async getById(id: string, token: string): Promise<User> {
    const url = this.urlBase + '/' + id;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + token,
      },
    });
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }

  async create(item: UserNoId): Promise<User> {
    const response = await fetch(this.urlBase + '/register', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }

  async login(item: LoginData): Promise<Logued> {
    const response = await fetch(this.urlBase + '/login', {
      method: 'PATCH',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }

  async update(item: Partial<User>, token: string): Promise<User> {
    const url = this.urlBase + '/' + 'profile';
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + token,
      },
    });
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }

  async delete(token: string): Promise<void> {
    const url = this.urlBase + '/profile';
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + token,
      },
    });

    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
}
