import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { CardProps } from "./types";

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

interface StyledDivProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBoxShadow = ({ isActive, isSuccess, isWarning, theme }: StyledCardProps) => {
  if (isWarning) {
    return theme.card.boxShadowWarning;
  }

  if (isSuccess) {
    return theme.card.boxShadowSuccess;
  }

  if (isActive) {
    return theme.card.boxShadowActive;
  }

  return theme.card.boxShadow;
};

export const StyledDiv = styled.div<StyledDivProps>`
  backdrop-filter: blur(40px);
  border: ${({ theme }) => theme.card.boxShadow};
  border-radius: 12px;
  border: solid 1px rgba(245, 247, 250, 0.06);
  box-shadow: ${getBoxShadow};
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? "textDisabled" : "text"]};
  min-height: 280px;
  overflow: hidden;
  position: relative;

  ${space}
`;

StyledDiv.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};

const StyledCard = styled.div<StyledCardProps>`
  // background-color: ${({ theme }) => theme.card.background};
  background-image: ${({ theme }) => theme.card.background};
  height: 100%;
  min-height: 280px;
  width: 100%;

  ${space}
`;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};

export default StyledCard;
