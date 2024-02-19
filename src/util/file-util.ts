import path from 'path';

const absolutePath = (relativePath: string) => {
  return path.join(__dirname, `../../${relativePath}`);
};

export const FileUtil = {
  absolutePath,
};
