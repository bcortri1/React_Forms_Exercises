import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import ToDoList from "../part2/ToDoList";



// smoke test
it("renders without crashing", function () {
    render(<ToDoList />);
});

// snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
});


it("add new ToDos", function () {
    const {queryByText} = render(<ToDoList/>)
    const addButton = queryByText("Add!");
    fireEvent.click(addButton);

    expect(document.getElementsByClassName("ToDo")[0]).toBeInTheDocument();
    expect(document.getElementsByClassName("ToDo")[1]).not.toBeDefined();

});

it("can add and contain multiple ToDos", function () {
    const { queryByText, getByLabelText } = render(<ToDoList />)
    const input = getByLabelText("ToDo:");
    const addButton = queryByText("Add!");

    fireEvent.click(addButton);
    expect(document.getElementsByClassName("ToDo")[0]).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "This is a test" } });
    fireEvent.click(addButton);
    expect(document.getElementsByClassName("ToDo")[1]).toBeInTheDocument();
    expect(document.getElementsByClassName("ToDo")[1].innerHTML).toMatch("This is a test");
    expect(document.getElementsByClassName("ToDo")[2]).not.toBeDefined();

});
