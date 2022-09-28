import { app } from './app';
import { connectToDatabase } from './database';

const PORT = process.env.PORT ?? 3333;

const start = async (): Promise<void> => {
  await connectToDatabase();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

start();
