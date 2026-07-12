import { useEffect, useState } from "react";

const useTypingEffect = (
    words: string[],
    typingSpeed = 120,
    deletingSpeed = 60,
    pause = 1500,
) => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const currentWord = words[wordIndex];

        const timer = setTimeout(
            () => {
                if (!isDeleting) {
                    const updated = currentWord.substring(0, text.length + 1);
                    setText(updated);

                    if (updated === currentWord) {
                        setTimeout(() => {
                            setIsDeleting(true);
                        }, pause);
                    }
                } else {
                    const updated = currentWord.substring(0, text.length - 1);
                    setText(updated);

                    if (updated === "") {
                        setIsDeleting(false);
                        setWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            isDeleting ? deletingSpeed : typingSpeed,
        );

        return () => clearTimeout(timer);
    }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pause]);

    return text;
};

export default useTypingEffect;
