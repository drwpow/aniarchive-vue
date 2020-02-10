import * as preact from '/web_modules/preact.js';

export const MetaTable: preact.FunctionComponent = ({ children, ...rest }) => (
  <dl {...rest} className="metaTable">
    {children}
  </dl>
);

export const MetaKey: preact.FunctionComponent = ({ children, ...rest }) => (
  <dt {...rest} className="metaTable-key">
    {children}
  </dt>
);

export const MetaValue: preact.FunctionComponent = ({ children, ...rest }) => (
  <dd {...rest} className="metaTable-value">
    {children}
  </dd>
);
