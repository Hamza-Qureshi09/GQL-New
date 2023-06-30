const { UserList, MoviesList } = require('../Data/Fakedata')

// it contain all the resolvers of the app
const resolvers = {
    Query: {
        users: () => {
            // fetch data here from file or DB and return
            return UserList;
        },
        user: (parent, args) => {
            // args = arguments of this query
            const { name, id } = args
            // console.log(name, id, 'idis');
            // query to DB whose id is = to user provided id
            const user = UserList.find((user) => user.name === name.toString() && user.id === Number(id))
            return user
        },
        movies:()=>{
            return MoviesList
        }
    },

    //  for movies 
    User: {
        favoriteMovies: (parent, args) => {
            const { movieName, year } = args
            console.log(movieName, year);
            return MoviesList.filter((movie) => movie.year >= 2010)
        }
    }

};

module.exports = resolvers