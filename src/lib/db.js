import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("projectmanagement"); // select database

//////////////////////////////////////////
// projects
//////////////////////////////////////////

  // Get all projects
async function getProjects() {
  let projects = [];
  try {
    const collection = db.collection("projects");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    projects = await collection.find(query).toArray();
    projects.forEach((project) => {
      project._id = project._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return projects;
}

// Get project by id
async function getProject(id) {
  let project = null;
  try {
    const collection = db.collection("projects");
    const query = { _id: new ObjectId(id) }; // filter by id
    project = await collection.findOne(query);

    if (!project) {
      console.log("No project with id " + id);
      // TODO: errorhandling
    } else {
      project._id = project._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return project;
}

async function createProject(project) {
  project.poster = "/images/placeholder.webp"; // default poster
  //project.teamMebers = [];
  //project.watchlist = false;
  project.status = "Not Started"
  try {
    const collection = db.collection("projects");
    const result = await collection.insertOne(project);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// returns: id of the updated project or null, if project could not be updated
async function updateProject(project) {
  try {
    let id = project._id;
    delete project._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("projects");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: project });

    if (result.matchedCount === 0) {
      console.log("No project with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Project with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete project by id
// returns: id of the deleted project or null, if project could not be deleted
async function deleteProject(id) {
  try {
    const collection = db.collection("projects");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No project with id " + id);
    } else {
      console.log("Project with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;

}


// export all functions so that they can be used in other files
export default {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};