const factory = (name, info, due, priority) => {
  const check = false;
  const id = name.replace(/\s/g, "");

  if (info === "") {
    info = "None";
  }
  return { id, name, check, info, due, priority };
};

export { factory };
