import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AutoComplete, { AutoCompleteProps } from "./autoComplete";
import { config } from "react-transition-group";

config.disabled = true;

const dateArr = [
  { value: "AA", count: 10 },
  { value: "AABB", count: 10 },
  { value: "BB", count: 11 },
  { value: "CC", count: 12 },
  { value: "DD", count: 13 },
];

const testProps: AutoCompleteProps = {
  fetchSuggest: (str) => dateArr.filter((d) => d.value.includes(str)),
  onSelect: jest.fn(),
  placeholder: "auto-complete",
};

let resultDom: HTMLElement;
let inputNode: HTMLInputElement;
describe("test complete", () => {
  beforeEach(() => {
    const { container } = render(<AutoComplete {...testProps} />);
    resultDom = container;
    inputNode = screen.getByPlaceholderText("auto-complete");
  });

  it("test basic AutoComplete behavior", async () => {
    fireEvent.change(inputNode, { target: { value: "AA" } });
    await waitFor(() => {
      expect(screen.getByText("AA")).toBeInTheDocument();
    });
    expect(resultDom.querySelectorAll(".suggest-item").length).toEqual(2);
    // click first item
    fireEvent.click(screen.getByText("AA"));
    expect(screen.queryByText("AA")).not.toBeInTheDocument();
    expect(testProps.onSelect).toHaveBeenCalled();
    expect(inputNode.value).toBe("AA");
  });

  it("test keyboard behavior", async () => {
    fireEvent.change(inputNode, { target: { value: "AA" } });
    await waitFor(() => {
      expect(screen.getByText("AA")).toBeInTheDocument();
    });
    fireEvent.keyDown(inputNode, { keyCode: 40 });
    expect(screen.getByText("AA")).toHaveClass("is-active");
    fireEvent.keyDown(inputNode, { keyCode: 40 });
    expect(screen.getByText("AA")).not.toHaveClass("is-active");
    expect(screen.getByText("AABB")).toHaveClass("is-active");
    fireEvent.keyDown(inputNode, { keyCode: 27 });
    expect(screen.queryByText("AA")).not.toBeInTheDocument();
  });

  it("test click outside should dropdown close", async () => {
    fireEvent.change(inputNode, { target: { value: "AA" } });
    await waitFor(() => {
      expect(screen.getByText("AA")).toBeInTheDocument();
    });
    fireEvent.click(document)
    expect(screen.queryByText("AA")).not.toBeInTheDocument()
  });
});
