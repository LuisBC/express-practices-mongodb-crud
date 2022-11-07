import express from "express";
import { create } from "express-handlebars";
import path from "path";
import morgan from "morgan";

import indexRoutes from "./routes/task.routes";

const app = express();

// Template engine
app.set("views", path.join(__dirname, "views"));

const hbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"), // This can be removed if is partials folder name (get by default)
  defaultLayout: "main",
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(indexRoutes);

export default app;
