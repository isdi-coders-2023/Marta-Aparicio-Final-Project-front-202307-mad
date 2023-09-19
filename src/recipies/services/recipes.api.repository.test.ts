import { RecipeNoId } from '../../model/recipes';
import { ApiRecipesRepository } from './recipes.api.repository';

describe('Given ApiTasksRepository class ', () => {
  let repo: ApiRecipesRepository;
  beforeEach(() => {
    repo = new ApiRecipesRepository('');
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
      repo.create({} as RecipeNoId, 'token');
      expect(global.fetch).toHaveBeenCalled();
    });

    test('The method update should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.update({}, 'id', 'token');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method delete should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.delete('id', 'token');
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
    test('The method update should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.update({}, 'id', 'token')).rejects.toThrow();
    });
    test('The method delete should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.delete('id', 'token')).rejects.toThrow();
    });
  });
});
