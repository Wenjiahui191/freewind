import { FC } from 'react';
import { TabProps } from './tab';
import { TabItemProps } from './tabItem';
type TransformTabProps = FC<TabProps> & {
    TabItem: FC<TabItemProps>;
};
declare const TransformTabs: TransformTabProps;
export default TransformTabs;
