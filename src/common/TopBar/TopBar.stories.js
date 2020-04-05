import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TopBar from './TopBar';
export const attributes = {
};
export const actions = {
};
storiesOf("TopBar", module)
.add("Test",()=>(
<TopBar />))
