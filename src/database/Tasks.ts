import { Task } from "../interfaces/Task";

export const tasks: Task[] = [
  {
    id: 1,
    name: "Take out trash",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    dueDate: "2023-05-03",
    completed: true,
  },
  {
    id: 2,
    name: "Balance the Checkbook",
    description: "Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in.",
    dueDate: "2023-05-05",
    completed: false,
  },
  {
    id: 3,
    name: "Walk the dog",
    description: "Id consectetur purus ut faucibus pulvinar elementum. Bibendum est ultricies integer quis auctor elit. Et malesuada fames ac turpis egestas integer eget aliquet. Massa id neque aliquam vestibulum morbi blandit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim.",
    dueDate: "2023-05-07",
    completed: false,
  },
];