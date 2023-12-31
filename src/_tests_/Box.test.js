import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "../part1/Box";



// smoke test
it("renders without crashing", function () {
    render(<Box />);
});

// snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});
