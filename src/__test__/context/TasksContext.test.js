import React from 'react';
import { render, screen } from '@testing-library/react';
import { TasksProvider, useTasksContext } from '../../context';
// import { nanoid } from 'nanoid';

// Mock nanoid for consistent ID generation in tests
jest.mock('nanoid', () => ({
  nanoid: () => 'test-id',
}));

// A simple component to use the TasksContext
const TestComponent = () => {
  const { tasks, addTask } = useTasksContext();

  return (
    <div>
      <button onClick={() => addTask('New Task')}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
};

describe('TasksContext', () => {
  it('provides initial context values', () => {
    // Render the TestComponent within the TasksProvider
    render(
      <TasksProvider value={{ tasks: [], addTask: jest.fn() }}>
        <TestComponent />
      </TasksProvider>
    );

    // Check if the component renders without any tasks
    expect(screen.queryByText(/New Task/i)).not.toBeInTheDocument();
  });

  it('allows adding tasks through context', () => {
    const mockAddTask = jest.fn();

    render(
      <TasksProvider value={{ tasks: [], addTask: mockAddTask }}>
        <TestComponent />
      </TasksProvider>
    );

    // Click the button to add a task
    screen.getByText(/Add Task/i).click();

    // Check if the addTask function was called
    expect(mockAddTask).toHaveBeenCalledWith('New Task');
  });

  it('renders tasks from context', () => {
    const mockTasks = [
      { id: 'test-id-1', task: 'First Task', completed: false },
    ];

    render(
      <TasksProvider value={{ tasks: mockTasks, addTask: jest.fn() }}>
        <TestComponent />
      </TasksProvider>
    );

    // Check if the task is rendered
    expect(screen.getByText('First Task')).toBeInTheDocument();
  });
});
