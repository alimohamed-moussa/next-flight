import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  getLayout?: (__page: ReactElement) => ReactNode;
  layout?: ComponentType;
};