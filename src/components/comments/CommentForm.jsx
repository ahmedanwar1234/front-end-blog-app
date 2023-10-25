import React, { useState } from "react";

const CommentForm = ({
  btnLabel,
  formSubmitHandler,
  formCancelHandler = null,
  initialText = "",
  loading=false
}) => {
  const [value, setValue] = useState(initialText);

  const submitHandler = (e) => {

    e.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className=" flex flex-col items-end border border-primary rounded-lg p-4">
        <textarea
          onChange={(e) => setValue(e.target.value)}
          rows={"5"}
          className=" bg-transparent w-full focus:outline-none"
          placeholder="Leave Your comment here... "
          value={value}
        ></textarea>

        <div
          className=" flex
     pt-2 items-center  justify-center gap-x-2  flex-col-reverse gap-y-2  min-[420px]:flex-row"
        >
          {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              className=" px-6 py-2.5 rounded-lg border border-red-500 text-red-500"
            >
              Cancel
            </button>
          )}

          <button
          disabled={loading}
            type="submit"
            className="  px-6 py-3 rounded-lg bg-primary text-white font-semibold  disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
