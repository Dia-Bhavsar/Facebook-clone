import { Avatar } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import React, { useState } from 'react'
import db from './firebase';
import './MessageSender.css'
import { useStateValue } from './StateProvider';
import firebase from 'firebase'

function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setimageUrl] = useState('');
    const [{ user }] = useStateValue();

    const handleClick = (e) => {
        e.preventDefault();
        db.collection('post').add({

            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })

        setInput("");
        setimageUrl("");

    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`What's on your mind, ${user.displayName}? `} />

                    <input
                        value={imageUrl}
                        onChange={(e) => setimageUrl(e.target.value)}
                        placeholder="Image URL (Optional)" />
                    <button onClick={handleClick} type="submit">Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messeageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messeageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messeageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
