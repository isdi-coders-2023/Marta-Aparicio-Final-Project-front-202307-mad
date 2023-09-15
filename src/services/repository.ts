import { LoginData } from '../model/user';
import { Logged } from '../types/logged';

export interface Repository<X extends { id: string | number }> {
  getAll(token: string): Promise<X[]>;
  getById(id: X['id'], token: string): Promise<X>;
  create(newData: Omit<X, 'id'>): Promise<X>;
  update(newData: Partial<X>, token: string): Promise<X>;
  delete(token: string): Promise<void>;
  login(data: LoginData): Promise<Logged>;
}
