import React, { ReactElement, useCallback } from "react";

import Github from "./icons/Github";
import Heart from "./icons/Heart";
import { CustomIconsProps } from "./types";

const CustomIcons = ({ id, ...props }: CustomIconsProps): ReactElement => {
  const getIconById = useCallback((iconId: string): string => {
    const icons = {
      github: Github,
      heart: Heart,
    };

    return (icons as any)[iconId];
  }, []);

  const Component = getIconById(id);

  return <Component {...props} />;
};

CustomIcons.defaultProps = {
  className: null,
  color: null,
};

export default CustomIcons;
