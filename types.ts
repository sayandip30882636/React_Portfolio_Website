
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
  excerpt: string;
}