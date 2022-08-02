# Deployment

Taking a project with Frontend, backend, database and putting it online where its accessible
Allows code to always be accessible without having to have it running on local system
Heroku a good platform, also AWS, docker

## Code Review

Code reviews are methodical assessments of code designed to identify bugs, increase code quality, and help developers learn the source code. Developing a strong code review process, or utilizing version control, sets a foundation for continuous improvement and prevents unstable code from shipping to customers.

- Set a intitial state so that users dont see input from other users

## Backend server code - creating controllers

- Can break down endpoints into controller files instead of one large file
- Need to do dependandy injection for new external endpoint functions
- Need to export the function module on external function
- Have to pass through dependancies as well,
- Check smartbrain-api register controller for example

## Security

- Need to do validation on forms and inputs
- Do validation on both frontend (form, inputs, submit button) and on backend, make sure data is in correct format
- Backend shouldnt trust frontend input, check it as well, double validation
- When using API keys dont send them in the clear, can be extracted from headers
