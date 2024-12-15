import { MongoClient, ObjectId } from "mongodb"; 
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect(); // Verbindet mit der MongoDB
const db = client.db("projectmanagement"); // Auswahl der Datenbank

// Zugriff auf Collections
const projectsCollection = db.collection("projects");
const tasksCollection = db.collection("tasks");

// Hilfsfunktionen
export const getProjects = async () => {
    return await projectsCollection.find({}).toArray();
};

export const getProjectById = async (id) => {
    return await projectsCollection.findOne({ _id: new ObjectId(id) });
};

export const createProject = async (projectData) => {
    return await projectsCollection.insertOne(projectData);
};

export const updateProject = async (id, projectData) => {
    return await projectsCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: projectData }
    );
};

export const deleteProject = async (id) => {
    return await projectsCollection.deleteOne({ _id: new ObjectId(id) });
};

export const getTasksByProjectId = async (projectId) => {
    return await tasksCollection.find({ projectId: new ObjectId(projectId) }).toArray();
};

export const createTask = async (taskData) => {
    return await tasksCollection.insertOne(taskData);
};

export const updateTask = async (id, taskData) => {
    return await tasksCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: taskData }
    );
};

export const deleteTask = async (id) => {
    return await tasksCollection.deleteOne({ _id: new ObjectId(id) });
};

// Exportiere db und client, falls zusätzliche Funktionen benötigt werden
export { db, client };
