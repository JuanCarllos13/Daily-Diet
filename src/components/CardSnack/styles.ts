import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  height: 49px;
  padding: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Hour = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Line = styled.View`
  height: 14px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-right: 12px;
  margin-left: 12px;
`;

export const Box = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Circle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.RED_MID};
`;
