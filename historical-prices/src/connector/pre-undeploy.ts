import dotenv from 'dotenv';
dotenv.config();

import { createApiRoot } from '../client/create.client';
import { assertError } from '../utils/assert.utils';
import { deleteProductUpdateExtension } from './actions';

async function preUndeploy(): Promise<void> {
  const apiRoot = createApiRoot();
  await deleteProductUpdateExtension(apiRoot);
}

async function run(): Promise<void> {
  try {
    await preUndeploy();
  } catch (error) {
    assertError(error);
    process.stderr.write(`Pre-undeploy failed: ${error.message}`);
    process.exitCode = 1;
  }
}

run();
