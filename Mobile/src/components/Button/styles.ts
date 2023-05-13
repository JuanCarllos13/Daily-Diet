import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

interface TextColorProps {
  color?: string;
}

export const Text = styled.Text<TextColorProps>`
  color: ${({ theme, color }) => color ?? theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-left: 12px;
`;
