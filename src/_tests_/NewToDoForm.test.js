import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "../part2/NewToDoForm";



// smoke test
it("renders without crashing", function () {
    render(<NewTodoForm />);
});

// snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});
