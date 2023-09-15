import { LoginData, UserNoId } from '../../model/user';
import { appStore } from '../../store/store';
import { Logged } from '../../types/logged';
import { ApiUsersRepository } from '../services/users.repository';
import { loginThunk, registerThunk } from './users.thunk';

describe('Given registerThunk', () => {
  test('it should be dispatched', () => {
    const mockRepo = {
      create: jest.fn(),
    } as unknown as ApiUsersRepository;
    const mockData = { repo: mockRepo, user: {} as UserNoId };
    appStore.dispatch(registerThunk(mockData));
    expect(mockRepo.create).toHaveBeenCalled();
  });
});
describe('Given loginThunk', () => {
  test('it should be dispatched', async () => {
    const mockReturnedValue = {} as Logged;
    const mockRepo = {
      login: jest.fn().mockReturnValueOnce(mockReturnedValue),
    } as unknown as ApiUsersRepository;
    const mockData = {
      repo: mockRepo,
      user: { userName: 'test', password: 'test' } as LoginData,
    };
    appStore.dispatch(loginThunk(mockData));
    await expect(mockRepo.login).toHaveBeenCalled();
  });
});
