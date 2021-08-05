import axios from "axios";
import CharService from "../services/char-service";

jest.mock("axios");

describe("CharService Get Filtered Characters", () => {
  const expectedData = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      //...
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  };

  it("should return character", async () => {
    axios.get.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        data: [expectedData],
      });
    });
    expect(
      await CharService.getFilteredChars({
        gender: "all",
        status: "all",
        page: "1",
      })
    ).toEqual([expectedData]);
  });

  it("should return empty array when api error", async () => {
    const expectedStatus = 500;
    const expectedData = [];
    axios.get.mockImplementation(() => {
      return Promise.resolve({
        status: expectedStatus,
      });
    });
    expect(
      await CharService.getFilteredChars({
        gender: "all",
        status: "all",
        page: "1",
      })
    ).toEqual(expectedData);
  });
});

describe("CharService Get Character Detail", () => {
  it("should return character detail", async () => {
    const expectedData = {
      id: 3,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
    };
    axios.get.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        data: [expectedData],
      });
    });
    expect(await CharService.getCharDetail(3)).toEqual([expectedData]);
  });

  it("should return empty object when api error", async () => {
    const expectedStatus = 500;
    const expectedData = {};
    axios.get.mockImplementation(() => {
      return Promise.resolve({
        status: expectedStatus,
      });
    });
    expect(await CharService.getCharDetail(1)).toEqual(expectedData);
  });
});
