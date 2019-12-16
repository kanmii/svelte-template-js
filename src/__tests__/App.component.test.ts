/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from "@testing-library/svelte";
import App from "../App.svelte";

test("it renders component", () => {
  render(App, {
    props: { name: "me" }
  });

  const domMain = document.getElementById("app-main") as HTMLElement;
  expect(domMain.textContent).toBe("Hello me");
});

// Note: This is as an async test as we are using `fireEvent`
// Using await when firing events is unique to the svelte testing library because
// we have to wait for the next `tick` so that Svelte flushes all pending state changes.
/**
test("changes button text on click", async () => {
  render(Comp, { name: "World" });
  const domButton = document.getElementById("button");

  await fireEvent.click(domButton);
  expect(domButton.textContent).toBe("Button Clicked");
});
*/
