import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

interface TextInputProps {
  width?: "LG" | "SM";
  height?: "LG" | "SM";
}

export const TextInput = styled.TextInput<TextInputProps>`
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;

  width: ${({ width }) => (width === "SM" ? "153px" : "100%")};
  height: ${({ height }) => (height === "LG" ? "120px" : "48px")};
  padding: 10px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 5px;
`;
