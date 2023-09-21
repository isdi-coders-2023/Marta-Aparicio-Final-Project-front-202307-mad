import { Recipe, RecipeNoId } from '../../model/recipes';
import { appStore } from '../../store/store';
import { ApiRecipesRepository } from '../services/recipes.api.repository';
import { addThunk, eraseThunk, loadThunk, updateThunk } from './recipes.thunk';
describe('Given  class ', () => {
  beforeEach(() => {
    jest.spyOn(Array.prototype, 'push').mockReturnValue(5);
    jest.spyOn(Array.prototype, 'map').mockReturnValue([]);
  });

  const mockRepo = {
    getAll: jest.fn(),
    create: jest.fn().mockResolvedValue({} as Recipe),
    update: jest.fn(),
    delete: jest.fn(),
  } as unknown as ApiRecipesRepository;
  describe('Given loadThunk', () => {
    test('getAll should be dispatched', () => {
      // const mockRepo = {
      //   getAll: jest.fn(),
      // } as unknown as ApiRecipesRepository;
      const mockData = mockRepo;
      appStore.dispatch(loadThunk(mockData));
      expect(mockRepo.getAll).toHaveBeenCalled();
    });
  });
  describe('Given addThunk', () => {
    test('addThunk should be dispatched', () => {
      // const mockRepo = {
      //   create: jest.fn().mockResolvedValue({} as Recipe),
      // } as unknown as ApiRecipesRepository;
      const mockData = {
        repo: mockRepo,
        recipe: { name: 'test' } as RecipeNoId,
      };
      appStore.dispatch(addThunk(mockData));
      expect(mockRepo.create).toHaveBeenCalled();
    });
  });
  describe('Given updateThunk', () => {
    test('updateThunk should be dispatched', () => {
      // const mockRepo = {
      //   update: jest.fn(),
      // } as unknown as ApiRecipesRepository;
      const mockData = {
        repo: mockRepo,
        recipe: {} as Partial<Recipe>,
        id: '',
      };
      appStore.dispatch(updateThunk(mockData));
      expect(mockRepo.update).toHaveBeenCalled();
    });
  });
  describe('Given deleteThunk', () => {
    test('deleteThunk should be dispatched', () => {
      // const mockRepo = {
      //   delete: jest.fn(),
      // } as unknown as ApiRecipesRepository;
      const mockData = {
        repo: mockRepo,
        recipe: {} as Recipe,
      };
      appStore.dispatch(eraseThunk(mockData));
      expect(mockRepo.delete).toHaveBeenCalled();
    });
  });
});
