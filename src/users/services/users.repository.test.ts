import { LoginData, UserNoId } from '../../model/user';
import { ApiUsersRepository } from './users.repository';

describe('Given ApiTasksRepository class ', () => {
  let repo: ApiUsersRepository;
  beforeEach(() => {
    repo = new ApiUsersRepository('');
  });
  describe('When we instantiate it', () => {
    test('The method getAll should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.getAll('1');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method getById should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.getById('1', 'test');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method create should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const mockUserNoId = {} as UserNoId;
      repo.create(mockUserNoId);
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
    test('The method update should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.update({}, '');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method delete should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.delete('');
      expect(global.fetch).toHaveBeenCalled();
    });
  });

  describe('When we instantiate it with errors', () => {
    test('The method getAll should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.getAll('1')).rejects.toThrow();
    });
    test('The method getById should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.getById('1', 'test')).rejects.toThrow();
    });
    test('The method create should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      const mockUserNoId = {} as UserNoId;
      expect(repo.create(mockUserNoId)).rejects.toThrow();
    });
    test('The method login should be used should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.login({} as LoginData)).rejects.toThrow();
    });
    test('The method update should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.update({}, '')).rejects.toThrow();
    });
    test('The method delete should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.delete('')).rejects.toThrow();
    });
  });
});
