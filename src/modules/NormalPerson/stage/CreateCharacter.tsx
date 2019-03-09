import { registerElement } from 'lib/reg';
import { BaseStage } from 'lib/stages/BaseStage';
import * as React from 'react';

@registerElement('stage')
export class CreateCharacterStage extends BaseStage {
  public name = 'CreateCharacterStage';
  public order = 5;

  public getView() {
    return <div>{this.name}</div>;
  }
}
