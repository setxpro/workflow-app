import { useContext, useEffect, useState } from "react";
import * as C from "./styles";
import axios from "axios";
import { useTheme } from "../../hooks/useTheme";
import { AuthContext } from "../../contexts/auth";
import { avatarTemporary } from "../../utils/avatar";
import { useSidebar } from "../../hooks/useSidebar";

const Header = () => {
  const { wrapperSidebar, wrapperSettings } = useSidebar();
  const { user } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(avatarTemporary);

  const [openNotify, setOpenNotify] = useState(false);

  const [countData, setCountData] = useState(0);

  const wrapperNotify = () => setOpenNotify(!openNotify)

  useEffect(() => {
    const isAvatar = localStorage.getItem("avatar");

    if (isAvatar) {
      const foundAvatar = JSON.parse(isAvatar);
      setAvatar(foundAvatar);
    }

    // count items on arry database
    setCountData(10)
   
  }, [user?._id]);


  useEffect(() => {
    document.title = `${user?.name} ${user?.middleName}  | Bagweb`;
  }, [user?.name]);

  return (
    <C.Container>
      <C.ContentHeader>
        <C.LeftContentArea>
          <C.BarsIcon onClick={wrapperSidebar} />
        </C.LeftContentArea>
        <C.RightContentArea>
          <C.NotifyArea
            data-count={countData}
            onMouseOver={() => setOpenNotify(true)}
            onMouseLeave={() => setOpenNotify(false)}
            openNotify={openNotify}
          >
            <C.BellIcon onClick={wrapperNotify} onMouseOver={() => setOpenNotify(true)} />
          </C.NotifyArea>
          <C.AvatarNameArea>
            <C.NameArea>
              <h2>{user?.name} {user?.middleName} </h2>
              <h3>{user?.role}</h3>
            </C.NameArea>
            <C.AvatarImage onClick={wrapperSettings}>
              <div className="image-area">
                <img src={avatar} alt="avatar" />
              </div>
            </C.AvatarImage>
          </C.AvatarNameArea>
        </C.RightContentArea>
      </C.ContentHeader>
    </C.Container>
  );
};

export default Header;
