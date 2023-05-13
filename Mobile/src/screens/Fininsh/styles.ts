import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;
`;

interface SnackTitle {
  snack: boolean;
}

export const Title = styled.Text<SnackTitle>`
  color: ${({ theme, snack }) => snack === true ? theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SubTitle = styled.Text`
  margin-top: 9px;
  margin-bottom: 9px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
`;

export const TextNegrito = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Footer = styled.View`
  width: 50%;
  margin-top: 32px;
`;
