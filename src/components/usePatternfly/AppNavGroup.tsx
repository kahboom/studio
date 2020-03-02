/**
 * Source: https://github.com/riccardo-forina/use-patternfly
 */
import * as React from 'react';
import { NavGroup } from '@patternfly/react-core';
import { AppNavItem, IAppNavItemProps } from './AppNavItem';

export interface IAppNavGroupProps {
  title: string;
  items: Array<IAppNavItemProps | undefined>;
}

export const AppNavGroup: React.FunctionComponent<IAppNavGroupProps> = ({
                                                                          title,
                                                                          items,
                                                                        }) => {
  return (
    <NavGroup title={title}>
      {items.map((subNavItem, jdx) => (
        <AppNavItem {...subNavItem} key={jdx} />
      ))}
    </NavGroup>
  );
};
