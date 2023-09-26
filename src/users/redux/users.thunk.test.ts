import { LoginData, User, UserNoId } from '../../model/user';
import { appStore } from '../../store/store';
import { Logged } from '../../types/logged';
import { ApiUsersRepository } from '../services/users.repository';
import { loginThunk, registerThunk } from './users.thunk';

describe('Given registerThunk', () => {
  test('it should be dispatched', () => {
    const mockRepo = {
      register: jest.fn(),
    } as unknown as ApiUsersRepository;
    const mockData = { repo: mockRepo, user: {} as UserNoId };
    appStore.dispatch(registerThunk(mockData));
    expect(mockRepo.register).toHaveBeenCalled();
  });
});
describe('Given loginThunk', () => {
  test('it should be dispatched', async () => {
    const mockReturnedValue = { user: {} as User, token: '' } as Logged;
    const mockRepo = {
      login: jest.fn().mockReturnValueOnce(mockReturnedValue),
    } as unknown as ApiUsersRepository;
    const mockData = {
      repo: mockRepo,
      user: { userName: 'test', password: 'test' } as LoginData,
    };

    appStore.dispatch(loginThunk(mockData));
    expect(mockRepo.login).toHaveBeenCalled();
  });
});
