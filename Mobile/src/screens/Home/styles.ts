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

export const ContainerImage =styled.View`
  border-radius: 20px;
  border-width: 2px;
  border-color: #333638;
`

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
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

export const NotContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NoMealText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const TextCreateMeal = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;


export const ContainerBoxModal = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
`;



export const ContainerModal = styled.View`
  width: 90%;
  padding: 20px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;

`;

export const PreviewImagemModal = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`

export const TextUpdateImage = styled.Text`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

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