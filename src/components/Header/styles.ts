import styled from "styled-components/native";

export const Container = styled.View`
  height: 120px;
  padding: 24px;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;

`;
