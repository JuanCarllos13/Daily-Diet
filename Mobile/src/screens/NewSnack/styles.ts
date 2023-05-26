import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  padding: 24px;
`;

export const BoxDateAndHour = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

interface SnackProps {
  isActive: boolean;
  snack: "yes" | "no";
}

export const ButtonSelected = styled.TouchableOpacity<SnackProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 159px;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;

  ${({ isActive, snack, theme }) =>
    isActive &&
    snack === "yes" &&
    css`
      background-color: ${theme.COLORS.GREEN_MID};
    `}

  ${({ isActive, snack, theme }) =>
    isActive &&
    snack === "no" &&
    css`
      background-color: ${theme.COLORS.RED_MID};
    `}
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ContainerError = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerMinError = styled.View`
  width: 153px;
  margin-bottom: 15px;
`;

export const TextError = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
