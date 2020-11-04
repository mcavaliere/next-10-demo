import fs from 'fs';
import path from 'path';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

const buttonClicksFilePath = path.join(
  serverRuntimeConfig.PROJECT_ROOT,
  'db/ButtonClicks.json'
);

export function getButtonClicksData() {
  const data = fs.readFileSync(buttonClicksFilePath);
  return JSON.parse(data);
}

export function getButtonClicksCount() {
  return getButtonClicksData().length;
}

export function addButtonClick() {
  const clicks = getButtonClicksData();

  clicks.push({
    createdAt: new Date().toISOString(),
  });

  fs.writeFileSync(buttonClicksFilePath, JSON.stringify(clicks));
}
