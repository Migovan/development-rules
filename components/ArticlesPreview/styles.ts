import styled from "styled-components";
import { DeleteOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { DefaultTheme } from "../../common-styles/theme";

interface Props {
  theme: DefaultTheme;
}

export const Wrapper = styled.div`
  border: 1px solid #e4d8d8;
  border-radius: 5px;
  width: 55%;
  margin: 30px 0 30px;
  padding: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  time {
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const Name = styled.div`
  font-weight: bold;
  margin: 0px 7px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.green};
`;

export const Title = styled.h2`
  margin: 10px 0 15px;
  color: ${(props) => props.theme.colors.black};
`;

export const Description = styled.p`
  line-height: 1.6em;
  color: ${(props) => props.theme.colors.deepBlack};
`;

export const Text = styled.div`
  font-family: "Amatic SC", cursive;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 300px;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const DeleteIcon = styled(DeleteOutlined)`
  color: ${(props) => props.theme.colors.lightGray};
  margin: 30px 10px;
  font-size: 1.3em;
`;

export const ArrowRightIcon = styled(ArrowRightOutlined)`
  color: ${(props) => props.theme.colors.lightGray};
  font-size: 1em;
`;

export const ReadMore = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid;
  width: 140px;
  padding: 10px;
  padding: 7px;
  font-size: 13px;
  border-radius: 3px;
  margin-top: 30px;
  border: ${(props: Props) => `1px solid  ${props.theme.colors.lightGreen}`};
  color: ${(props: Props) => props.theme.colors.lightGreen};
  &:hover {
    color: ${(props: Props) => props.theme.colors.pureWhite};
    border: ${(props: Props) => `1px solid  ${props.theme.colors.green}`};
    background-color: ${(props: Props) => props.theme.colors.green};
  }

  span {
    margin-right: 3px;
  }
`;
