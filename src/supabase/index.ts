import { ProjectProps } from "~/types";
import axios from "axios";

export const getAllMyProjects = async (): Promise<ProjectProps[]> => {
  try {
    const { data: projectData } = await axios.get<{
      data: ProjectProps[];
      status: true;
    }>("https://portfolio-new-backend-52be.onrender.com/api/v1/projects/all");
    return projectData.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
