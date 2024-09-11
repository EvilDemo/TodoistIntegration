import { TriggerClient } from "@trigger.dev/sdk";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const TODOIST_API_TOKEN = process.env.TODOIST_API_TOKEN;

// Initialize Trigger.dev client
const client = new TriggerClient({
  id: "todoist-integration",
});

// Correct webhook definition without onReceive
client.defineJob({
  id: "todoist-task-handler",
  trigger: {
    type: "webhook",
    name: "todoist-task-webhook",
    path: "/webhook",
  },
  run: async (payload) => {
    const { action, taskName, taskId } = payload;

    if (action === "add") {
      await addTaskToTodoist(taskName);
    } else if (action === "complete") {
      await completeTodoistTask(taskId);
    } else {
      console.log("Unknown action");
    }
  },
});

const addTaskToTodoist = async (taskName) => {
  try {
    const response = await axios.post(
      "https://api.todoist.com/rest/v2/tasks",
      { content: taskName },
      { headers: { Authorization: `Bearer ${TODOIST_API_TOKEN}` } }
    );
    console.log("Task added successfully:", response.data);
  } catch (error) {
    console.error("Error adding task to Todoist:", error);
  }
};

const completeTodoistTask = async (taskId) => {
  try {
    await axios.post(
      `https://api.todoist.com/rest/v2/tasks/${taskId}/close`,
      {},
      { headers: { Authorization: `Bearer ${TODOIST_API_TOKEN}` } }
    );
    console.log("Task completed successfully:", taskId);
  } catch (error) {
    console.error("Error completing task in Todoist:", error);
  }
};
