import { addButtonClick, getButtonClicksCount } from '../../lib/filedb';

export default async (req, res) => {
  // Enforce posts
  if (req.method !== 'POST') {
    res.statusCode = 403;
    res.json(null);
    return;
  }

  addButtonClick();
  const count = getButtonClicksCount();

  res.statusCode = 200;
  res.json(count);
};
