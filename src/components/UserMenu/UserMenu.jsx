import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import * as S from './UserMenu.styled'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  

  return (
    <div>
      <S.LogOutButton type="button" onClick={onLogout}>
        Logout
      </S.LogOutButton>
    </div>
  );
};