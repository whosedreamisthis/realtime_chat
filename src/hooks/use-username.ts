import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const ANIMALS = ["wolf", "hawk", "shark", "bear"];
const STORAGE_KEY = "chat_username";

const generateUsername = () => {
  const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return `anonymous-${word}-${nanoid(5)}`;
};

export const useUsername = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const main = () => {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        setUsername(stored);
        return;
      }
      const generated = generateUsername();
      setUsername(generated);
      localStorage.setItem(STORAGE_KEY, generated);
    };
    main();
  }, []);

  return { username };
};
