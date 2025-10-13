/**
 * Mock food recognition API
 * @param {File|Blob} file
 * @returns {Promise<Array<{name: string, probability: string}>>}
 */
export const recognizeImage = async (file) => {
  console.log("Received file for recognition:", file);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return a dummy response
  return [
    { name: file.name },
    { lastModified: file.lastModified },
    { lastModifiedDate: file.lastModifiedDate },
    { size: file.size },
    { type: file.type },
  ];
};

export const textresponse = async (file) => {
  console.log("Received text for recognition:", file);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return a dummy response
  return [`text received: ${[file]}`];
};
