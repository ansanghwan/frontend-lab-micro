import { todoProject, todoComponentsProject } from "./todo";
import { weatherProject } from "./weather";

export const projectRegistry = {
  todo: todoProject,
  "todo-components": todoComponentsProject,
  weather: weatherProject,
};

export const components = Object.fromEntries(
  Object.entries(projectRegistry).map(([slug, data]) => [slug, data.component])
);

export const requirementsMap = Object.fromEntries(
  Object.entries(projectRegistry).map(([slug, data]) => [
    slug,
    data.requirements,
  ])
);
