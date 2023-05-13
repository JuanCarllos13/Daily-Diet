import { ArrowLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const IconSendRightButton = styled.TouchableOpacity`
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  position: absolute;
  top: 57px;
  left: 24px;
`;

export const TextPorcentagem = styled.Text`
  margin-top: 50px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`;

export const SubTextPorcentagem = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 23px;
`;

export const NumberInfo = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const BoxSequence = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  height: 89px;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const TextSequence = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const ContainerSnack = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxSnack = styled.View`
  width: 157px;
  height: 107px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const BoxTextSnack = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
  margin-top: 8px;
`;
