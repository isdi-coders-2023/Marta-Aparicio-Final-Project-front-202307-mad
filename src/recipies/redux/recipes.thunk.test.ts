import { Recipe, RecipeNoId } from '../../model/recipes';
import { appStore } from '../../store/store';
import { ApiRecipesRepository } from '../services/recipes.api.repository';
import { addThunk, eraseThunk, loadThunk, updateThunk } from './recipes.thunk';
describe('Given  load, add, uodate and delete thunks', () => {
  describe('Given loadThunk', () => {
    beforeEach(() => {
      jest.spyOn(Array.prototype, 'push').mockReturnValue(5);
      jest.spyOn(Array.prototype, 'map').mockReturnValue([]);
    });
    // const recipes = {
    //   pending: 'loading',
    //   fulfilled: 'loaded',
    //   rejected: 'error',
    // };

    test.only('getAll should be dispatched', () => {
      const mockRepo = {
        getAll: jest.fn().mockResolvedValue([]),
      } as unknown as ApiRecipesRepository;
      const mockData = mockRepo;
      appStore.dispatch(loadThunk(mockData));
      // expect(recipes.pending).toEqual('loading');
      expect(mockRepo.getAll).toHaveBeenCalled();
    });
    test('addThunk should be dispatched', () => {
      const mockRepo = {
        create: jest.fn().mockResolvedValue({} as Recipe),
      } as unknown as ApiRecipesRepository;
      const mockData = {
        repo: mockRepo,
        recipe: { name: 'test' } as RecipeNoId,
      };
      appStore.dispatch(addThunk(mockData));
      expect(mockRepo.create).toHaveBeenCalled();
    });
    test('updateThunk should be dispatched', () => {
      const mockRepo = {
        update: jest.fn(),
      } as unknown as ApiRecipesRepository;
      const mockData = {
        repo: mockRepo,
        recipe: {} as Partial<Recipe>,
        id: '',
      };
      appStore.dispatch(updateThunk(mockData));
      expect(mockRepo.update).toHaveBeenCalled();
    });
    test('deleteThunk should be dispatched', () => {
      const mockRepo = {
        delete: jest.fn(),
      } as unknown as ApiRecipesRepository;
      const mockData = {
        repo: mockRepo,
        recipe: {} as Recipe,
      };
      appStore.dispatch(eraseThunk(mockData));
      expect(mockRepo.delete).toHaveBeenCalled();
    });
  });
});
