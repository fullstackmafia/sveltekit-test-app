import '@testing-library/jest-dom';
import { render } from "@testing-library/svelte";
import Counter from "./counter.svelte";

describe("counter component", () => {
  test("should confirm there are no images in the counter ", () => {
    const { container } = render(Counter);
    expect(container).not.toContainHTML("<img/>");
  });
});