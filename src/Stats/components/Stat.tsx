import { FC, useState } from "react";
import { sendMessageToServer } from "@DataLib/websocket";


export interface StatProps {
    /** topicID comments  */
    topicId: string;
    /** value comments */
    value: string
    /** sendToServer */
    sendToServer: (topic: string, value: string) => void
}

export const Stat: FC<StatProps> = ({ topicId, value, sendToServer }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newValue, setNewValue] = useState(value);

    const handleValueClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewValue(e.target.value);
    };

    const handleInputSubmit = () => {
        sendToServer(topicId, newValue);
        setIsEditing(false);
    };

    return (
        <div>
            <h3>{topicId}</h3>
            {isEditing ? (
                <input
                    value={newValue}
                    onChange={handleInputChange}
                    type="text"
                    onBlur={handleInputSubmit}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleInputSubmit();
                        }
                    }}
                />
            ) : (
                <p onClick={handleValueClick}>{newValue}</p>
            )}
        </div>
    );
};
