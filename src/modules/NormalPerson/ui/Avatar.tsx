import * as React from 'react';
import { UIElement } from 'types/loader';

export class AvatarPanel extends React.Component {
  render() {
    return <div>Avatar</div>;
  }
}

export class AvatarElement implements UIElement {
  name = 'Avatar';
}
