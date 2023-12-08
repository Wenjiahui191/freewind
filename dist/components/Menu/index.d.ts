import { FC } from 'react';
import { MenuProps } from './menu';
import { MenuItemProps } from './menuItem';
import { SubMenuProps } from './subMenu';
type TransformMenuProps = FC<MenuProps> & {
    MenuItem: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransFormMenu: TransformMenuProps;
export default TransFormMenu;
