import React, {Fragment} from 'react';
import {ChildrenRendererType} from './types';

export const ChildrenRenderer: ChildrenRendererType = ({children}) => {
  return (
    <Fragment>
      {Array.isArray(children) ? (
        <Fragment>
          {children.map((child, index) => {
            return <Fragment key={index}>{child}</Fragment>;
          })}
        </Fragment>
      ) : (
        <>{children}</>
      )}
    </Fragment>
  );
};
