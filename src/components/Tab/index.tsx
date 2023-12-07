import { FC } from 'react'
import Tabs,{TabProps} from './tab'
import TabItem,{TabItemProps} from './tabItem'

type TransformTabProps=FC<TabProps> & {
    TabItem:FC<TabItemProps>
}

const TransformTabs=Tabs as TransformTabProps
TransformTabs.TabItem=TabItem

export default TransformTabs
