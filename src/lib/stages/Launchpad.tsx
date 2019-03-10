import * as React from 'react';
import styled from 'styled-components';
import { BaseStage } from './BaseStage';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  position: absolute;
  left: 10%;
  top: 30%;
  font-size: 48px;
`;

const Verison = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-size: 9px;
  color: #999;
`;

const Actions = styled.div`
  position: absolute;
  right: 10%;
  bottom: 20%;

  button {
    display: block;
    height: 56px;
    line-height: 44px;
    width: 160px;
    margin-bottom: 10px;
    background-color: transparent;
    color: black;
    font-size: 24px;
    border: 0;
    outline: 0;
    cursor: pointer;
    padding: 10px;
    transition: font-size ease-in-out 0.1s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      color: white;
      font-size: 36px;
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export class LaunchpadStage extends BaseStage {
  public name = 'LaunchpadStage';

  public getView() {
    return (
      <Root>
        <Title>Freedom - 自由</Title>
        <Verison>v0.0.1</Verison>
        <Actions>
          <button onClick={this.onStart}>开始</button>
          <button>继续</button>
          <button>退出</button>
        </Actions>
      </Root>
    );
  }

  protected onStart = () => {};
}
