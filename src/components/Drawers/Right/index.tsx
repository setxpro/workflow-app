import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles'
import CloseIcon from '@mui/icons-material/Close';
import useRootPageSettings from '../../../hooks/useRootPageSettings';


import ToggleTheme from '../../../pages/DrawersPages/Settings/ToggleTheme';
import EditAvatar from '../../../pages/DrawersPages/Settings/EditAvatar';
import EditUser from '../../../pages/DrawersPages/Settings/EditUser';
import AlterPassword from '../../../pages/DrawersPages/Settings/AlterPassword';
import { useSidebar } from '../../../hooks/useSidebar';

const SideRightSettings = () => {

    const { dispatch, state } = useRootPageSettings()
    const { openSettings, wrapperSettings} = useSidebar()
    
  return (
    <React.Fragment>
        <C.Container wrapper={openSettings}>
        <C.TitleArea>
            <CloseIcon onClick={wrapperSettings}/>
            <h2>Configurações</h2>
            <div/>
        </C.TitleArea>
        <C.CurrentTopMenus>
            <Link to="#" onClick={() => dispatch({type: 'theme'})} className={state.theme ? 'active' : ''}>Trocar o tema</Link>
            <Link to="#" onClick={() => dispatch({type: 'avatar'})} className={state.avatar ? 'active' : ''}>Alterar imagem</Link>
            <Link to="#" onClick={() => dispatch({type: 'users'})} className={state.users ? 'active' : ''}>Alterar usuário</Link>
            <Link to="#" onClick={() => dispatch({type: 'password'})} className={state.password ? 'active' : ''}>Alterar senha</Link>
        </C.CurrentTopMenus>
        <C.ContentPages>
            {state.theme && <ToggleTheme/>}
            {state.avatar && <EditAvatar/>}
            {state.users && <EditUser/>}
            {state.password && <AlterPassword/>}
        </C.ContentPages>
    </C.Container>
    <C.ContainerBlur wrapper={openSettings} onClick={wrapperSettings}></C.ContainerBlur>
    </React.Fragment>
  );
}

export default SideRightSettings;