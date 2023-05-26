import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 80%;
  /* background-color: ${({ theme }) => theme.COLORS.RED_DARK}; */
`;

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;
