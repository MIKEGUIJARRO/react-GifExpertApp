import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";


describe("Test of <GifExpertApp />", () => {

    test("<GifGrid /> is shown correctly", () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test("Should show a list of categories", () => {
        const categories = ["One punch", "Dragon Ball"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);
    });
});