import { Request, Response } from "express";
import Project from "../models/Project";

export const getProjects = async (_req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};

export const createProject = async (req: Request, res: Response) => {
  const { title, description, technologies, githubLink } = req.body;

  try {
    const project = new Project({ title, description, technologies, githubLink });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Failed to create project" });
  }
};
