export interface Hook {
  id: string;
  name: string;
  description: string;
  category: string;
  repositoryUrl: string;
  stars: number;
  lastUpdated: string;
  tags: string[];
  author: string;
}

export type HookCategory =
  | "Code Quality"
  | "Notifications"
  | "Testing"
  | "Git/Version Control"
  | "Security"
  | "Logging"
  | "Custom Validation"
  | "Other/Utilities";
