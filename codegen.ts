import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  //schema: 'https://hyr.hult.dev/v1/graphql',
  schema: [
    {
      'https://hyr.hult.dev/v1/graphql': {
        headers: {
          authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJhZG1pbiIsIngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYWRtaW4iXX19.9DmQ0gDhKr4tsxajdmVLkx5R6ZxIyu1Rqxl5g12F67Y',
        },
      },
    },
  ],
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        scalars: {
            numeric: 'number',
            date: 'string'
        }
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;