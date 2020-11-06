export interface Employee {
  id: string;
  name: string;
  email: string;
  active: boolean;
  temporalPassword?: string;
  projects: ProjectSummary[];
}

export interface ProjectSummary {
  id: string;
  isAssigned?: boolean;
  projectName: string;
}

export const createEmptyEmployee = (): Employee => ({
  id: '',
  name: '',
  email: '',
  active: false,
  temporalPassword: '',
  projects: [],
});
