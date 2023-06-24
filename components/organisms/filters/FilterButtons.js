import { memo } from "react";
import styled from "styled-components";
import { Button } from "../../atoms";

const FilterButtons = ({ name, style, onClick, className, key }) => {
  const ButtonWrapper = styled(Button)`
    background: transparent;
    color: #219fdb;
    min-width: 5.20834vw;
    font-weight: 700;

    &:hover {
      background: #219fdb;
      color: #000;
      font-weight: 700;
    }
    &.active {
      background: #219fdb;
      color: #000;
      font-weight: 700;
      border: 0.1041668vw solid #219fdb;
    }
    @media (max-width: 1024px) {
      font-size: 1.27vw;
      padding: 0.78vw 3.12vw;
      border-radius: 0.78vw;
    }
  `;
  return (
    <ButtonWrapper
      lh={"1.0937514vw"}
      padding={"0.4166672vw 1.6666688vw"}
      radius={"0.4166672vw"}
      border={"0.1041668vw  solid #219FDB"}
      fz={"0.9375012vw"}
      height={"unset"}
      key={key}
      style={style}
      className={className}
      onClick={onClick}
    >
      {name}
    </ButtonWrapper>
  );
};

export default memo(FilterButtons);
