import { MantineProvider } from '@mantine/core';
import "./styles/app.css"
import { Example } from './Example';

type AppProps = {
  name: string;
};

export function App(props: AppProps) {
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{ primaryColor: 'cyan', colorScheme: 'dark' }}
    >
      <Example />
    </MantineProvider>
  );
}
