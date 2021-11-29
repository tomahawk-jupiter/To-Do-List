const factory = (name, info, due, priority) => {
  // format due date here
  const check = false;
  const id = name.replace(/\s/g, '');
  return {id, name, check, info, due, priority};
}


export {factory};
