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
      repo.getAll();
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
      repo.update({}, 'id');
      expect(global.fetch).toHaveBeenCalled();
    });
    test('The method delete should be used', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue('Test'),
      });
      repo.delete('id');
      expect(global.fetch).toHaveBeenCalled();
    });
  });

  describe('When we instantiate it with errors', () => {
    test('The method getAll should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.getAll()).rejects.toThrow();
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
      expect(repo.update({}, 'id')).rejects.toThrow();
    });
    test('The method create should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.create({} as RecipeNoId)).rejects.toThrow();
    });
    test('The method delete should be used with an error', () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jest.fn().mockResolvedValue('Test'),
      });
      expect(repo.delete('id')).rejects.toThrow();
    });
  });
});
