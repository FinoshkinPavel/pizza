import React, { useEffect, useRef } from "react";
import { PizzaCard } from "./PizzaCard/PizzaCard";
import s from "./PizzaBlock.module.scss";
import { PizzaSceleton } from "./PizzaSceleton";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDebounce } from "../../hooks/useDebounce";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  filterSortBySelector,
  initStateFilterSlice,
  setFiltersAC,
} from "../../store/reducer/sort-and-fIlter-reducer";
import { menuSortAccordion } from "../../utils/helper-const/menu-sort-accordion-helper-const";
import { fetchPizzas } from "../../store/reducer/pizzas-reducer";
import { ErrorMessage } from "../ErrorMessage";

export const PizzaBlock: React.FC = () => {
  const { sort, indexCategories, search } =
    useAppSelector(filterSortBySelector);
  const { isLoading, requestStatus } = useAppSelector((state) => state.app);
  const arrPizzas = useAppSelector((state) => state.Pizzas);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounting = useRef(false);

  const debounceSearch = useDebounce<string>(search, 700);
  const category = indexCategories > 0 ? `category=${indexCategories}` : "";
  let sortBy = sort.namingSortBy.replace("-", "");
  const order = sort.namingSortBy.includes("-") ? "desc" : "asc";
  const _search = debounceSearch === "" ? "" : `&search=${debounceSearch}`;

  //если был первыйрендер,то проверяем URL- параметры и сохраняем в редуксе
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      if (
        initStateFilterSlice.indexCategories === Number(params.category) &&
        initStateFilterSlice.sort.namingSortBy === params.sortBy
      ) {
        dispatch(fetchPizzas({ category }));
      }
      const sortBy = menuSortAccordion.find(
        (el) => el.namingSortBy === params.sortBy
      );
      sortBy && dispatch(setFiltersAC({ ...params, sortBy: sortBy }));
      isSearch.current = true;
    }
  }, []);
  //Если изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounting.current) {
      const queryString = qs.stringify({
        category: indexCategories,
        sortBy: sort.namingSortBy,
        order,
      });
      navigate(`?${queryString}`);
    }
    isMounting.current = true;
  }, [indexCategories, sortBy, order]);
  //если был первый рендер то запрашиваем пиццы
  useEffect(() => {
    if (!isSearch.current) {
      dispatch(fetchPizzas({ category, sortBy, order, _search }));
    }
    isSearch.current = false;
  }, [indexCategories, sort.namingSortBy, debounceSearch]);

  return (
    <div className={s.pizzaBlock}>
      <h1>Все пицы</h1>
      <div className={s.pizzaCardCont}>
        {requestStatus === "rejected" ? (
          <ErrorMessage />
        ) : isLoading ? (
          [...new Array(12)].map((_, i) => <PizzaSceleton key={i} />)
        ) : (
          arrPizzas.map((el) => <PizzaCard key={el.id} {...el} />)
        )}
        {/*{}*/}
      </div>
    </div>
  );
};
