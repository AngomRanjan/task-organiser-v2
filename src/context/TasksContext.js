import { createContext, useContext } from 'react';

const TasksContext = createContext();

export const useTasksContext = () => {
  return useContext(TasksContext);
};

export const TasksProvider = TasksContext.Provider;
