import { todoProject, todoComponentsProject } from "./todo";
import { weatherProject, weatherComponentsProject } from "./weather";

export const projectRegistry = {
  todo: todoProject,
  "todo-components": todoComponentsProject,
  weather: weatherProject,
  "weather-components": weatherComponentsProject,
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
