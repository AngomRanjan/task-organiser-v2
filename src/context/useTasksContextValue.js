import { useReducer, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid';

const taskReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'add':
      return [{ id: nanoid(), task: payload, completed: false }, ...state];
    case 'update':
      return state.map((task) =>
        task.id === payload.id ? { ...task, ...payload.updatedTask } : task
      );
    case 'delete':
      return state.filter((task) => task.id !== payload);
    case 'toggleStatus':
      return state.map((task) =>
        task.id === payload ? { ...task, completed: !task.completed } : task
      );
    case 'clearCompleted':
      return state.filter((task) => !task.completed);
    default:
      return state;
  }
};

const getInitialState = () => {
  try {
    const localTasks = JSON.parse(localStorage.getItem('tasks'));
    return Array.isArray(localTasks) ? localTasks : [];
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
};

export const useTasksContextValue = () => {
  const [tasks, dispatch] = useReducer(taskReducer, getInitialState());

  const total = tasks.length || 0;
  const completedTotal = tasks.filter((todo) => todo.completed).length || 0;
  const pendingTotal = total - completedTotal;

  const isAlreadyExists = (task) => tasks.some((item) => item.task === task);

  const addTask = (task) => {
    if (isAlreadyExists(task)) {
      throw new Error('Task Already Exists!. Tasks not Added.');
    }
    dispatch({ type: 'add', payload: task });
  };

  const updateTask = (id, updatedTask) => {
    dispatch({ type: 'update', payload: { id, updatedTask } });
  };

  const deleteTask = (id) => {
    dispatch({ type: 'delete', payload: id });
  };

  const toggleComplete = (id) => {
    dispatch({ type: 'toggleStatus', payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: 'clearCompleted' });
  };

  // Update localStorage whenever tasks change
  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }, [tasks]);

  const contextValue = useMemo(
    () => ({
      tasks,
      total,
      completedTotal,
      pendingTotal,
      addTask,
      updateTask,
      deleteTask,
      toggleComplete,
      clearCompleted,
    }),
    [tasks, total, completedTotal, pendingTotal]
  );

  return contextValue;
};
