import axios from "axios";

const instance = axios.create({
  baseURL: "https://6459daf665bd868e930a12fe.mockapi.io/",
});

export const pizzasApi = {
  fetchPizzas(
    category: string,
    sortBy?: string,
    order?: string,
    _search?: string
  ) {
    return instance.get(
      `items?${category}&sortBy=${sortBy}&order=${order}${_search}`
    );
  },
};
