import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: 50px;
  height: 100px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 2px;
  border-color: #333638;
`;

interface BoxProps {
  porcentagem: number;
}

export const BoxPorcentagem = styled.TouchableOpacity<BoxProps>`
  width: 100%;
  background-color: ${({ theme, porcentagem }) =>
    porcentagem < 50 ? theme.COLORS.RED_MID : theme.COLORS.GREEN_MID};
  height: 102px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const IconSendRight = styled(ArrowUpRight)`
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const TextPorcentagem = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`;

export const SubTextPorcentagem = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Snack = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-top: 40px;
  margin-bottom: 8px;
`;

export const TextDate = styled.Text`
  margin-top: 20px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;
