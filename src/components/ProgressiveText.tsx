import React, { useState, useEffect } from 'react';

interface ProgressiveTextProps {
      text: string;
      interval?: number;
}

const ProgressiveText: React.FC<ProgressiveTextProps> = ({ text, interval = 100 }) => {
      const [displayText, setDisplayText] = useState('');

      useEffect(() => {
            let currentIndex = 0;

            const typeText = () => {
                  setTimeout(() => {
                        if (currentIndex <= text.length) {
                              setDisplayText(text.slice(0, currentIndex));
                              currentIndex++;
                              typeText();
                        } else {
                              currentIndex = 0;
                              setDisplayText('');
                              typeText();
                        }
                  }, interval);
            };

            typeText();

            return () => { };
      }, [text, interval]);

      return <div>{displayText}</div>;
};

export default ProgressiveText;
