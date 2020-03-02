/**
 * Source: https://github.com/riccardo-forina/use-patternfly
 */
import * as React from 'react';
import { AppLayoutContext } from './AppLayout';

export function useBreadcrumb(breadcrumb: React.ReactElement) {
  const context = React.useContext(AppLayoutContext);

  React.useEffect(() => {
    context.setBreadcrumb(breadcrumb);
    return () => {
      context.setBreadcrumb(null);
    };
  }, [context, breadcrumb]);
}
