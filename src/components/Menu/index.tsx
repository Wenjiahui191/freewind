import {FC} from 'react'
import Menu,{MenuProps} from './menu'
import MenuItem,{MenuItemProps} from './menuItem'
import Submenu,{SubMenuProps} from './subMenu'

type TransformMenuProps=FC<MenuProps> & {
    MenuItem:FC<MenuItemProps>,
    SubMenu:FC<SubMenuProps>
}

const TransFormMenu=Menu as TransformMenuProps

TransFormMenu.MenuItem=MenuItem
TransFormMenu.SubMenu=Submenu

export default TransFormMenu
