import { LoginData, UserNoId } from '../../model/user';
import { ApiUsersRepository } from './users.repository';

describe('Given ApiTasksRepository class ', () => {
  let repo: ApiUsersRepository;
  beforeEach(() => {
    repo = new ApiUsersRepository('');
  });
  describe('When we instantiate it', () => {
    test('The method register should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const mockUserNoId = {} as UserNoId;
      repo.register(mockUserNoId);
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method login should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const item = {} as LoginData;
      repo.login(item);
      expect(global.fetch).toHaveBeenCalled();
    });
  });

  describe('When we instantiate it with errors', () => {
    test('The method register should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const mockUserNoId = {} as UserNoId;
      expect(repo.register(mockUserNoId)).rejects.toThrow();
    });
    test('The method login should be used should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.login({} as LoginData)).rejects.toThrow();
    });
  });
});
