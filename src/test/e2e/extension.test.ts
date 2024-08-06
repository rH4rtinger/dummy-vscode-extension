import assert from "assert";
import { Workbench } from "vscode-extension-tester";

suite("e2e tests", () => {
  test("test helloWorld command", async () => {
    await new Workbench().executeCommand("foo.helloWorld");

    await new Promise((res) => setTimeout(res, 2000));

    // check, if the notification was given
    const notifications = await new Workbench().getNotifications();
    for (const notification of notifications) {
      const message = await notification.getMessage();
      if (message === "Hello World from foo!") {
        assert.ok(true, "command was executed successfully");
        return;
      }
    }

    assert.fail("command was not executed successfully");
  });
});
