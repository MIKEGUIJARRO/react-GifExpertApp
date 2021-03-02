import { GifGridItem } from "../../components/GifGridItem";
import React from "react";
import { shallow } from "enzyme";



describe("<GifGridItem /> test", () => {
    const id = "12345";
    const title = "This is a title";
    const url = "https://localhost/demo.png";
    const wrapper = shallow(<GifGridItem id={id} title={title} url={url} />);

    test("Shows the <GifGridItem /> correctly", () => {

        expect(wrapper).toMatchSnapshot();
    });

    test("Has a paragraph within the title", () => {
        const p = wrapper.find("p");

        expect(p.text().trim()).toBe(title);
    });

    test("Should contain the same img as the URL and alt of props", () => {
        const img = wrapper.find("img");

        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
    });

    test("Should contain animate__fadeIn class", () => {
        const div = wrapper.find("div");
        const classes = div.props().className;
        expect(classes.includes("animate__fadeIn")).toBe(true);
    });
});