import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Cards from './Cards';
export const attributes = {
};
export const actions = {
};
storiesOf("Cards", module)
.add("Test",()=>(
<Cards />))
