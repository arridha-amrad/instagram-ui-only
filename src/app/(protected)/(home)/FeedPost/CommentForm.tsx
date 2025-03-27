"use client";

import { useRef, useState } from "react";
import Emoji from "./Emoji";

function CommentForm() {
  const [comment, setComment] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);
  const cursorPositionRef = useRef<number>(0);

  // eslint-disable-next-line
  const handleEmojiSelect = (emoji: any) => {
    const cursorPos = cursorPositionRef.current;
    const currentText = comment;
    const newText =
      currentText.slice(0, cursorPos) +
      emoji.native +
      currentText.slice(cursorPos);
    setComment(newText);
    // Move cursor after the inserted emoji
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.selectionStart = inputRef.current.selectionEnd =
          cursorPos + emoji.native.length;
        inputRef.current.focus();
      }
    }, 10);
  };

  return (
    <form className="border-foreground/20 h-full w-full border-b pb-4">
      <div className="relative">
        <input
          name="comment"
          onClick={(e) => {
            cursorPositionRef.current = e.currentTarget.selectionStart ?? 0;
          }}
          onKeyUp={(e) => {
            cursorPositionRef.current = e.currentTarget.selectionStart ?? 0;
          }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          type="text"
          className="h-full w-full py-2 pr-16 text-sm outline-0"
          placeholder="Add comment "
        />
        <div className="absolute top-0 right-0 flex h-full w-max items-center gap-2">
          {comment && (
            <button
              type="submit"
              className="text-skin-primary text-sm font-medium"
            >
              Send
            </button>
          )}
          <Emoji onEmojiSelect={handleEmojiSelect} />
        </div>
      </div>
    </form>
  );
}

export default CommentForm;
