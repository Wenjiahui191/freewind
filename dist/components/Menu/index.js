import Menu from './menu';
import MenuItem from './menuItem';
import Submenu from './subMenu';
var TransFormMenu = Menu;
TransFormMenu.MenuItem = MenuItem;
TransFormMenu.SubMenu = Submenu;
export default TransFormMenu;
