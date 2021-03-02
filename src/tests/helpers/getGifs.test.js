import { getGifs } from "../../helpers/getGifs";
import React from "react";
import { shallow } from "enzyme";

describe("Tests with getGifs", ()=> {
    test("Return 10 elements", async ()=> {
        const gifs = await getGifs("One Punch");
        expect(gifs.length).toBe(10);
    });

    test("Return empty array", async ()=> {
        const gifs = await getGifs("");
        expect(gifs.length).toBe(0);
    });
});