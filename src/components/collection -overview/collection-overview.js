import React from 'react';

import './collection-overview.scss';

import CollectionPreview from '../collection-preview/collection-preview';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview  } from '../../redux/collections/collections.selectors';

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        { collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview 
})


export default connect(mapStateToProps)(CollectionOverview);