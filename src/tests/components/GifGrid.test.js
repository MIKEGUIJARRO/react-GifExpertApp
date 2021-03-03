import { shallow } from "enzyme";
import React from "react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("<GifGrid /> component test", () => {
    const category = "categoria1";
    test("Properly shows <GifGrid />", () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test("Should show items when the images are loaded with useFetchGifs hook", () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://google.com',
            title: 'ABC Title'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length)

    });

});