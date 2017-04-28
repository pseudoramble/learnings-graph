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
  },
  {
    lid: 4,
    bio: {
      name: 'Caleb',
      age: 35
    }
  }
];
let nextLid = _.last(learners).lid + 1;

export const getLearner = id => {
  const lid = parseInt(id, 10);
  return learners.find(learner => learner.lid === lid);
};

export const searchLearners = criteria => {
  const matchingCriteria = _.matches(criteria);

  return learners.filter(({ bio }) => matchingCriteria(bio));
};

export const signup = info => {
  const learner = {
    lid: ++nextLid,
    bio: info
  };

  learners.push(learner);
  return learner;
};
