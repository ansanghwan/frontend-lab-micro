import { todoProject, todoComponentsProject } from "./todo";
import { weatherProject, weatherComponentsProject } from "./weather";
import { movieProject, movieComponentsProject } from "./movie";
import { bmiProject } from "./bmi";
import { passwordProject } from "./password";
import { cryptoProject } from "./crypto";

export const projectRegistry = {
  todo: todoProject,
  "todo-components": todoComponentsProject,
  weather: weatherProject,
  "weather-components": weatherComponentsProject,
  movie: movieProject,
  "movie-components": movieComponentsProject,
  bmi: bmiProject,
  password: passwordProject,
  crypto: cryptoProject,
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
