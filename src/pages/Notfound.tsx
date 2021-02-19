import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Notfound() {
  return (
    <Wrapper>
      <h2>Opps! Page not found</h2>
      <span>
        Comeback to
        <Link to="/">
          <button>Home</button>
        </Link>
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin-left: 10px;
  }
`;
