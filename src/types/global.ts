export interface RepoProps {
  id: number;
  name: string;
  language: string;
  updated_at: Date;
  visibility: string;
  homepage: string | null;
  pushed_at: Date;
  description: string | null;
}

export interface SelectedFilterProps {
  [x: string]: string | boolean | null;
}
