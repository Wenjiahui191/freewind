import { render, screen, fireEvent } from "@testing-library/react";
import Alert, { AlertProps } from "./alert";

jest.mock("../Icon/icon", () => {
  return () => {
    return <i className="fa" />;
  };
});

jest.mock("react-transition-group", () => {
  return {
    CSSTransition: (props: any) => {
      return props.children;
    },
  };
});

const defaultProps = {
  onClose: jest.fn(),
};

const testProps: AlertProps = {
  message: "message",
  type: "success",
  description: "desc",
  onClose: jest.fn(),
};

let wrapper: HTMLElement;
describe("test alert", () => {
  it("should alert render base on default props", async () => {
    const { container } = render(<Alert {...defaultProps}></Alert>);
    wrapper = container;
    const msg = screen.getByText("标题");
    expect(msg).toBeInTheDocument();
    const icon=wrapper.querySelector(".alert-close-btn") as HTMLElement

    expect(icon).toBeInTheDocument();
    fireEvent.click(icon);
    expect(defaultProps.onClose).toBeCalled();
  });
  it("should render alert with different props", () => {
    render(<Alert {...testProps}></Alert>);
    const msg = screen.getByText("message");
    expect(msg).toBeInTheDocument();

    const desc = screen.getByText("desc");
    expect(desc).toBeInTheDocument();
  });
  it("should not render close btn in alert", () => {
    render(<Alert showIcon={false}></Alert>);
    const msg = screen.getByText("标题");
    expect(msg).toBeInTheDocument();
  });
});
