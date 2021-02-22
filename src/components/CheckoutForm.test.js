import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //test renders CheckoutForm component and tests that the header of Form is also rendered
    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    // Arrange - renders component and gets access to the form elements in the DOM
    render(<CheckoutForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const submitButton = screen.getByRole("button", { name: /checkout/i });

    // Act - types into form and fills out all fields,  then submits.
    userEvent.type(firstNameInput, "Allison");
    userEvent.type(lastNameInput, "Castaneda");
    userEvent.type(addressInput, "2344 E Main Dr");
    userEvent.type(cityInput, "Tulsa");
    userEvent.type(stateInput, "WI");
    userEvent.type(zipInput, "34423");
    userEvent.click(submitButton);

    //Asserts - Makes sure that after submitting, the success message is printed.
    const woohoo = screen.getByText(/woo-hoo/i);
    expect(woohoo).toBeInTheDocument();
    
});
