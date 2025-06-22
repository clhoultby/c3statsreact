import { FC, useRef, useState } from "react";
import { sendMessageToServer } from "@DataLib/websocket";

export const Stat: FC<{ topicId: string; value: string }> = ({ topicId, value }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newValue, setNewValue] = useState(value);

    const handleValueClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewValue(e.target.value);
    };

    const handleInputSubmit = () => {
        sendMessageToServer(topicId, newValue);
        setIsEditing(false);
    };

    return (
        <div>
            <h3>{topicId}</h3>
            {isEditing ? (
                <input
                    value={newValue} // Bind to newValue
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
