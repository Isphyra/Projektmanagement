import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("projectmanagement"); // select database

//////////////////////////////////////////
// projects
//////////////////////////////////////////
async function getProjects() {
    let projects = [];
    try {
      const collection = db.collection("projects");
  
      const query = {};
      projects = await collection.find(query).toArray();
      projects.forEach((project) => {
        projects._id = project._id.toString();
      });
    } catch (error) {
      console.log(error);
    }
    return projects;
  }
  // Get movie by id
async function getMovie(id) {
  let movie = null;
  try {
    const collection = db.collection("projects");
    const query = { _id: new ObjectId(id) };
    movie = await collection.findOne(query);

    if (!movie) {
      console.log("No movie with id " + id);
    } else {
      movie._id = movie._id.toString();
    }
  } catch (error) {
    console.log(error.message);
  }
  return movie;
}

async function createMovie(movie) {
    movie.poster = "/images/placeholder.webp"; // Default-Poster
    movie.actors = [];
    movie.watchlist = false;

    try {
        const collection = db.collection("movies");
        const result = await collection.insertOne(movie);
        return result.insertedId.toString(); // ObjectId als String zurückgeben
    } catch (error) {
        console.log(error.message);
    }
    return null;
}
  // export all functions so that they can be used in other files
export default {
    getProjects,
  };
  