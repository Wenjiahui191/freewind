import { render, screen, fireEvent } from "@testing-library/react";
import Alert, { AlertProps } from "./alert";

const defaultProps={
    onClose:jest.fn()
}

const testProps:AlertProps={
    message:'message',
    type:'success',
    description:'desc',
    onClose:jest.fn()
}

describe("test alert", () => {
  it("should alert render base on default props", async () => {
    render(<Alert {...defaultProps}></Alert>);
    const msg=screen.getByText('this is a alert')
    expect(msg).toBeInTheDocument()

    const icon=screen.getByText('x')
    expect(icon).toBeInTheDocument()
    fireEvent.click(icon)
    expect(defaultProps.onClose).toBeCalled()
  });
  it("should render alert with different props", () => {
    render(<Alert {...testProps}></Alert>);
    const msg=screen.getByText('message')
    expect(msg).toBeInTheDocument()

    const desc=screen.getByText('desc')
    expect(desc).toBeInTheDocument()

    const icon=screen.getByText('x')
    expect(icon).toBeInTheDocument()

    fireEvent.click(icon)
    expect(testProps.onClose).toBeCalled()
  });
  it("should not render close btn in alert", () => {
    render(<Alert showIcon={false}></Alert>);
    const msg=screen.getByText('this is a alert')
    expect(msg).toBeInTheDocument()
  });
});
