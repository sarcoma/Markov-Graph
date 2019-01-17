import React from 'react';
import SeedNode from '../graph/seed-node';
import prettifyValue from '../utility/prettify-value';

const NodeView = ({node, updateNode}) => {
    return (
        <div className={'node-view'}>
            <p className={'node-title'}>
                {node.label},{' '}
                            (<span className={'node-text'}>{node.id}</span>)
            </p>
            <label className={'node-label'}>
                <input
                    type='number'
                    className={'node-input'}
                    value={prettifyValue(node.value, node.conv, false)}
                    min={node.min === '-' ? '0' : node.min}
                    max={node.max === '-' ? '' : node.max}
                    step={node.step === '-' ? '' : node.step}
                    onChange={(event) => updateNode(node, event)}
                    disabled={node instanceof SeedNode}
                />
                <span className={'node-unit'}>{node.unit}</span>
            </label>
        </div>
    );
};

export default NodeView;