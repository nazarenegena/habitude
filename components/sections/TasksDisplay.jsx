"use client";
import React from "react";
import AddTask from "../AddTask";
import TodoList from "../TodoList";
import { TaskContextProvider } from "@/lib/context/taskContext";

const TasksDisplay = () => {
  return (
    <main className="max-w-4xl mx-auto mt-10">
      <TaskContextProvider>
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold my-6">To-Do</h1>
          <AddTask />
        </div>
        <TodoList />
      </TaskContextProvider>
    </main>
  );
};

export default TasksDisplay;