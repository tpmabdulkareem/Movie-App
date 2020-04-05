import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchBar from './SearchBar';
export const attributes = {
};
export const actions = {
};
storiesOf("SearchBar", module)
.add("Test",()=>(
<SearchBar />))
