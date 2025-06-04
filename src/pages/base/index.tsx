import { useEffect, type ReactNode } from 'react';

export type BaseProps = {
  pageTitle: string;
  children: ReactNode;
};

export function BasePage(props: BaseProps) {
  const children = props.children;

  useEffect(() => {
    document.title = props.pageTitle;
  }, [props.pageTitle]);

  return children;
}
