import { create } from "zustand";
import { ProjectProps } from "~/types";

interface AppState {
  showProjectModal: boolean;
  activeProjectId: number;
  myProjects: ProjectProps[] | null;
  toggleProjectModal: (open: boolean, projectId?: number) => void;
  setActiveProjectId: (projectId: number) => void;
  setMyProjects: (projects: ProjectProps[]) => void;
}

export const useAppStore = create<AppState>((set) => ({
  showProjectModal: false,
  activeProjectId: 0,
  myProjects: null,
  toggleProjectModal: (open, projectId) => {
    set({ showProjectModal: open, activeProjectId: projectId });
  },
  setActiveProjectId(projectId) {
    set({ activeProjectId: projectId });
  },
  setMyProjects(projects) {
    set({ myProjects: projects });
  },
}));
