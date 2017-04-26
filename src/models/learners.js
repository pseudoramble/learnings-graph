import _ from 'lodash';

let learners = [
  {
    lid: 1,
    bio: {
      name: 'Adam',
      age: 34
    }
  },
  {
    lid: 4,
    bio: {
      name: 'Caleb',
      age: 35
    }
  },
  {
    lid: 2,
    bio: {
      name: 'Bailey',
      age: 28
    }
  },
  {
    lid: 3,
    bio: {
      name: 'Caleb',
      age: 40
    }
  }
];

export const getLearner = id => learners.find(learner => learner.id === id);

export const searchLearners = criteria => {
  const matchingCriteria = _.matches(criteria);

  return learners.filter(({ bio }) => matchingCriteria(bio))
                  .sort((a, b) => a.lid - b.lid);
};

export const signup = info => ({});
