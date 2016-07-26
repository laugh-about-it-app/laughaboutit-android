# Laugh About it
Laugh About It is a social captioning app available for both Android and iOS where fellas can swipe to vote on captions as well as contribute their own typed captions. 

### Table of Contents:
  - Setting up Android environment
  - Setting up iOS environment
  - Setting up Heroku environment
  - Communicating with backend endpoints

### Setting up Android Environment

### Setting up Heroku Environment
- Download [Heroku Toolbelt](https://toolbelt.heroku.com/)
- Download [Postico](https://eggerapps.at/postico/), a PostgreSQL GUI
- Get familiar with [deploying on Heroku](https://devcenter.heroku.com/articles/git)
- Note: We deploy our server / landing page separate from the ReactNative code.
- Within our server code, add shielded-springs-75726 (or whatever app you are designating as your staging environment) as a git remote repository. Whenever you make changes, add and commit them, then push to the remote. 
- To view your Postgres db in Postico, read [Heroku's guide to connecting their Heroku Postgres Databases outside of Heroku](https://devcenter.heroku.com/articles/connecting-to-heroku-postgres-databases-from-outside-of-heroku)
