import React, { useState } from "react";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void;
}

export const EmojiPickerWrapper: React.FC<EmojiPickerProps> = ({
  onEmojiSelect,
}) => {
  const [isPickerVisible, setIsPickerVisible] = useState(true);
  const theme = useTheme(); // Use theme hook

  const currentTheme = theme.theme === "dark" ? Theme.DARK : Theme.LIGHT;

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    onEmojiSelect(emojiData.emoji);
    setIsPickerVisible(false); // Hide picker after selecting an emoji
  };

  const handlePickerToggle = () => {
    setIsPickerVisible(!isPickerVisible); // Toggle picker visibility
  };

  return (
    <>
      {isPickerVisible && (
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          autoFocusSearch={false}
          theme={currentTheme} // Adjust theme dynamically
          skinTonesDisabled
          lazyLoadEmojis
          width={300}
          height={400}
        />
      )}
    </>
  );
};
