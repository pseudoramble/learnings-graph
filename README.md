# Learnings Graph

Learning is most fun. It's also fun to see who is also learning about similar topics so you can bounce ideas off of them.

Our goal here is to learn a little bit about GraphQL. We'll do this by attempting to setup a simple model of people who are learning about topics (call them Learners) to others, and likewise find topics which are popular or that other people you know of are learning about.

The set of topics can be hard-coded. It's more about associating Learners with those topics, and finding new/old Friends studying those topics.

## Getting started

1. Clone this repo.
1. Run `npm install`.
1. Run `npm run dev` to start development.
1. Navigator to [GraphiQL](http://localhost:1234/graphiql) to get started exploring.

## What should we be able to do at the end of this?

The hope is to end up with the following operations:

* learner(id) -> Find a Learner by their ID
* learners(criteria) -> Find Learner's that match an exact set of criteria
* signup(info) -> Sign up new Learner's
* friends(myId) -> Find out what friends you have right now
* befriend(myId, newFriendId) -> Create an association between you & another Learner
* learnAbout(myId, topic) -> Start learning about a new topic
* learningAbout(friendId) -> Find out what your friend is learning about right now