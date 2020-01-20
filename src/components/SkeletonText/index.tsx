import * as preact from '/web_modules/preact.js';

const SkeletonText: preact.FunctionComponent = ({ children, ...props }) => (
  <div className="skeletonText" {...props}>
    {children}
  </div>
);

export default SkeletonText;
