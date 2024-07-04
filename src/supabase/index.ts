/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ProjectProps } from "~/types";
import db from "./config";

export const getAllMyProjects = async (): Promise<ProjectProps[]> => {
  try {
    const { data: my_projects, error } = await db
      .from("my_projects")
      .select("*")
      .order("id", { ascending: false });
    if (error) throw error;
    return my_projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
