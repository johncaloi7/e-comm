import { createSelector } from 'reselect';

const selectCollection = state => state.collections

export const selectShop = createSelector(
    [selectCollection],
    collections => collections.shop
)

export const selectCollectionsForPreview = createSelector(
    selectShop,
    shop => Object.keys(shop).map(key => shop[key])
)

export const selectCollectionPage = collectionParamsUrl => (
    createSelector(
    [selectShop],
    shop => shop[collectionParamsUrl]
    )
)