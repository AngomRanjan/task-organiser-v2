import { renderHook, act } from '@testing-library/react';
import { useTasksContextValue } from '../../context';

// Mock nanoid
jest.mock('nanoid', () => {
  let idCounter = 0; // Move idCounter inside the mock implementation
  return {
    nanoid: () => `test-id-${++idCounter}`, // Unique IDs for each task
  };
});

describe('useTasksContextValue Hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with tasks from localStorage if available', () => {
    const initialTasks = [{ id: '1', task: 'Sample Task', completed: false }];
    localStorage.setItem('tasks', JSON.stringify(initialTasks));

    const { result } = renderHook(() => useTasksContextValue());

    expect(result.current.tasks).toEqual(initialTasks);
    expect(result.current.total).toBe(1);
    expect(result.current.completedTotal).toBe(0);
    expect(result.current.pendingTotal).toBe(1);
  });

  it('should add a new task', () => {
    const { result } = renderHook(() => useTasksContextValue());

    act(() => {
      result.current.addTask('New Task');
    });

    expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].task).toBe('New Task');
    expect(result.current.tasks[0].id).toBe('test-id-1');
  });

  it('should update an existing task', () => {
    const { result } = renderHook(() => useTasksContextValue());

    // Add a task first
    act(() => {
      result.current.addTask('Task to be updated');
    });

    act(() => {
      result.current.updateTask('test-id-2', {
        task: 'Updated Task',
      });
    });

    expect(result.current.tasks[0].task).toBe('Updated Task');
  });

  it('should toggle task completion status', () => {
    const { result } = renderHook(() => useTasksContextValue());

    // Add a task first
    act(() => {
      result.current.addTask('Task to be toggled');
    });

    act(() => {
      result.current.toggleComplete('test-id-3');
    });

    expect(result.current.tasks[0].completed).toBe(true);
  });

  it('should delete a task', () => {
    const { result } = renderHook(() => useTasksContextValue());

    // Add a task first
    act(() => {
      result.current.addTask('Task to be deleted');
    });

    act(() => {
      result.current.deleteTask('test-id-4');
    });

    expect(result.current.tasks.length).toBe(0);
  });

  it('should clear completed tasks', () => {
    const { result } = renderHook(() => useTasksContextValue());

    // Add tasks
    act(() => {
      result.current.addTask('First Task');
      result.current.addTask('Second Task');
    });

    act(() => {
      result.current.toggleComplete('test-id-5');
    });

    act(() => {
      result.current.clearCompleted();
    });

    expect(result.current.tasks.length).toBe(1); // Only the uncompleted task remains
  });

  it('should save tasks to localStorage when tasks change', () => {
    const { result } = renderHook(() => useTasksContextValue());

    act(() => {
      result.current.addTask('Task to be saved');
    });

    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    expect(savedTasks.length).toBe(1);
    expect(savedTasks[0].task).toBe('Task to be saved');
  });
});
