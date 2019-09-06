import { postHabit } from '../services/habitsApi';

export const CREATE_HABIT = 'CREATE_HABBIT';
export const createHabit = (habit, description) => ({
  type: CREATE_HABIT,
  paylod: postHabit(habit, description)
});
