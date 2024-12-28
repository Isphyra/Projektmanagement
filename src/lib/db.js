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
  project.status = "In Progress"
  project.projectlist = false;
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
      console.log("Kein Projekt mit Id " + id);
      // TODO: errorhandling
    } else {
      console.log("Projekt mit Id " + id + " wurde erfolgreich gelöscht.");
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
      console.log("Kein Projekt mit Id " + id);
    } else {
      console.log("Projekt mit Id " + id + " wurde erfolgreich gelöscht.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;

}

//////////////////////////////////////////
// personal
//////////////////////////////////////////
// Get all personals
async function getPersonals() {
  let personals = [];
  try {
    const collection = db.collection("personal");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    personals = await collection.find(query).toArray();
    personals.forEach((personals) => {
      personals._id = personals._id.toString(); // convert ObjectId to String
    });
    //console.log(personals)
  } catch (error) {
    // TODO: errorhandling
  }
  return personals;
}
// Get personal by id
async function getPersonal(id) {
  let personal = null;
  try {
    const collection = db.collection("personal");
    const query = { _id: new ObjectId(id) }; // filter by id
    personal = await collection.findOne(query);

    if (!personal) {
      console.log("No personal with id " + id);
      // TODO: errorhandling
    } else {
      personal._id = personal._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return personal;
}
async function createPersonal(personal) {
  try {
    const collection = db.collection("personal");
    const result = await collection.insertOne(personal);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

/*
async function updatePersonal(personal) {
  try {
    let id = personal._id;
    delete personal._id; 
    const collection = db.collection("personal");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: personal });

    if (result.matchedCount === 0) {
      console.log("Kein Personal mit Id " + id);
      // TODO: errorhandling
    } else {
      console.log("Personal mit Id " + id + " wurde erfolgreich gelöscht.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}
*/

async function deletePersonal(id) {
  try {
    const collection = db.collection("personal");
    const query = { _id: new ObjectId(id) }; 
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("Kein Personal mit Id " + id);
    } else {
      console.log("Personal mit Id " + id + " wurde erfolgreich gelöscht.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;

}

// Am Schluss alle hier definierten Funktionen exportieren
export default {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getPersonals,
  getPersonal,
  createPersonal,
  deletePersonal,
};