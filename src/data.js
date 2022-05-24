import { format } from "date-fns";

const today = new Date();
const oneDayFromNow = new Date(today.setDate(today.getDate() + 1));
const threeDayFromNow = new Date(today.setDate(today.getDate() + 3));
const oneWeekFromNow = new Date(today.setDate(today.getDate() + 7));

const data = {
  General: [
    {
      id: "AddTasks",
      name: "Add Tasks",
      check: false,
      info: "Add some tasks to track.",
      due: format(oneWeekFromNow, "EEE do LLL yy"),
      priority: "low",
    },
    {
      id: "Test",
      name: "Test",
      check: false,
      info: "Test medium priority.",
      due: format(threeDayFromNow, "EEE do LLL yy"),
      priority: "medium",
    },
    {
      id: "Test2",
      name: "Test 2",
      check: true,
      info: "Test high priority.",
      due: format(oneDayFromNow, "EEE do LLL yy"),
      priority: "high",
    },
  ],
};

export { data };
