import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";


describe("Test in useFetchGifs hook", () => {
    test("should return initial state", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("One punch"));
        const { data, loading } = result.current;

        await waitForNextUpdate();
        console.log(data, loading);

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test("Should return an array of images and loading in false", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("One punch"));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});