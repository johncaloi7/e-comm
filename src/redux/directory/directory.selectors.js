import { createSelector } from 'reselect';

const selectDirectory = state => state.directory

export const viewDirectory = createSelector(
    [selectDirectory],
    directory => directory.sections
)