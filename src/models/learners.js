let learners = [
  {
    id: 1,
    bio: {
      name: 'Adam',
      age: 34
    }
  },
  {
    id: 2,
    bio: {
      name: 'Bailey',
      age: 28
    }
  },
  {
    id: 3,
    bio: {
      name: 'Caleb',
      age: 40
    }
  }
];

export const getLearner = id => learners.find(learner => learner.id === id);
export const searchLearners = criteria => ({});
export const signup = info => ({});
