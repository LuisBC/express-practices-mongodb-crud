import Task from "../models/Task";

export const getTasks = async (req, res) => {
  const tasks = await Task.find().lean(); // Lean is used to convert the data to a JSON object
  res.render("index", { tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean(); // Lean is used to convert the data to a JSON object
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
};

export const editTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body).lean(); // Lean is used to convert the data to a JSON object
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id, req.body).lean(); // Lean is used to convert the data to a JSON object
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const toggleDoneTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
