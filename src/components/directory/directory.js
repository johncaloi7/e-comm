import React from 'react';

import './directory.scss';

import MenuItem from '../menu-item/menu-item';
import { viewDirectory } from '../../redux/directory/directory.selectors';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';



const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: viewDirectory
})


export default connect(mapStateToProps)(Directory);
