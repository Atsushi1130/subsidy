import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';

import {fetchIndexData} from '../modules/index'

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: ;
  border-top: thin solid #A9A9A9;
  width: 100%;
  height: 8vh;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
`;
const TabWrapper = styled.div`
  width: 50vw; 
`; // TODO: オーバーレイリストボタン実装後50vwに修正
const IconWrappr = styled.div`
    text-align: center;
`;
/*------------タブのスタイル----------*/
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#0080c9',
      },
    },
    typography: {
      useNextVariants: true,
    },
  });
  
  const styles = {
    root: {
      width: 500,
    },
  };
/*------------タブコンポーネント----------*/
export const Tab = ({
    posts,
    onClickFormTab,
    onClickContentTab,
    onClickIndexTab,
    onClickAboutTab,
}) => {
    const [value, setValue] = useState('使い方')
    const handleChange = () => {
        setValue( {value} );
      }
    
    return (
    <>
    <FooterWrapper>
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels
        className="tab-icon"
        >    
            {/*MEMO: BottomNavigationActionは, BottomNavigation直下じゃないと動作しないので注意*/}
            <BottomNavigationAction label="制度一覧" icon={<AssignmentRoundedIcon />} style={{ color: "#2699FB", backgroundColor: "" }}
            onClick={() => {onClickIndexTab()}}
            />
            <BottomNavigationAction label="設定" icon={<SettingsRoundedIcon />} style={{ color: "#2699FB", backgroundColor: "" }}
            onClick={() => onClickFormTab()}
            />
            {/*
            <BottomNavigationAction label="ご説明" icon={<FavoriteIcon />}　style={{ color: "#2699FB", backgroundColor: "" }} 
            onClick={() => onClickAboutTab(posts)}
            />
            */}
        </BottomNavigation>
    </FooterWrapper>
    </>
    )
};
