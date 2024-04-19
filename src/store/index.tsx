import { create } from "zustand";

interface AppState {
  showProjectModal: boolean;
  activeProjectId: number;
  toggleProjectModal: (open: boolean, projectId?: number) => void;
  setActiveProjectId: (projectId: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  showProjectModal: false,
  activeProjectId: 0,
  toggleProjectModal: (open, projectId) => {
    set({ showProjectModal: open, activeProjectId: projectId });
  },
  setActiveProjectId(projectId) {
    set({ activeProjectId: projectId });
  },
}));
