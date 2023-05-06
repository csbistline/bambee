export interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: string;
  status: "New" | "Completed";
}