# Bluey
Full stack application for forum using Docker.

# RUNNING INSTRUCTIONS
## YOU MUST HAVE DOCKER RUNNING ON YOUR HOST COMPUTER
To run the full stack applications simply download the repo zip file, extract it, and run the docker-compose file using:
### docker-compose -f \[filepath\] up
### To run in a detached state simply add the -d option after up. Ex:
docker-compose -f \[filepath\] up -d
### The filepath is the filepath to the docker-compose.yaml file which is just docker-compose.yaml if you are in the repo directory
### The first run of the command will have to build the containers before starting them and allowing you to visit the web application at localhost:3000

# Important Notes

### When you first build the project the database will be empty so you must first populate it with some information by creating posts etc...

### If you want to change the ports the containers are running on for some reason or want to edit the compose file to give the containers new names you'll have to manually go through the frontend and backend folders and change the hardcoded url/uri

### The project is not fully optimised for deployment so there might be some errors

# TODOS
1. Add user sign-up and login with authentication
2. Add ability to comment on posts
3. Add ability to reply to comments