import { fireEvent, render,screen } from "@testing-library/react";
import CustomerList from "./CustomerList";
import { describe, it } from 'vitest';

// Test Suite
describe("testing <CustomerList/>", () => {
  //test spec
  it("testing render <CustomerList/>", () => {
    render(<CustomerList/>);
    let btns = screen.getAllByRole("button");
    expect(btns.length).toBe(6);
  });

  //test spec
  it("testing delete <CustomerList/>", () => {
    render(<CustomerList />);
    let btns = screen.getAllByRole("button");
    fireEvent.click(btns[3]); // delete 4th customer
    let txt = screen.queryByText(/Phobhe/i);
    expect(txt).toBeNull();
    btns = screen.getAllByRole("button");
    expect(btns.length).toBe(5);
  });

   // test spec
      it("filter <CustomerList />", () => {
          render(<CustomerList />);  // not react-dom
          let txtBox = screen.getByPlaceholderText('search by name');
  
  
          fireEvent.change(txtBox, { "target": { "value": "Geller" } });
          screen.debug();
          let btns = screen.getAllByRole('button');
          expect(btns.length).toBe(2);
      });
});