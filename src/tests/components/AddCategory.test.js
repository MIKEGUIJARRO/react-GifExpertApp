import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory";


describe("<AddCategory /> test", () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    //Lifecycle test proofs
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test("Shows the <AddCategory /> correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Should change the textbox", () => {
        const input = wrapper.find("input");
        const value = "Hola mundo desde change textbox";
        input.simulate("change", { target: { value } });
        expect(wrapper.find("p").text().trim()).toBe(value);
    });

    test("Should not post the info with submit", () => {
        wrapper.find("form").simulate("submit", { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test("Should call setCategories and clean the textbox", () => {
        // 1. Simular el inputChange
        // 2. Simular el submit
        // 3. setCategories se debe de haber llamado
        // 4. el valor del input debe de estar ""
        const value = "Hola mundo desde clean textbox";
        wrapper.find("input").simulate("change", { target: { value } });
        wrapper.find("form").simulate("submit", { preventDefault() { } });
        /* let input = wrapper.find("input");
        let form = wrapper.find("form");
        input.simulate("change", { target: { value } });
        form.find("form").simulate("submit", { preventDefault() { } }); */
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find("input").prop("value")).toBe("");
    });
});