// eslint-disable-next-line
// @ts-ignore
import PackageJson from '../../package.json';

interface ReturnProps {
  appName: string;
}

export const usePackageJson = (): ReturnProps => {
  const appName = `${PackageJson.name}@${PackageJson.version}`;

  return {
    appName,
  };
};
