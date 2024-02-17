import path from 'path';

const absoluteFilePath = (relativePath: string) => {
  return path.join(__dirname, `../../${relativePath}`);
};

export const FileUtil = {
  absoluteFilePath,
};
