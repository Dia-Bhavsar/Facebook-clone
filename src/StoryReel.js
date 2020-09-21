import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image='../image/IMG-2674.PNG'
                profileSrc="../image/IMG_2689.PNG"
                title='Ian Somehalder'
            />
            <Story
                image="../image/IMG-2686.PNG"
                profileSrc="../image/IMG-2686.PNG"
                title="Yum"
            />
            <Story
                image="../image/dia.jpg"
                profileSrc="../image/dia.jpg"
                title="Dia"
            />s
            <Story
                image="../image/IMG-2687.PNG"
                profileSrc="../image/IMG_2690.PNG"
                title="Sugar"
            />

            <Story
                image="../image/IMG-2676.PNG"
                profileSrc="../image/IMG_2692.PNG"
                title="Travel Blog"
            />
            <Story
                image="../image/IMG-2688.PNG"
                profileSrc="../image/IMG_2691.PNG"
                title="ArtDelight"
            />

        </div>
    )
}

export default StoryReel
