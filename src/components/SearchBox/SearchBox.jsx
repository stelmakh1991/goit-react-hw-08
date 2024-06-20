import * as S from "./SearchBox.styled";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);
  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <S.SearchBox>
      <S.SearchTitle>Find contacts by name 🔎</S.SearchTitle>
      <S.SearchInput
        type="name"
        name="findUser"
        onChange={onChangeFilter}
        value={filter}
      />
    </S.SearchBox>
  );
};

export default SearchBox;