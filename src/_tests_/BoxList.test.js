import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import BoxList from "../part1/BoxList";



// smoke test
it("renders without crashing", function () {
    render(<BoxList />);
});

// snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("add new Boxes", function () {
    const { queryByText } = render(<BoxList />);
    const addButton = queryByText("Add!");
    fireEvent.click(addButton);

    expect(document.getElementsByClassName("Box")[0]).toBeInTheDocument();
    expect(document.getElementsByClassName("Box")[1]).not.toBeDefined();

});

it("can add and contain multiple Boxes", function () {
    const { queryByText, getByLabelText } = render(<BoxList />)
    const width = getByLabelText("Width:");
    const height = getByLabelText("Height:");
    const color = getByLabelText("Color:");
    const addButton = queryByText("Add!");

    fireEvent.click(addButton);
    expect(document.getElementsByClassName("Box")[0]).toBeInTheDocument();
    expect(document.getElementsByClassName("Box")[0].style.width).toEqual("50px");
    expect(document.getElementsByClassName("Box")[0].style.height).toEqual("50px");
    expect(document.getElementsByClassName("Box")[0].style["background-color"]).toEqual("rgb(0, 0, 0)");

    fireEvent.change(width, { target: { value: "100" } });
    fireEvent.change(height, { target: { value: "900" } });
    fireEvent.change(color, { target: { value: "#911111" } });
    fireEvent.click(addButton);
    expect(document.getElementsByClassName("Box")[1]).toBeInTheDocument();
    expect(document.getElementsByClassName("Box")[1].style.width).toEqual("100px");
    expect(document.getElementsByClassName("Box")[1].style.height).toEqual("900px");
    expect(document.getElementsByClassName("Box")[1].style["background-color"]).toEqual("rgb(145, 17, 17)");
    expect(document.getElementsByClassName("Box")[2]).not.toBeDefined();

});
