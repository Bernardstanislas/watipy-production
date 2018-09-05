import React from 'react';

import StyledCategory from './Category.style';

export default class Category extends React.PureComponent {
    render() {
        const { title } = this.props;
        const droppedTexts = title.split(' ');
        return (
            <StyledCategory {...this.props}>
                <div className='title'>
                    <div className='name'>
                        {title}
                    </div>
                    <div className='dropped-text-container'>
                        {droppedTexts.map((droppedText) => (
                            <div className='dropped-text' key={droppedText}>
                                {droppedText}
                            </div>
                        ))}
                    </div>
                </div>
            </StyledCategory>
        );
    }
}
