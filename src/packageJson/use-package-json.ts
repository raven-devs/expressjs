// eslint-disable-next-line
// @ts-ignore
import PackageJson from '../../package.json';

interface ReturnProps {
  appFullName: string;
}

export const usePackageJson = (): ReturnProps => {
  const appFullName = `${PackageJson.name}@${PackageJson.version}`;

  return {
    appFullName,
  };
};
