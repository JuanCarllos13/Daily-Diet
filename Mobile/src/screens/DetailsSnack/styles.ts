import styled from "styled-components/native";

interface ContainerProps {
  snack: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, snack }) =>
    snack ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-bottom: 15px;
`;

export const DateAndHour = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Box = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;

export const TextBox = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const BoxSnack = styled.View`
  width: 144px;
  height: 34px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 24px;
`;

export const TextSnack = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-left: 4px;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
  gap: 10px;
`;

export const ContainerBoxModal = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.View`
  width: 90%;
  height: 192px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;

`;

export const TextModal = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  text-align: center;
  margin-bottom: 32px;
`;

export const ContainerButtonModal = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
