import { FC, useState } from "react";

export interface StatProps {
    /** topicID comments  */
    topicId: string;
    /** value comments */
    value: string
    /** sendToServer */
    sendToServer: (topic: string, value: string) => void
}

/**
 * Workhorse of the Stats Page, 
 * 
 * How does this change if the we use a popup?
 * 
 * @param StatProps 
 * @returns 
 */
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
