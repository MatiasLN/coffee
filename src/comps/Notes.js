import React from "react";

const Notes = ({ notes, setNotes }) => {
  return (
    <textarea
      id="file-notes"
      rows={5}
      cols={5}
      placeholder="Smaksnotater ..."
      value={notes}
    />
  );
};

export default Notes;
