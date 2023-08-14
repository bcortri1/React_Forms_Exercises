import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDo from "../part2/ToDo";



// smoke test
it("renders without crashing", function () {
    render(<ToDo />);
});

// snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<ToDo />);
    expect(asFragment()).toMatchSnapshot();
});

