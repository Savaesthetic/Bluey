# Bluey
Full stack application for forum using Docker.

# When creating images make sure they are on the same network so they can communicate

docker run -d -p 27017:27017 --name mongodb --net mongo-network mongo

docker run -d -p 8081:8081 --name mongo-express --net mongo-network -e ME_CONFIG_MONGODB_SERVER=mongodb mongo-express

need to swap uri to 'mongodb://mongo:27017' once I ahve settled everything into containers

keep an eye out on how the db is created and chosen when first connecting to the db server