import { getButtonClicksCount } from '../../lib/filedb';

export default async (req, res) => {
  const count = getButtonClicksCount();
  res.statusCode = 200;
  res.json(count);
};
