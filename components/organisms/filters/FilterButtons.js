import { memo, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../atoms";

const FilterButtons = ({ name, style, onClick, className, key }) => {
  const ButtonWrapper = styled(Button)`
    background: #105475;
    min-width: 5.20834vw;
    &:hover {
      background: #219fdb;
      color: #fff;
    }
    &.active {
      background: #219fdb;
      color: #fff;
      border: 0.1041668vw solid #219fdb;
    }
  `;
  return (
    <ButtonWrapper
      radius={"0.260417vw"}
      ml={"1.041668vw"}
      lh={"1.0937514vw"}
      padding={"0.4083336vw 0.6250008vw"}
      border={"0.1041668vw solid #fff"}
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
